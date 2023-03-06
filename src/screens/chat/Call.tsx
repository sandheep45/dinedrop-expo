import React from "react";
import { Text, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ChatPageParamList } from "../../../types/navigator";
import SafeArea from "../../components/global/SafeArea";

type Props = NativeStackScreenProps<ChatPageParamList, "AllChatsPage">;

const Call: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeArea>
      <Button
        title="Single chat"
        onPress={() => navigation.navigate("SingleChatPage")}
      />
      <Button
        title="ALl Chat"
        onPress={() => navigation.navigate("AllChatsPage")}
      />
      <Text>Call page</Text>
    </SafeArea>
  );
};

export default Call;
