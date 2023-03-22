import React from "react";
import { Text, View } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type {
  ChatPageParamList,
  MainPageParamList,
} from "../../../types/navigator";
import ChatLayout from "../../components/layout/ChatLayout";
import BackButton from "../../components/global/BackButton";
import { CompositeScreenProps } from "@react-navigation/native";

type Props = CompositeScreenProps<
  NativeStackScreenProps<MainPageParamList, "HomeStack">,
  NativeStackScreenProps<ChatPageParamList, "AllChatsPage">
>;

const AllChat: React.FC<Props> = ({ navigation }) => {
  return (
    <ChatLayout className="px-6">
      <View className="flex-1">
        {/* back button and heading */}
        <View className="flex-1 flex-row">
          <BackButton onPress={() => navigation.goBack()} />
          <View className="flex-1 items-center justify-center">
            <Text className="text-3xl font-bold">All Chats</Text>
          </View>
        </View>
      </View>
    </ChatLayout>
  );
};

export default AllChat;
