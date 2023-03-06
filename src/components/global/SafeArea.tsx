import React from "react";
import { Platform, StatusBar, View, type ViewProps } from "react-native";

interface Props extends ViewProps {}

const SafeArea: React.FC<Props> = ({ children }) => {
  return (
    <View
      style={{
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 20 : 0,
      }}
      className="flex-1 bg-white dark:bg-black"
    >
      {children}
    </View>
  );
};

export default SafeArea;
