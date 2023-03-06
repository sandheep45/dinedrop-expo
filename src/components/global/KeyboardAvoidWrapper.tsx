//React
import React from "react";

//React native
import { KeyboardAvoidingView, ScrollView, type ScrollViewProps } from "react-native";

interface KeyboardAvoidWrapperProp extends ScrollViewProps {
  children: React.ReactNode;
  className?: string;
}

const KeyboardAvoidWrapper = ({
  children,
  className,
}: KeyboardAvoidWrapperProp) => {
  return (
    <KeyboardAvoidingView className={`flex-1 ${className}`}>
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
