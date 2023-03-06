import React from "react";
import { Text, Button } from "react-native";
import SafeArea from "../../components/global/SafeArea";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomePageParamList } from "../../../types/navigator";

type Props = NativeStackScreenProps<HomePageParamList, "MenuPage">;

const Menu: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeArea>
      <Button title="Home" onPress={() => navigation.navigate("HomePage")} />
      <Button
        title="Notification"
        onPress={() => navigation.navigate("NotificationPage")}
      />
      <Button
        title="Voucher"
        onPress={() => navigation.navigate("VoucherPage")}
      />
      <Button
        title="Rating"
        onPress={() => navigation.navigate("RatingPage")}
      />
      <Button
        title="Restraunt"
        onPress={() => navigation.navigate("RestrauntPage")}
      />
      <Button
        title="Filter"
        onPress={() => navigation.navigate("FilterPage")}
      />
      <Text>Menu page</Text>
    </SafeArea>
  );
};

export default Menu;
