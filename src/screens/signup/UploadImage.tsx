import React, { useState, useEffect } from "react";

//React native
import { Text, View, Pressable, Image, Button } from "react-native";

//Expo
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

//Components
import SignUpLayout from "../../components/layout/SignUpLayout";

//Custom Hook
import useToast from "../../hooks/useToast";
import { useSignUpContext } from "../../context/SignUpContextProvider";
import { useUploadToCloudinary } from "../../hooks/useFileUploadToCloudinary";

//Types
import type { SignUpParamList } from "../../../types/navigator";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

//Svgs
import GalleryIcon from "../../../assets/svg/GalleryIcon";
import CameraIcon from "../../../assets/svg/CameraIcon";
import ClickPictureIcon from "../../../assets/svg/ClickPictureIcon";
import { CloudinaryUploadImageResponse } from "../../../types/CloudinaryUploadImageResponse";
import Loader from "../../components/global/Loader";

type Props = NativeStackScreenProps<SignUpParamList, "UploadImagePage">;

const UploadImage: React.FC<Props> = ({ navigation }) => {
  let camera: Camera;
  const { start, isUploading, hasErrored } = useUploadToCloudinary();
  const { showToast } = useToast();
  const [startCamera, setStartCamera] = useState(false);
  const [image, setImage] = useState("");
  const { setSignUpState, signUpState } = useSignUpContext();

  useEffect(() => {
    if (signUpState.picture) {
      setImage(signUpState.picture);
    }
  }, [signUpState]);

  const openCamera = async () => {
    try {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        // start the camera
        setStartCamera(true);
      } else {
        showToast({
          message: "Camera permission needed",
          type: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const takePicture = async () => {
    try {
      const photo = await camera.takePictureAsync({
        base64: true,
      });
      setImage(`data:image/jpg;base64,${photo.base64}`);
      setStartCamera(false);
    } catch (error) {
      console.log(error);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {
        setImage(`data:image/jpg;base64,${result.assets[0].base64}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextButton = async () => {
    if (!image) {
      showToast({
        message: "Please select an image",
        type: "error",
      });
      return;
    }

    if (image === signUpState.picture) {
      navigation.navigate("SetLocationPage");
      return;
    }

    start(image, "image", signUpState.username, (data) => {
      setImage(data.secure_url);
      setSignUpState((prevState) => ({
        ...prevState,
        picture: data.secure_url,
      }));
      navigation.navigate("SetLocationPage");
    });

    if (hasErrored) {
      showToast({
        message: "Something went wrong",
        type: "error",
      });
    }
  };

  if (startCamera) {
    return (
      <View className="relative flex-1 justify-center">
        <Camera
          ref={(r) => {
            camera = r;
          }}
          style={{ flex: 1 }}
        />
        <View className="flex w-full items-center absolute bottom-3 ">
          <Pressable onPress={takePicture}>
            <ClickPictureIcon />
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <>
      {isUploading && <Loader />}
      <SignUpLayout
        nextPage="Set Location"
        heading="Upload Your Photo Profile"
        info="This data will be displayed in your account profile for security"
        onPressPrev={() => navigation.goBack()}
        onPressNext={handleNextButton}
        className="flex-1 flex items-center justify-between py-4"
      >
        {image ? (
          <View className="flex-1 gap-3">
            <Image source={{ uri: image, height: 400, width: 400 }} />
            <View>
              <Button title="Remove Image" onPress={() => setImage("")} />
            </View>
          </View>
        ) : (
          <View className="flex gap-y-5 py-9 w-full items-center">
            <Pressable
              onPress={pickImage}
              className="flex gap-y-8 w-full dark:bg-[#252525] py-6 items-center rounded-lg"
            >
              <GalleryIcon className="scale-[2]" />
              <Text className="dark:text-white font-black text-lg">
                From Gallery
              </Text>
            </Pressable>

            <Pressable
              onPress={openCamera}
              className="flex gap-y-8 w-full dark:bg-[#252525] py-6 items-center rounded-lg"
            >
              <CameraIcon className="scale-[2]" />
              <Text className="dark:text-white font-black text-lg">
                Take Photo
              </Text>
            </Pressable>
          </View>
        )}
      </SignUpLayout>
    </>
  );
};

export default UploadImage;
