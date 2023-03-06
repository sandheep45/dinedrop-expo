import * as React from "react";
import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const EmailIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={40} height={40} fill="none">
    <Path
      d="M33.333 6.667H6.667c-1.834 0-3.317 1.5-3.317 3.333l-.017 20c0 1.833 1.5 3.333 3.334 3.333h26.666c1.834 0 3.334-1.5 3.334-3.333V10c0-1.833-1.5-3.333-3.334-3.333Zm-.666 7.083-11.784 7.367a1.686 1.686 0 0 1-1.766 0L7.333 13.75a1.415 1.415 0 0 1 .408-2.623 1.416 1.416 0 0 1 1.092.223L20 18.333l11.167-6.983a1.416 1.416 0 1 1 1.5 2.4Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={3.333}
        y1={5.029}
        x2={41.313}
        y2={12.385}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default EmailIcon;
