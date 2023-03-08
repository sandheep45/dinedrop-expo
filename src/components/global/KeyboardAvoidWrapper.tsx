//React
import React from "react";

//React native
import {
  KeyboardAvoidingView,
  ScrollView,
  type ScrollViewProps,
} from "react-native";

interface KeyboardAvoidWrapperProp extends ScrollViewProps {
  children: React.ReactNode;
}

const KeyboardAvoidWrapper = ({ children }: KeyboardAvoidWrapperProp) => {
  return (
    <KeyboardAvoidingView className={`flex-1`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidWrapper;
