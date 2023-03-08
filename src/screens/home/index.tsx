import React from "react";

//React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePageParamList } from "../../../types/navigator";

//Screens
import Filter from "./Filter";
import Home from "./Home";
import Menu from "./Menu";
import Restraunts from "./Restraunts";
import Notification from "./Notification";
import Rating from "./Rating";
import Voucher from "./Voucher";
import RestrauntDetail from "./RestrauntDetail";
import ProductDetail from "./ProductDetail";

const Stack = createNativeStackNavigator<HomePageParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomePage"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="RestrauntPage"
        component={Restraunts}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MenuPage"
        component={Menu}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="FilterPage"
        component={Filter}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="NotificationPage"
        component={Notification}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="RatingPage"
        component={Rating}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="VoucherPage"
        component={Voucher}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="RestrauntDetail"
        component={RestrauntDetail}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
