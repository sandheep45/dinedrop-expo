import React from "react";
import {
  Pressable,
  Image,
  Text,
  PressableProps,
  GestureResponderEvent,
} from "react-native";
import { type Asset } from "expo-asset";
import shadowStyles from "../../styles/shadow";

interface Props extends PressableProps {
  item: number;
  assets: Asset[];
  navigateTo: (e: GestureResponderEvent) => void;
}

const Card: React.FC<Props> = ({ assets, navigateTo, item }) => {
  return (
    <Pressable
      onPress={navigateTo}
      style={shadowStyles.shadow5}
      className="flex space-y-2 bg-white p-4 rounded-lg m-3 dark:bg-[#252525]"
      key={item}
    >
      <Image
        source={{
          uri: assets[item + 1].localUri,
          height: 150,
          width: 150,
        }}
      />
      <Text className="text-center text-2xl font-bold dark:text-white">
        Vegan Metro
      </Text>
      <Text className="text-center text-lg font-thin text-gray-300">
        12 Mins
      </Text>
    </Pressable>
  );
};

export default Card;
