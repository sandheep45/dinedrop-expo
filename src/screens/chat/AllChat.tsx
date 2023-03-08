import React from "react";
import { Button, Text } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ChatPageParamList } from "../../../types/navigator";
import SafeArea from "../../components/global/SafeArea";

type Props = NativeStackScreenProps<ChatPageParamList, "AllChatsPage">;

const AllChat: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeArea className="flex-1 bg-white dark:bg-black">
      <Button title="Call" onPress={() => navigation.navigate("CallPage")} />
      <Button
        title="SinglePage"
        onPress={() => navigation.navigate("SingleChatPage")}
      />
      <Text>All chat</Text>
    </SafeArea>
  );
};

export default AllChat;
