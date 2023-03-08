import React from "react";
import { Text, Button } from "react-native";
import SafeArea from "../../components/global/SafeArea";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { HomePageParamList } from "../../../types/navigator";

type Props = NativeStackScreenProps<HomePageParamList, "ProductDetail">;

const ProductDetail: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeArea>
      <Button title="Home" onPress={() => navigation.navigate("HomePage")} />
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
        title="Restarunt"
        onPress={() => navigation.navigate("RestrauntPage")}
      />
      <Text>ProductDetail</Text>
    </SafeArea>
  );
};

export default ProductDetail;
