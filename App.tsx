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
  getFocusedRouteNameFromRoute,
  type RouteProp,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Expo
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

//Apollo graphql
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

//GraphQL

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
import { LOCAL_SERVER_URL } from "./constant";

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

// Initialize Apollo Client
const client = new ApolloClient({
  uri: LOCAL_SERVER_URL,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const colorTheme = useColorScheme();

  useEffect(() => {
    const getToken = async () => {
      const isAppFirstLaunchedToken = await AsyncStorage.getItem(
        "isAppFirstLaunched"
      );
      const isUserAuthenticatedToken = await AsyncStorage.getItem("TOKEN");
      if (isAppFirstLaunchedToken === null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "true");
      } else if (isAppFirstLaunchedToken === "true") {
        AsyncStorage.setItem("isAppFirstLaunched", "false");
        setIsAppFirstLaunched(false);
      }

      if (isUserAuthenticatedToken) {
        setIsAuthenticated(true);
      }
    };
    getToken();
  }, []);

  if (isAppFirstLaunched) {
    return <Onboarding />;
  }

  return (
    <ApolloProvider client={client}>
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
            <HomeTab.Navigator>
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
    </ApolloProvider>
  );
}
