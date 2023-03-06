import React from "react";

//React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import SignUp from "./SignUp";
import Bio from "./Bio";
import Otp from "./Otp";
import SetLocation from "./SetLocation";
import Success from "../global/Success";
import UploadImage from "./UploadImage";

//Types
import type { SignUpParamList } from "../../../types/navigator";

const Stack = createNativeStackNavigator<SignUpParamList>();

const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUpPage"
        component={SignUp}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BioPage"
        component={Bio}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="OtpPage"
        component={Otp}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SetLocationPage"
        component={SetLocation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SuccessPage"
        component={Success}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="UploadImagePage"
        component={UploadImage}
      />
    </Stack.Navigator>
  );
};

export default Index;
