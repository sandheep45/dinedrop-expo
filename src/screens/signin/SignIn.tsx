//React
import React, { useEffect, useState } from "react";

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
import type { SignInParamList } from "../../../types/navigator";

//Custom styles
import shadowStyles from "../../styles/shadow";

//GraphQL
import { gql } from "../../__generated__";
import { ApolloError, useMutation } from "@apollo/client";

type Props = NativeStackScreenProps<SignInParamList, "SignInPage">;

const LOGIN = gql(`
    mutation login($input: LoginUserInput!) {
      login(loginUserInput: $input) {
        access_token
      }
    }
  `);

WebBrowser.maybeCompleteAuthSession();

const SignIn: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [googleRequest, googleResponse, googlePromptAsync] =
    Google.useAuthRequest({
      expoClientId:
        "716798608893-lr0csd1s7ndb3jdeq57gro6370kd52fv.apps.googleusercontent.com",
      androidClientId:
        "716798608893-cvf244dc69tmifta7lpuo4saelhniqsm.apps.googleusercontent.com",
      iosClientId:
        "716798608893-84fkh9ag62iup2knc9b3p1vtimju9s8a.apps.googleusercontent.com",
    });
  const [facebookRequest, facebookResponse, facebookPromptAsync] =
    Facebook.useAuthRequest({
      clientId: "667150601837264",
    });
  const [login, { loading }] = useMutation(LOGIN);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { setIsAuthenticated } = useAuthContext();
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    "BentonSans Bold": require("../../../assets/fonts/BentonSans/BentonSansBold.otf"),
  });

  useEffect(() => {
    (async () => {
      if (googleResponse?.type === "success") {
        const token = googleResponse.authentication.accessToken;
        await AsyncStorage.setItem("TOKEN", token);
        setIsAuthenticated(true);
      }

      if (facebookResponse?.type === "success") {
        const token = facebookResponse.authentication.accessToken;
        await AsyncStorage.setItem("TOKEN", token);
        setIsAuthenticated(true);
      }
    })();
  }, [googleResponse, facebookResponse]);

  if (!fontsLoaded) return null;

  const handleSubmit = async (e: GestureResponderEvent) => {
    const { password, username } = input;
    if (!username || !password) return;
    try {
      const { data } = await login({
        variables: {
          input: {
            username,
            password,
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

  const handleInputChange = (name: string, value: string) => {
    setInput((currentInput) => ({
      ...currentInput,
      [name]: value,
    }));
  };

  return (
    <KeyboardAvoidWrapper>
      {(loading || isLoading) && <Loader />}
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
                  onPress={() => facebookPromptAsync()}
                  style={shadowStyles.shadow3}
                  className="flex bg-white flex-row justify-center items-center space-x-3 px-8 py-4 rounded-lg dark:bg-gray-800"
                >
                  <FacebookLogo />
                  <Text className="dark:text-white text-lg">Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={!googleRequest}
                  onPress={() => googlePromptAsync()}
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
