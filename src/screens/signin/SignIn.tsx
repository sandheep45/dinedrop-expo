//React
import React from "react";

//React native
import { Text, TextInput, View, TouchableOpacity, useColorScheme } from "react-native";

//Expo
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

//components
import AuthHero from "../../components/global/AuthHero";
import KeyboardAvoidWrapper from "../../components/global/KeyboardAvoidWrapper";

//Svg
import FacebookLogo from "../../../assets/svg/FacebookLogo";
import GoogleLogo from "../../../assets/svg/GoogleLogo";

//types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { SignInParamList } from "../../../types/navigator";

type Props = NativeStackScreenProps<SignInParamList, "SignInPage">;

const SignIn: React.FC<Props> = ({ navigation }) => {
  const colorScheme = useColorScheme()
  const [fontsLoaded] = useFonts({
    "BentonSans Bold": require("../../../assets/fonts/BentonSans/BentonSansBold.otf"),
  });

  if (!fontsLoaded) return null;

  return (
    <KeyboardAvoidWrapper>
      <View className="flex gap-6 bg-white flex-1 py-10 dark:bg-black">
        <AuthHero />

        <View className="flex-1 flex items-center justify-start">
          <Text className="font-['BentonSans Bold'] text-2xl font-black dark:text-white">
            Login To Your Account
          </Text>

          <View className="h-full flex items-center justify-center gap-y-9 w-full px-5 mt-0'">
            <View className="flex items-center justify-center w-full gap-y-3">
              <TextInput
                placeholderTextColor={colorScheme === "dark" ? "#fff" : "#a1a1aa"}
                className="w-full h-16 py-4 px-3 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-800 dark:text-white"
                placeholder="Email"
              />

              <TextInput
                placeholderTextColor={colorScheme === "dark" ? "#fff" : "#a1a1aa"}
                className="w-full h-16 py-4 px-3 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-800 dark:text-white"
                placeholder="Password"
              />
            </View>

            <Text className="font-black text-center dark:text-white">
              Or Continue With
            </Text>

            <View className="flex items-center justify-center w-full space-y-5">
              <View className="flex flex-row justify-center items-center space-x-10">
                <TouchableOpacity className="flex bg-gray-100 flex-row justify-center items-center space-x-3 px-8 py-4 rounded-lg dark:bg-gray-800">
                  <FacebookLogo />
                  <Text className="dark:text-white text-lg">Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity className="flex bg-gray-100 flex-row justify-center items-center space-x-3 px-8 py-4 rounded-lg dark:bg-gray-800">
                  <GoogleLogo />
                  <Text className="dark:text-white text-lg">Google</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPasswordPage")}
              >
                <Text className="text-center text-[#15BE77]">
                  Forgot your Password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => alert("pressed")}>
              <LinearGradient
                colors={["#53E88B", "#15BE77"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                className="px-10 py-3 rounded-lg"
              >
                <Text className="text-white font-black text-lg">Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default SignIn;
