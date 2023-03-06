import React from "react";

//React native
import { Text, View } from "react-native";

//Components
import SignUpLayout from "../../components/layout/SignUpLayout";

//Types
import { SignUpParamList } from "../../../types/navigator";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

//Svgs
import GalleryIcon from "../../../assets/svg/GalleryIcon";
import CameraIcon from "../../../assets/svg/CameraIcon";

type Props = NativeStackScreenProps<SignUpParamList, "UploadImagePage">;

const UploadImage: React.FC<Props> = ({ navigation }) => {
  return (
    <SignUpLayout
      nextPage="Set Location"
      heading="Upload Your Photo Profile"
      info="This data will be displayed in your account profile for security"
      onPressPrev={() => navigation.goBack()}
      onPressNext={() => navigation.navigate("SetLocationPage")}
      className="flex-1 flex items-center justify-between py-4"
    >
      <View className="flex gap-y-10 py-9">
        <View className="flex gap-y-8">
          <GalleryIcon className="scale-[2]" />
          <Text>From Gallery</Text>
        </View>

        <View className="flex gap-y-8">
          <CameraIcon className="scale-[2]" />
          <Text>Take Photo</Text>
        </View>
      </View>
    </SignUpLayout>
  );
};

export default UploadImage;
