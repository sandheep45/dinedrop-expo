import React from "react";

// React Native
import { Text, View, Image, useColorScheme } from "react-native";

// Expo
import { useAssets } from "expo-asset";

// Custom Components
import HomeLayout from "../../components/layout/HomeLayout";

//Custom Styles
import shadowStyles from "../../styles/shadow";

//SVGs and Icons
import { FontAwesome } from "@expo/vector-icons";

// Types
import type { HomePageParamList } from "../../../types/navigator";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<HomePageParamList, "MenuPage">;

const Menu: React.FC<Props> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const [assets] = useAssets([
    require("../../../assets/images/Menu1Photo.png"),
    require("../../../assets/images/Menu2Photo.png"),
    require("../../../assets/images/Menu3Photo.png"),
  ]);

  if (!assets) return null;

  return (
    <HomeLayout
      showBackButton
      backButtonAction={() => navigation.goBack()}
      className="w-full"
    >
      <View className="flex-1 gap-y-0 space-y-3 py-3">
        <Text className="text-2xl font-bold dark:text-white">Popular Menu</Text>

        <View className="flex-1 flex gap-y-2 ">
          {[0, 1, 2].map((item) => (
            <View
              style={shadowStyles.shadow3}
              key={item}
              className="flex-1 flex flex-row space-x-4 bg-white items-center justify-between p-4 rounded-md dark:bg-[#252525]"
            >
              <Image
                source={{
                  uri: assets[item].localUri,
                  height: 100,
                  width: 100,
                }}
              />
              <View className="flex-1">
                <Text className="text-lg dark:text-white">Herbal Pancake</Text>
                <Text className="text-lg text-gray-300 font-thin">
                  Warung Herbal
                </Text>
              </View>

              <View className="flex flex-row items-center">
                <FontAwesome
                  name="dollar"
                  size={24}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
                <Text className="text-2xl font-extrabold dark:text-white">
                  7
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </HomeLayout>
  );
};

export default Menu;
