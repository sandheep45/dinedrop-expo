import React from "react";
import {
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
import BackArrowIcons from "../../../assets/svg/BackArrowIcons";

interface Props extends TouchableOpacityProps {}

const BackButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-md bg-gray-200 w-10 h-10 flex items-center justify-center"
    >
      <BackArrowIcons />
    </TouchableOpacity>
  );
};

export default BackButton;
