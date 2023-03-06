import React from "react";
import { Button, Text } from "react-native";
import SafeArea from "../../components/global/SafeArea";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomePageParamList } from "../../../types/navigator";

type Props = NativeStackScreenProps<HomePageParamList, "RatingPage">;

const Rating: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeArea>
      <Button title="Home" onPress={() => navigation.navigate("HomePage")} />
      <Button title="Menu" onPress={() => navigation.navigate("MenuPage")} />
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
        title="Filter"
        onPress={() => navigation.navigate("FilterPage")}
      />
      <Text>Rating page</Text>
    </SafeArea>
  );
};

export default Rating;
