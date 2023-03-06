import React from "react";

//React native
import { Text } from "react-native";

//Components
import SignUpLayout from "../../components/layout/SignUpLayout";

//Types
import type { SignInParamList } from "../../../types/navigator";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<SignInParamList, "ResetPasswordPage">;

const ResetPassword: React.FC<Props> = ({ navigation }) => {
  return (
    <SignUpLayout
      nextPage="Success"
      heading="Reset your password here"
      info="Select which contact details should we use to reset your password"
      onPressPrev={() => navigation.goBack()}
      onPressNext={() =>
        navigation.navigate("SuccessPage", {
          buttonTitle: "SignIn Page",
          navigateTo: "SignInPage",
          successMessage: "Password reset successfull",
        })
      }
      className="flex-1 flex items-start justify-between py-4"
    >
      <Text>Hello Owlrd</Text>
    </SignUpLayout>
  );
};

export default ResetPassword;
