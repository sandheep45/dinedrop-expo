import React from "react";

//React navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import ResetPassword from "./ResetPassword";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import Success from "../global/Success";

//Types
import type { SignInParamList } from "../../../types/navigator";

const Stack = createNativeStackNavigator<SignInParamList>();

const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignInPage"
        component={SignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ResetPasswordPage"
        component={ResetPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ForgotPasswordPage"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SuccessPage"
        component={Success}
      />
    </Stack.Navigator>
  );
};

export default Index;
