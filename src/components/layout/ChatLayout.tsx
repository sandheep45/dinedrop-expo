import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  View,
  ImageBackground,
  type ViewProps,
  useColorScheme,
} from "react-native";
import { useAssets } from "expo-asset";
import SafeArea from "../global/SafeArea";

interface Props extends ViewProps {}

const ChatLayout: React.FC<Props> = ({ children, style }) => {
  const colorScheme = useColorScheme();
  const [assets] = useAssets([
    require("../../../assets/images/FullScreenPattern.png"),
  ]);

  if (!assets) return null;

  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1"
        style={{ height: assets[0].height }}
        source={{ uri: assets[0].localUri }}
      >
        <LinearGradient
          colors={
            colorScheme === "light"
              ? ["rgba(225, 225, 225, 0)", "#FFFFFF"]
              : ["rgba(0, 0, 0, 0)", "#000000"]
          }
          className="h-full w-full flex items-center justify-center"
        >
          <SafeArea style={style} className="flex-1">
            <ScrollView className="flex-1 flex space-y-4 w-full px-6">
              {children}
            </ScrollView>
          </SafeArea>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default ChatLayout;
