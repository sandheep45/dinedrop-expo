import React, { useState, useEffect } from "react";

//AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

//React native
import { useColorScheme } from "react-native";

//React Navigation
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  type RouteProp,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

//Expo
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

//Screens
import Onboarding from "./src/screens/Onboarding";
import SignInStack from "./src/screens/signin";
import SignUpStack from "./src/screens/signup";
import HomeStack from "./src/screens/home";
import ProfileStack from "./src/screens/profile";
import CartStack from "./src/screens/cart";
import ChatStack from "./src/screens/chat";

//Types
import { MainPageParamList, RootStackParamList } from "./types/navigator";

//Icons
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import HomeIcon from "./assets/svg/HomeIcon";
import ProfileIcon from "./assets/svg/ProfileIcon";
import CartIcon from "./assets/svg/CartIcon";
import ChatIcon from "./assets/svg/ChatIcon";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AuthTab = createBottomTabNavigator<RootStackParamList>();
const HomeTab = createBottomTabNavigator<MainPageParamList>();

const getRouteName = (
  route: RouteProp<MainPageParamList, "ChatStack">
): "none" | "flex" => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === "AllChatsPage" || !routeName) {
    return "flex";
  }
  return "none";
};

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(false);
  const isAuthenticated = !false;
  const colorTheme = useColorScheme();

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("isAppFirstLaunched");
      if (token === null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "true");
      } else if (token === "true") {
        AsyncStorage.setItem("isAppFirstLaunched", "false");
        setIsAppFirstLaunched(false);
      }
    };
    getToken();
  }, []);

  if (isAppFirstLaunched) {
    return <Onboarding />;
  }

  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="auto" />
      <NavigationContainer
        theme={colorTheme === "dark" ? DarkTheme : DefaultTheme}
      >
        {!isAuthenticated ? (
          <AuthTab.Navigator>
            <AuthTab.Screen
              name="SignInStack"
              options={{
                headerShown: false,
                tabBarLabel: "SignIn",
                tabBarIcon: () => (
                  <FontAwesome
                    name="sign-in"
                    size={24}
                    color={colorTheme === "dark" ? "#ffffff" : "#000000"}
                  />
                ),
              }}
              component={SignInStack}
            />
            <AuthTab.Screen
              name="SignUpStack"
              options={{
                headerShown: false,
                tabBarLabel: "SignUp",
                tabBarIcon: (props) => (
                  <AntDesign
                    name="addusergroup"
                    size={24}
                    color={colorTheme === "dark" ? "#ffffff" : "#000000"}
                  />
                ),
              }}
              component={SignUpStack}
            />
          </AuthTab.Navigator>
        ) : (
          <HomeTab.Navigator initialRouteName="ChatStack">
            <HomeTab.Screen
              name="HomeStack"
              options={{
                headerShown: false,
                tabBarLabel: "Home",
                tabBarIcon: () => <HomeIcon />,
              }}
              component={HomeStack}
            />
            <HomeTab.Screen
              name="ProfileStack"
              options={{
                headerShown: false,
                tabBarLabel: "Profile",
                tabBarIcon: (props) => <ProfileIcon />,
              }}
              component={ProfileStack}
            />
            <HomeTab.Screen
              name="CartStack"
              options={{
                headerShown: false,
                tabBarLabel: "Cart",
                tabBarIcon: (props) => <CartIcon />,
              }}
              component={CartStack}
            />
            <HomeTab.Screen
              name="ChatStack"
              options={({ route }) => ({
                headerShown: false,
                tabBarLabel: "Chat",
                tabBarIcon: (props) => <ChatIcon />,
                tabBarStyle: { display: getRouteName(route) },
              })}
              component={ChatStack}
            />
          </HomeTab.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
