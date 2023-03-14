import React from "react";
import { Button, Text } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ChatPageParamList } from "../../../types/navigator";
import SafeArea from "../../components/global/SafeArea";

type Props = NativeStackScreenProps<ChatPageParamList, "AllChatsPage">;

const AllChat: React.FC<Props> = ({ navigation }) => {
  return <SafeArea className="flex-1 bg-white dark:bg-black">
    
  </SafeArea>;
};

export default AllChat;
