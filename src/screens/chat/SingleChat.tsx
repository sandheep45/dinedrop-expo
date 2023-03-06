import React from "react";
import { Text, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ChatPageParamList } from "../../../types/navigator";
import SafeArea from "../../components/global/SafeArea";

type Props = NativeStackScreenProps<ChatPageParamList, "AllChatsPage">;

const SingleChat: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeArea>
      <Button title="Call" onPress={() => navigation.navigate("CallPage")} />
      <Button
        title="ALl Chat"
        onPress={() => navigation.navigate("AllChatsPage")}
      />
      <Text>All chat</Text>
    </SafeArea>
  );
};

export default SingleChat;
