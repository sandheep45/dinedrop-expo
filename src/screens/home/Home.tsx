import React from "react";

//React Native
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

// Expo
import { useAssets } from "expo-asset";

//Apollo graphql
import { useQuery } from "@apollo/client";

// Custom Components
import HomeLayout from "../../components/layout/HomeLayout";

// Custom style
import shadowStyles from "../../styles/shadow";

//Types
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomePageParamList } from "../../../types/navigator";
import { gql } from "../../__generated__";

type Props = NativeStackScreenProps<HomePageParamList, "HomePage">;

const GET_USER = gql(`
  query GetUser {
    Users {
      email
    }
  }
`);

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
  const { data, loading } = useQuery(GET_USER, {
    onCompleted: console.log,
  });

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
            <View
              style={shadowStyles.shadow5}
              className="flex space-y-2 bg-white p-4 rounded-lg m-3 dark:bg-[#252525]"
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
            <View
              style={shadowStyles.shadow5}
              className="flex space-y-2 bg-white p-4 rounded-lg m-3 dark:bg-[#252525]"
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
        </ScrollView>
      </View>
    </HomeLayout>
  );
};

export default Home;
