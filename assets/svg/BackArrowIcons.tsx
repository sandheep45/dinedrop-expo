import * as React from "react";
import Svg, { Path, type SvgProps } from "react-native-svg";

const BackArrowIcons: React.FC<SvgProps> = (props) => (
  <Svg width={10} height={17} fill="none" {...props}>
    <Path
      d="M3.636 8.182 10 14.546l-1.818 1.818L0 8.182 8.182 0 10 1.818 3.636 8.182Z"
      fill="#DA6317"
    />
  </Svg>
);

export default BackArrowIcons;
