import React, { useState, useEffect } from "react";

//React native
import { Text, View, Pressable, Image, Button } from "react-native";

//Expo
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

//Apollo graphql
import { ReactNativeFile } from "apollo-upload-client";

//Components
import SignUpLayout from "../../components/layout/SignUpLayout";

//Custom Hook
import useToast from "../../hooks/useToast";
import { useSignUpContext } from "../../context/SignUpContextProvider";

//Types
import { SignUpParamList } from "../../../types/navigator";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

//Svgs
import GalleryIcon from "../../../assets/svg/GalleryIcon";
import CameraIcon from "../../../assets/svg/CameraIcon";
import ClickPictureIcon from "../../../assets/svg/ClickPictureIcon";

type Props = NativeStackScreenProps<SignUpParamList, "UploadImagePage">;

const UploadImage: React.FC<Props> = ({ navigation }) => {
  let camera: Camera;
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
      const photo = await camera.takePictureAsync();
      setImage(photo.uri);
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
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextButton = () => {
    if (!image) {
      showToast({
        message: "Please select an image",
        type: "error",
      });
      return;
    }

    const file = new ReactNativeFile({
      uri: image,
      name: signUpState.username,
      type: "image/jpeg",
    });

    setSignUpState((currentState) => ({
      ...currentState,
      picture: file,
    }));
    navigation.navigate("SetLocationPage");
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
  );
};

export default UploadImage;
