import React from "react";
import { useColorScheme, ImageBackground, View, ViewProps } from "react-native";
import { useAssets } from "expo-asset";
import SafeArea from "../global/SafeArea";
import { LinearGradient } from "expo-linear-gradient";

interface Props extends ViewProps {}

const HomeLayout: React.FC<Props> = ({ children, style }) => {
  const colorScheme = useColorScheme();
  const [assets] = useAssets([require("../../../assets/images/FullScreenPattern.png")]);

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
          className="h-full w-full"
        >
          <SafeArea style={style} className="flex-1">{children}</SafeArea>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default HomeLayout;
