import React from "react";
import {
  ActivityIndicator,
  View,
  useColorScheme,
} from "react-native";

const Loader = () => {
  const colorScheme = useColorScheme();
  return (
    <View
      className="flex-1 h-screen w-full flex items-center justify-center absolute top-0 opacity-[0.3] z-10 bg-gray-400 dark:opacity-[0.5]"
    >
      <ActivityIndicator
        className="scale-[3]"
        size="large"
        color={colorScheme === "dark" ? "white" : "black"}
      />
    </View>
  );
};

export default Loader;
