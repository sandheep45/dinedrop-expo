import React, { useState } from "react";

//React native
import { View, TextInput, useColorScheme } from "react-native";

//Components
import SignUpLayout from "../../components/layout/SignUpLayout";

//Types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { SignUpParamList } from "../../../types/navigator";

type Props = NativeStackScreenProps<SignUpParamList, "BioPage">;

const Bio: React.FC<Props> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setInput((currentInput) => ({
      ...currentInput,
      [name]: value,
    }));
  };

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
          onChangeText={(value) => handleInputChange("firstname", value)}
          value={input.firstName}
          placeholder="First Name"
        />

        <TextInput
          placeholderTextColor={colorScheme === "dark" ? "#fff" : "#a1a1aa"}
          onChangeText={(value) => handleInputChange("lastName", value)}
          value={input.lastName}
          className="w-full h-16 p-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-800"
          placeholder="Last Name"
        />

        <TextInput
          placeholderTextColor={colorScheme === "dark" ? "#fff" : "#a1a1aa"}
          onChangeText={(value) => handleInputChange("mobileNumber", value)}
          value={input.mobileNumber}
          className="w-full h-16 p-4 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-800"
          placeholder="Mobile Number"
        />
      </View>
    </SignUpLayout>
  );
};

export default Bio;
