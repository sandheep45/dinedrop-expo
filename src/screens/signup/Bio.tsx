import React from "react";

//React native
import { View, TextInput, useColorScheme } from "react-native";

//Components
import SignUpLayout from "../../components/layout/SignUpLayout";

//Types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { SignUpParamList } from "../../../types/navigator";

type Props = NativeStackScreenProps<SignUpParamList, "BioPage">;

const Bio = ({ navigation }: Props) => {
  const colorScheme = useColorScheme();
  return (
    <SignUpLayout
      nextPage="Add Profile Pic"
      heading="Fill in your bio to get started"
      info="This data will be displayed in your account profile for security"
      onPressPrev={() => navigation.goBack()}
      onPressNext={() => navigation.navigate("UploadImagePage")}
      className="flex-1 flex items-center justify-between py-4"
    >
      <View className="flex items-center justify-center w-full gap-y-3 pr-3">
        <TextInput
          placeholderTextColor={colorScheme === "dark" ? "#fff" : "#a1a1aa"}
          className="w-full h-16 p-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-800"
          placeholder="First Name"
        />

        <TextInput
          placeholderTextColor={colorScheme === "dark" ? "#fff" : "#a1a1aa"}
          className="w-full h-16 p-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-800"
          placeholder="Last Name"
        />

        <TextInput
          placeholderTextColor={colorScheme === "dark" ? "#fff" : "#a1a1aa"}
          className="w-full h-16 p-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-800"
          placeholder="Confirm password"
        />
      </View>
    </SignUpLayout>
  );
};

export default Bio;
