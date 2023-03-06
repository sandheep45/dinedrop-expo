import React from "react";
import { Text, Button } from "react-native";
import SafeArea from "../../components/global/SafeArea";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomePageParamList } from "../../../types/navigator";

type Props = NativeStackScreenProps<HomePageParamList, "HomePage">;

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeArea>
      <Button
        title="Restraunt"
        onPress={() => navigation.navigate("RestrauntPage")}
      />
      <Button
        title="Voucher"
        onPress={() => navigation.navigate("VoucherPage")}
      />
      <Button title="Menu" onPress={() => navigation.navigate("MenuPage")} />
      <Button
        title="Rating"
        onPress={() => navigation.navigate("RatingPage")}
      />
      <Button
        title="Notification"
        onPress={() => navigation.navigate("NotificationPage")}
      />
      <Button
        title="Filter"
        onPress={() => navigation.navigate("FilterPage")}
      />
      <Text>Home page</Text>
    </SafeArea>
  );
};

export default Home;
