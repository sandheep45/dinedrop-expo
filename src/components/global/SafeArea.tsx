import React from "react";
import { Platform, StatusBar, View, type ViewProps } from "react-native";

interface Props extends ViewProps {}

const SafeArea: React.FC<Props> = ({ children, style }) => {
  return (
    <View
      style={[
        style,
        {
          paddingTop:
            Platform.OS === "android" ? StatusBar.currentHeight + 35 : 0,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default SafeArea;
