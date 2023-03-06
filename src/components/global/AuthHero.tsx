//React
import React from "react";

//React native
import { Image, ImageBackground, useColorScheme } from "react-native";

//expo
import { LinearGradient } from "expo-linear-gradient";
import { useAssets } from "expo-asset";

const AuthHero = () => {
  const colorScheme = useColorScheme();
  const [assets] = useAssets([
    require("../../../assets/images/HeroLogo.png"),
    require("../../../assets/images/Pattern.png"),
    require("../../../assets/images/HeroLogoDark.png"),
  ]);

  return (
    Array.isArray(assets) && (
      <ImageBackground
        style={{ height: assets?.[1].height + 70 }}
        source={{
          uri: assets?.[1].localUri,
        }}
        className="w-full"
      >
        <LinearGradient
          colors={
            colorScheme === "light"
              ? ["rgba(225, 225, 225, 0)", "#FFFFFF"]
              : ["rgba(0, 0, 0, 0)", "#000000"]
          }
          className="h-full w-full flex items-center justify-center"
        >
          <Image
            style={{
              width: assets?.[0].width,
              height: assets?.[0].height,
              transform: [{ scale: 1.3 }],
            }}
            source={{
              uri:
                colorScheme === "light"
                  ? assets?.[0].localUri
                  : assets?.[2].localUri,
            }}
          />
        </LinearGradient>
      </ImageBackground>
    )
  );
};

export default AuthHero;
