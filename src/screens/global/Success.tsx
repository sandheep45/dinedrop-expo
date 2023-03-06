import React, { useEffect, useRef } from "react";

//React native
import { Text, View, TouchableOpacity, Dimensions } from "react-native";

//React navigation
import { CompositeScreenProps } from "@react-navigation/native";

//Components
import SafeArea from "../../components/global/SafeArea";

//Expo
import { LinearGradient } from "expo-linear-gradient";

//Util packages
import ConfettiCannon from "react-native-confetti";

//Svgs
import SuccessText from "../../../assets/svg/Success";
import SuccessIcon from "../../../assets/svg/SuccessIcon";

//Types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { SignInParamList, SignUpParamList } from "../../../types/navigator";

type Props = CompositeScreenProps<
  NativeStackScreenProps<SignInParamList, "SuccessPage">,
  NativeStackScreenProps<SignUpParamList, "SuccessPage">
>;

const Success: React.FC<Props> = ({ navigation, route }) => {
  const confettiRef = useRef<ConfettiCannon>(null);
  const { buttonTitle, successMessage, navigateTo } = route.params;
  const { height, width } = Dimensions.get("screen");

  useEffect(() => {
    if (confettiRef.current) {
      confettiRef.current.startConfetti();
    }
  }, []);

  return (
    <SafeArea>
      <ConfettiCannon size={1.5} duration={3000} timeout={1} ref={confettiRef} />
      <View className="flex-1 py-7 flex items-center">
        <View className="flex-1 flex items-center justify-center gap-y-7">
          <View className="flex items-center justify-center gap-y-5">
            <SuccessIcon />
            <SuccessText />
          </View>
          <Text className="text-2xl font-black">{successMessage}</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
          <LinearGradient
            colors={["#53E88B", "#15BE77"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            className="px-10 py-3 rounded-lg"
          >
            <Text className="text-white font-black text-lg">{buttonTitle}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default Success;
