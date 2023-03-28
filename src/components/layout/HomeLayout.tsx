import React from "react";

//React Native
import {
  useColorScheme,
  ImageBackground,
  View,
  ViewProps,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  GestureResponderEvent,
} from "react-native";

//Expo
import { useAssets } from "expo-asset";
import { LinearGradient } from "expo-linear-gradient";

//Custom components
import SafeArea from "../global/SafeArea";
import BackButton from "../global/BackButton";

//Custom style
import shadowStyles from "../../styles/shadow";

//SVGs and Icons
import { AntDesign } from "@expo/vector-icons";
import NotificationIcon from "../../../assets/svg/NotificationIcon";
import FilterIcon from "../../../assets/svg/FilterIcon";
import { useAuthContext } from "../../context/AuthContextProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props extends ViewProps {
  backButtonAction?: (e?: GestureResponderEvent) => void;
  showBackButton?: boolean;
}

const HomeLayout: React.FC<Props> = ({
  children,
  style,
  backButtonAction,
  showBackButton,
}) => {
  const colorScheme = useColorScheme();
  const { setIsAuthenticated } = useAuthContext();
  const [assets] = useAssets([
    require("../../../assets/images/FullScreenPattern.png"),
  ]);

  const logoutHandler = async () => {
    await AsyncStorage.removeItem("TOKEN");
    setIsAuthenticated(false);
  };

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
              {/* Heading and Notification icon */}
              <View className="flex flex-row justify-between items-center px-2">
                {showBackButton && <BackButton onPress={backButtonAction} />}
                <Text
                  className={`text-3xl font-black w-7/12 dark:text-white ${
                    showBackButton && "text-center"
                  }`}
                >
                  Find Your Favorite Food
                </Text>

                <TouchableOpacity
                  onPress={logoutHandler}
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
                    style={{
                      position: "absolute",
                      top: 18,
                      left: 10,
                      zIndex: 1,
                    }}
                    name="search1"
                    size={24}
                    color="#DA6317"
                  />
                  <TextInput
                    placeholderTextColor={"#DA6317"}
                    className=" py-4 px-12 rounded-lg bg-gray-200 dark:bg-[#252525]"
                    placeholder="What do you want to order?"
                  />
                </View>

                <View className="flex items-center justify-center p-4 rounded-lg bg-gray-200 dark:bg-[#252525]">
                  <FilterIcon />
                </View>
              </View>

              {children}
            </ScrollView>
          </SafeArea>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default HomeLayout;
