import * as React from "react";
import Svg, { type SvgProps, Path } from "react-native-svg";

const DisabledPasswordIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={22} height={15} fill="none">
    <Path
      opacity={0.21}
      d="M11 0C6 0 1.73 3.11 0 7.5 1.73 11.89 6 15 11 15s9.27-3.11 11-7.5C20.27 3.11 16 0 11 0Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"
      fill="#252525"
    />
  </Svg>
);

export default DisabledPasswordIcon;
