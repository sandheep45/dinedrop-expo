import * as React from "react";
import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const EnabledPasswordIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={22} height={15} fill="none">
    <Path
      d="M11 0C6 0 1.73 3.11 0 7.5 1.73 11.89 6 15 11 15s9.27-3.11 11-7.5C20.27 3.11 16 0 11 0Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={-0.921}
        x2={24.73}
        y2={4.698}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default EnabledPasswordIcon;
