//React
import React, { useState } from "react";

//React native
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  useColorScheme,
  GestureResponderEvent,
} from "react-native";

//Expo
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";

//components
import AuthHero from "../../components/global/AuthHero";
import KeyboardAvoidWrapper from "../../components/global/KeyboardAvoidWrapper";
import Loader from "../../components/global/Loader";
import { useAuthContext } from "../../context/AuthContextProvider";

//Svg
import FacebookLogo from "../../../assets/svg/FacebookLogo";
import GoogleLogo from "../../../assets/svg/GoogleLogo";

//Async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type {
  AuthStackParamList,
  SignInParamList,
} from "../../../types/navigator";

//Custom styles
import shadowStyles from "../../styles/shadow";

//GraphQL
import { gql } from "../../__generated__";
import { ApolloError, useMutation } from "@apollo/client";
import { CompositeScreenProps } from "@react-navigation/native";

//Utils
import useToast from "../../hooks/useToast";

type Props = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, "SignUpStack">,
  NativeStackScreenProps<SignInParamList, "SignInPage">
>;

const LOGIN = gql(`
  mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      access_token
    }
  }
`);

const SOCIAL_LOGIN = gql(`
  mutation socialLogin($input: SocialOAuthInput!) {
    socialLogin(socialLoginInput: $input) {
      ... on LoginResponse {
        _id
        access_token
        email
        firstName
        lastName
        mobileNumber
        username
      }
      ... on SocialUser {
        oAuthId
        email
        firstName
        lastName
        picture
        username
      }
    }
  }
`);

WebBrowser.maybeCompleteAuthSession();

const SignIn: React.FC<Props> = ({ navigation }) => {
  const constants = Constants.expoConfig.extra;
  const [googleRequest, _, googlePromptAsync] = Google.useAuthRequest({
    expoClientId: constants.googleExpoClientId,
    androidClientId: constants.googleAndroidClientId,
    iosClientId: constants.googleIosClientId,
  });
  const [facebookRequest, __, facebookPromptAsync] = Facebook.useAuthRequest({
    clientId: constants.facebookAppId,
  });
  const [login, { loading }] = useMutation(LOGIN);
  const [socialLogin, { loading: socialLoading }] = useMutation(SOCIAL_LOGIN);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { setIsAuthenticated } = useAuthContext();
  const colorScheme = useColorScheme();
  const { showToast, hideToast } = useToast();
  const [fontsLoaded] = useFonts({
    "BentonSans Bold": require("../../../assets/fonts/BentonSans/BentonSansBold.otf"),
  });

  if (!fontsLoaded) return null;

  const handleSubmit = async (e: GestureResponderEvent) => {
    const { password, username } = input;
    if (!username || !password) return;
    try {
      const { data } = await login({
        variables: {
          input: {
            username: username.trim(),
            password: password.trim(),
          },
        },
      });

      if (data) {
        await AsyncStorage.setItem("TOKEN", data.login.access_token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        const { message, name } = error;
        console.log("message", message, "name", name);
      }
    }
  };

  const handleSocialLogin = async (provider: "google" | "facebook") => {
    const toastId = showToast({
      message: "Please wait...",
      type: "info",
    });
    try {
      const res =
        provider === "google"
          ? await googlePromptAsync()
          : await facebookPromptAsync();

      if (res.type === "success") {
        const { data } = await socialLogin({
          variables: {
            input: {
              accessToken: res.authentication.accessToken,
              provider,
            },
          },
        });

        if (data.socialLogin.__typename === "LoginResponse") {
          await AsyncStorage.setItem("TOKEN", data.socialLogin.access_token);
          setIsAuthenticated(true);
        } else {
          navigation.navigate("SignUpStack", {
            screen: "SignUpPage",
            params: data.socialLogin,
          });
        }
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        const { message, name } = error;
        console.log("message", message, "name", name);
        hideToast(toastId);
        showToast({
          message: "Something went wrong",
          type: "error",
        });
      }
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setInput((currentInput) => ({
      ...currentInput,
      [name]: value,
    }));
  };

  return (
    <KeyboardAvoidWrapper>
      {(loading || socialLoading) && <Loader />}
      <View className="flex gap-6 bg-white flex-1 py-10 dark:bg-black">
        <AuthHero />

        <View className="flex-1 flex items-center justify-start">
          <Text className="font-['BentonSans Bold'] text-2xl font-black dark:text-white">
            Login To Your Account
          </Text>

          <View className="h-full flex items-center justify-center gap-y-9 w-full px-5 mt-0'">
            <View className="flex items-center justify-center w-full gap-y-3">
              <TextInput
                onChangeText={(value) => handleInputChange("username", value)}
                value={input.username}
                placeholderTextColor={
                  colorScheme === "dark" ? "#fff" : "#a1a1aa"
                }
                className="w-full h-16 py-4 px-3 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-800 dark:text-white"
                placeholder="Username"
              />

              <TextInput
                onChangeText={(value) => handleInputChange("password", value)}
                value={input.password}
                placeholderTextColor={
                  colorScheme === "dark" ? "#fff" : "#a1a1aa"
                }
                className="w-full h-16 py-4 px-3 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-800 dark:text-white"
                placeholder="Password"
              />
            </View>

            <Text className="font-black text-center dark:text-white">
              Or Continue With
            </Text>

            <View className="flex items-center justify-center w-full space-y-5">
              <View className="flex flex-row justify-center items-center space-x-10">
                <TouchableOpacity
                  disabled={!facebookRequest}
                  onPress={() => handleSocialLogin("facebook")}
                  style={shadowStyles.shadow3}
                  className="flex bg-white flex-row justify-center items-center space-x-3 px-8 py-4 rounded-lg dark:bg-gray-800"
                >
                  <FacebookLogo />
                  <Text className="dark:text-white text-lg">Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={!googleRequest}
                  onPress={() => handleSocialLogin("google")}
                  style={shadowStyles.shadow3}
                  className="flex bg-white flex-row justify-center items-center space-x-3 px-8 py-4 rounded-lg dark:bg-gray-800"
                >
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

            <TouchableOpacity onPress={handleSubmit}>
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
