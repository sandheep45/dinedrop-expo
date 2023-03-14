import React from "react";

//React Native
import {
  GestureResponderEvent,
  TouchableOpacity,
  View,
  Text,
  type ViewProps,
} from "react-native";

//Expo
import { LinearGradient } from "expo-linear-gradient";

//Components
import KeyboardAvoidWrapper from "../global/KeyboardAvoidWrapper";
import SafeArea from "../global/SafeArea";

//Svgs
import BackArrowIcons from "../../../assets/svg/BackArrowIcons";
import BackButton from "../global/BackButton";

interface Props extends ViewProps {
  onPressPrev?: (e?: GestureResponderEvent) => void;
  onPressNext?: (e?: GestureResponderEvent) => void;
  children: React.ReactNode;
  heading: string;
  info: string;
  nextPage:
    | "Add Bio"
    | "Add Profile Pic"
    | "Set Location"
    | "Verify OTP"
    | "Forgot password"
    | "Reset Password"
    | "Success";
}

const SignUpLayout: React.FC<Props> = ({
  children,
  onPressPrev,
  heading,
  info,
  onPressNext,
  nextPage,
  style,
}) => {
  return (
    <KeyboardAvoidWrapper>
      <SafeArea className="flex-1 bg-white dark:bg-black">
        <View className="flex-1 flex gap-y-5 px-4">
          <BackButton onPress={onPressPrev} />
          <View className="flex-1 flex gap-3">
            <Text className="text-2xl font-black dark:text-white">
              {heading}
            </Text>

            <Text className="dark:text-white">{info}</Text>
            <View style={style}>
              {children}
              <View className="mx-auto">
                <TouchableOpacity onPress={onPressNext}>
                  <LinearGradient
                    colors={["#53E88B", "#15BE77"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    className="px-10 py-3 rounded-lg"
                  >
                    <Text className="text-white font-black text-lg">
                      Next step {`>>`} {nextPage}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeArea>
    </KeyboardAvoidWrapper>
  );
};

export default SignUpLayout;
