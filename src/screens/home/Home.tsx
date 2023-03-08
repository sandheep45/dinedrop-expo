import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { useAssets } from "expo-asset";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomePageParamList } from "../../../types/navigator";
import HomeLayout from "../../components/layout/HomeLayout";
import NotificationIcon from "../../../assets/svg/NotificationIcon";
import { AntDesign } from "@expo/vector-icons";
import FilterIcon from "../../../assets/svg/FilterIcon";
import shadowStyles from "../../styles/shadow";

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
      <ScrollView className="flex-1 flex space-y-4 w-full px-6">
        {/* Heading and Notification icon */}
        <View className="flex flex-row justify-between items-center px-2">
          <Text className="text-3xl font-black w-7/12">
            Find Your Favorite Food
          </Text>

          <TouchableOpacity
            style={[shadowStyles.shadow7]}
            className="flex items-center justify-center p-4 rounded-full bg-white"
          >
            <NotificationIcon />
          </TouchableOpacity>
        </View>

        {/* search bar and filter icon */}
        <View className="flex flex-row w-full space-x-2">
          <View className="relative flex-1">
            <AntDesign
              style={{ position: "absolute", top: 18, left: 10, zIndex: 1 }}
              name="search1"
              size={24}
              color="#DA6317"
            />
            <TextInput
              placeholderTextColor={"#DA6317"}
              className=" py-4 px-12 rounded-lg bg-gray-200"
              placeholder="What do you want to order?"
            />
          </View>

          <View className="flex items-center justify-center p-4 rounded-lg bg-gray-200">
            <FilterIcon />
          </View>
        </View>

        {/* advertising banner */}
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
              <Text className="text-2xl text-white font-black">
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
            <Text className="text-2xl font-bold">Nearest Restraunts</Text>
            <TouchableOpacity
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
                className="flex space-y-2 bg-white p-4 rounded-lg m-3"
                key={item}
              >
                <Image
                  source={{
                    uri: assets[item + 1].localUri,
                    height: 180,
                    width: 200,
                  }}
                />
                <Text className="text-center text-2xl font-bold">
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
            <Text className="text-2xl font-bold">Popular Menu</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MenuPage")}
            >
              <Text className="text-[#FF7C32]">View More</Text>
            </TouchableOpacity>
          </View>

          {/* options */}
          <ScrollView className="flex flex-row" horizontal>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <View
                style={shadowStyles.shadow5}
                className="flex space-y-2 bg-white p-4 rounded-lg m-3"
                key={item}
              >
                <Image
                  source={{
                    uri: assets[item + 1].localUri,
                    height: 180,
                    width: 200,
                  }}
                />
                <Text className="text-center text-2xl font-bold">
                  Vegan Metro
                </Text>
                <Text className="text-center text-lg font-thin text-gray-300">
                  12 Mins
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </HomeLayout>
  );
};

export default Home;
