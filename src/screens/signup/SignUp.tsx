//React
import React, { useEffect, useState } from "react";

//React native
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
  Pressable,
} from "react-native";

//expo
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

//components
import AuthHero from "../../components/global/AuthHero";
import KeyboardAvoidWrapper from "../../components/global/KeyboardAvoidWrapper";

//Custom Hooks
import { useSignUpContext } from "../../context/SignUpContextProvider";
import useToast from "../../hooks/useToast";

//SVGs
import ProfileIcon from "../../../assets/svg/ProfileIcon";
import MailIcon from "../../../assets/svg/MailIcon";
import PasswordIcon from "../../../assets/svg/PasswordIcon";

//Types
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SignInParamList, SignUpParamList } from "../../../types/navigator";

type Props = CompositeScreenProps<
  NativeStackScreenProps<SignUpParamList, "SignUpPage">,
  NativeStackScreenProps<SignInParamList, "SignInPage">
>;

const SignUp = ({ navigation, route }: Props) => {
  const colorScheme = useColorScheme();
  const { setSignUpState, signUpState } = useSignUpContext();
  const { showToast } = useToast();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    keepSignedIn: false,
    emailForAds: false,
  });

  useEffect(() => {
    if (route.params?.email && route.params?.username) {
      setInput((currentValue) => ({
        ...currentValue,
        email: route.params?.email,
        username: route.params?.username,
      }));
    }
  }, [route.params]);

  const handleInput = (name: string, value: string | boolean) => {
    setInput((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  };

  const handleNextButton = () => {
    if (Object.values(input).some((value) => value === "")) {
      showToast({
        message: "Please fill in all the fields",
        type: "error",
      });
      return;
    }

    setSignUpState((currentState) => ({
      username: input.username,
      email: input.email,
      password: input.password,
      firstname: route.params?.firstName,
      lastname: route.params?.lastName,
      phone: "",
      picture: route.params.picture,
    }));
    navigation.navigate("BioPage");
  };

  return (
    <KeyboardAvoidWrapper>
      <View className="flex gap-6 bg-white flex-1 py-10 dark:bg-black">
        <AuthHero />

        <View className="flex-1 flex items-center justify-start">
          <Text className="font-['BentonSans Bold'] text-2xl font-black dark:text-white">
            Sign Up For Free
          </Text>

          <View className="h-full flex items-center justify-center gap-9 w-full px-5 mt-0">
            <View className="flex items-center justify-center w-full gap-y-3 ">
              <View className="w-full relative">
                <ProfileIcon className="absolute top-5 left-2 z-20" />
                <TextInput
                  onChangeText={(value) => handleInput("username", value)}
                  value={input.username}
                  placeholderTextColor={
                    colorScheme === "dark" ? "#fff" : "#a1a1aa"
                  }
                  className="w-full h-16 py-4 pr-3 pl-10 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-800"
                  placeholder="Username"
                />
              </View>

              <View className="w-full relative">
                <MailIcon className="absolute top-5 left-2 z-10" />
                <TextInput
                  onChangeText={(value) => handleInput("email", value)}
                  value={input.email}
                  placeholderTextColor={
                    colorScheme === "dark" ? "#fff" : "#a1a1aa"
                  }
                  className="w-full h-16 py-4 pr-3 pl-10 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-800"
                  placeholder="Email"
                />
              </View>

              <View className="w-full relative">
                <PasswordIcon className="absolute top-5 left-2 z-10" />
                <TextInput
                  onChangeText={(value) => handleInput("password", value)}
                  secureTextEntry={!isPasswordVisible}
                  value={input.password}
                  placeholderTextColor={
                    colorScheme === "dark" ? "#fff" : "#a1a1aa"
                  }
                  className="w-full h-16 py-4 pr-3 pl-10 border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-800"
                  placeholder="Password"
                />
                <Pressable
                  className="absolute top-3 right-2 p-2 z-10"
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Entypo
                    name={!isPasswordVisible ? "eye" : "eye-with-line"}
                    size={24}
                    color={colorScheme === "dark" ? "#fff" : "#a1a1aa"}
                  />
                </Pressable>
              </View>
            </View>

            <View className="w-full flex gap-y-2">
              <View className="w-full flex flex-row items-center gap-x-2">
                <Checkbox
                  value={input.keepSignedIn}
                  onValueChange={(value) => handleInput("keepSignedIn", value)}
                  className="rounded-full"
                />
                <Text className="font-thin dark:text-white">
                  Keep Me Signed In
                </Text>
              </View>

              <View className="w-full flex flex-row items-center gap-x-2">
                <Checkbox
                  value={input.emailForAds}
                  onValueChange={(value) => handleInput("emailForAds", value)}
                  className="rounded-full"
                />
                <Text className="font-thin dark:text-white">
                  Email Me About Special Pricing
                </Text>
              </View>
            </View>

            <View className="flex gap-y-4">
              <TouchableOpacity onPress={handleNextButton}>
                <LinearGradient
                  colors={["#53E88B", "#15BE77"]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  className="px-10 py-3 rounded-xl"
                >
                  <Text className="text-white font-black text-lg">
                    Next step {`>>`} Add Bio
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("SignInPage")}
              >
                <Text className="text-center text-[#15BE77]">
                  Already have an account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default SignUp;
