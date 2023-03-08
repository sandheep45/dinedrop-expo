import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatPageParamList } from "../../../types/navigator";
import AllChat from "./AllChat";
import SingleChat from "./SingleChat";
import Call from "./Call";
const Stack = createNativeStackNavigator<ChatPageParamList>();

const ChatStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        options={{ headerShown: false }}
        name="AllChatsPage"
        component={AllChat}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SingleChatPage"
        component={SingleChat}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CallPage"
        component={Call}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
