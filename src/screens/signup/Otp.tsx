import React, { useState } from "react";

//React native
import { Text, View } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

//Components
import SignUpLayout from "../../components/layout/SignUpLayout";

//Types
import { SignUpParamList } from "../../../types/navigator";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSignUpContext } from "../../context/SignUpContextProvider";

const CELL_COUNT = 4;

type Props = NativeStackScreenProps<SignUpParamList, "OtpPage">;

const Otp: React.FC<Props> = ({ navigation }) => {
  const [value, setValue] = useState("");
  const { signUpState } = useSignUpContext();
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SignUpLayout
      nextPage="Verify OTP"
      heading="Enter 4-digit Verification code"
      info={`We have sent a 4-digit verification code to ${signUpState?.email}`}
      onPressPrev={() => navigation.goBack()}
      onPressNext={() =>
        navigation.navigate("SuccessPage", {
          buttonTitle: "SignUp Page",
          navigateTo: "SignUpPage",
          successMessage: "OTP verified successfully",
        })
      }
      className="flex-1 flex items-center justify-between py-4"
    >
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={{ marginTop: 20 }}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            className={`w-20 h-20 flex items-center justify-center mx-2 rounded-md border-2 ${
              isFocused
                ? "border-black dark:border-gray-100"
                : "border-[#00000030] dark:border-gray-500"
            }`}
            key={index}
          >
            <Text className="dark:text-white text-3xl">
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SignUpLayout>
  );
};

export default Otp;
