import React from "react";

//Text
import { Text } from "react-native";

//Components
import SignUpLayout from "../../components/layout/SignUpLayout";

//types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { SignInParamList  } from "../../../types/navigator";

type Props = NativeStackScreenProps<SignInParamList, "ForgotPasswordPage">;

const ForgotPassword: React.FC<Props> = ({ navigation }) => {
  return (
    <SignUpLayout
      nextPage="Reset Password"
      heading="Forgot password?"
      info="Select which contact details should we use to reset your password"
      onPressPrev={() => navigation.goBack()}
      onPressNext={() => navigation.navigate("ResetPasswordPage")}
      className="flex-1 flex items-start justify-between py-4"
    >
      <Text>Hello Owlrd</Text>
    </SignUpLayout>
  );
};

export default ForgotPassword;
