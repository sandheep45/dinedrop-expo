import React from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomePageParamList } from "../../../types/navigator";
import HomeLayout from "../../components/layout/HomeLayout";
import NotificationIcon from "../../../assets/svg/NotificationIcon";
import FilterIcon from "../../../assets/svg/FilterIcon";
import { AntDesign } from "@expo/vector-icons";
import shadowStyles from "../../styles/shadow";
import BackArrowIcons from "../../../assets/svg/BackArrowIcons";
import { useAssets } from "expo-asset";

type Props = NativeStackScreenProps<HomePageParamList, "RestrauntPage">;

const Restraunts: React.FC<Props> = ({ navigation }) => {
  const [assets] = useAssets([
    require("../../../assets/images/AdvertisingBackground.png"),
    require("../../../assets/images/IceCreamAdvertisement.png"),
    require("../../../assets/images/Resturant1Image.png"),
    require("../../../assets/images/Restaurant2Image.png"),
    require("../../../assets/images/Restaurant3Image.png"),
    require("../../../assets/images/Restaurant4Image.png"),
    require("../../../assets/images/Restaurant5Image.png"),
    require("../../../assets/images/Restaurant6Image.png"),
  ]);

  if (!assets) return null;

  return (
    <HomeLayout showBackButton backButtonAction={() => navigation.goBack()}>
      <View className="flex-1 gap-y-0 pt-3">
        <Text className="text-2xl font-bold dark:text-white">
          Popular Restraunts
        </Text>
        <View className="flex justify-center flex-1 flex-row flex-wrap items-start gap-y-5 pb-5 gap-x-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <View
              style={shadowStyles.shadow5}
              className="flex space-y-2 bg-white p-4 rounded-lg w-[47%] dark:bg-[#252525]"
              key={item}
            >
              <Image
                source={{
                  uri: assets[item + 1].localUri,
                  height: 150,
                  width: 150,
                }}
              />
              <Text className="text-center text-2xl font-bold dark:text-white">
                Vegan Metro
              </Text>
              <Text className="text-center text-lg font-thin text-gray-300">
                12 Mins
              </Text>
            </View>
          ))}
        </View>
      </View>
    </HomeLayout>
  );
};

export default Restraunts;
