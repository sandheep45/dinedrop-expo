import React from "react";

//React Native
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

// Expo
import { useAssets } from "expo-asset";

// Custom Components
import HomeLayout from "../../components/layout/HomeLayout";

// Custom style
import shadowStyles from "../../styles/shadow";

//Types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomePageParamList } from "../../../types/navigator";
import Card from "../../components/Home/Card";

type Props = NativeStackScreenProps<HomePageParamList, "HomePage">;

const Home: React.FC<Props> = ({ navigation }) => {
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
    <HomeLayout className="flex-1 w-full">
      <View className="w-full">
        <ImageBackground
          className="flex flex-row space-x-3"
          imageStyle={{ borderRadius: 10 }}
          style={{ height: assets[0].height + 30 }}
          source={{ uri: assets[0].localUri }}
        >
          <View className="flex-1">
            <Image
              className="flex-1"
              style={{ height: assets[1].height, resizeMode: "contain" }}
              source={{ uri: assets[1].localUri }}
            />
          </View>
          <View className="flex-1 flex items-start justify-center gap-y-5">
            <Text className="text-2xl text-white font-black dark:text-black">
              Special Deal For October
            </Text>
            <TouchableOpacity className="py-4 px-8 rounded-lg bg-white w-fit">
              <Text className="text-xl">Buy Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Nearest Restraunts */}
      <View className="flex space-y-2">
        {/* heading */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-2xl font-bold dark:text-white">
            Nearest Restraunts
          </Text>
          <TouchableOpacity
            className="py-3"
            onPress={() => navigation.navigate("RestrauntPage")}
          >
            <Text className="text-[#FF7C32]">View More</Text>
          </TouchableOpacity>
        </View>

        {/* options */}
        <ScrollView className="flex flex-row" horizontal>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              item={item}
              assets={assets}
              navigateTo={() => navigation.navigate("RestrauntDetail")}
              key={item}
            />
          ))}
        </ScrollView>
      </View>

      {/* Popular Menu */}
      <View className="flex space-y-2">
        {/* heading */}
        <View className="flex flex-row items-center justify-between">
          <Text className="text-2xl font-bold dark:text-white">
            Popular Menu
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("MenuPage")}>
            <Text className="text-[#FF7C32] py-3">View More</Text>
          </TouchableOpacity>
        </View>

        {/* options */}
        <ScrollView className="flex flex-row" horizontal>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              item={item}
              assets={assets}
              navigateTo={() => navigation.navigate("ProductDetail")}
              key={item}
            />
          ))}
        </ScrollView>
      </View>
    </HomeLayout>
  );
};

export default Home;
