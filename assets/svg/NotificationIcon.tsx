import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const NotificationIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={20} height={22} fill="none">
    <Path
      d="M16 7A6 6 0 1 0 4 7c0 7-3 9-3 9h18s-3-2-3-9Z"
      stroke="url(#a)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.73 20a1.999 1.999 0 0 1-3.46 0"
      stroke="url(#b)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={1}
        y1={0.079}
        x2={21.567}
        y2={3.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={8.27}
        y1={19.939}
        x2={11.442}
        y2={21.645}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default NotificationIcon;
