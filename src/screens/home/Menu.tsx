import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomePageParamList } from "../../../types/navigator";
import HomeLayout from "../../components/layout/HomeLayout";
import shadowStyles from "../../styles/shadow";
import NotificationIcon from "../../../assets/svg/NotificationIcon";
import { AntDesign } from "@expo/vector-icons";
import FilterIcon from "../../../assets/svg/FilterIcon";
import BackArrowIcons from "../../../assets/svg/BackArrowIcons";
import { FontAwesome } from "@expo/vector-icons";
import { useAssets } from "expo-asset";

type Props = NativeStackScreenProps<HomePageParamList, "MenuPage">;

const Menu: React.FC<Props> = ({ navigation }) => {
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
              className="flex-1 flex flex-row space-x-4 bg-white items-center justify-between p-4 rounded-md"
            >
              <Image
                source={{
                  uri: assets[item].localUri,
                  height: 100,
                  width: 100,
                }}
              />
              <View className="flex-1">
                <Text className="text-lg">Herbal Pancake</Text>
                <Text className="text-lg text-gray-300 font-thin">
                  Warung Herbal
                </Text>
              </View>

              <View className="flex flex-row items-center">
                <FontAwesome name="dollar" size={24} color="black" />
                <Text className="text-2xl font-extrabold">7</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </HomeLayout>
  );
};

export default Menu;
