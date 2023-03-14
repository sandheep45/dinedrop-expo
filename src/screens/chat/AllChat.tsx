import React from "react";
import { Text } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ChatPageParamList } from "../../../types/navigator";
import ChatLayout from "../../components/layout/ChatLayout";

type Props = NativeStackScreenProps<ChatPageParamList, "AllChatsPage">;

const AllChat: React.FC<Props> = ({ navigation }) => {
  return (
    <ChatLayout>
      <Text>Chat page</Text>
    </ChatLayout>
  );
};

export default AllChat;
