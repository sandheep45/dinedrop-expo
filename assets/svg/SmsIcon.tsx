import * as React from "react";
import Svg, {
  type SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const SmsIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={40} height={40} fill="none">
    <Path
      d="M31.783 8.217A16.667 16.667 0 0 0 4.65 26.55c.16.331.212.704.15 1.067l-1.467 7.05a1.666 1.666 0 0 0 .45 1.516A1.667 1.667 0 0 0 5 36.667h.333l7.134-1.434a2.1 2.1 0 0 1 1.066.15A16.666 16.666 0 0 0 31.867 8.25l-.084-.033Zm-18.45 13.45a1.666 1.666 0 1 1 0-3.333 1.666 1.666 0 0 1 0 3.333Zm6.667 0a1.666 1.666 0 1 1 0-3.333 1.666 1.666 0 0 1 0 3.333Zm6.667 0a1.666 1.666 0 1 1 0-3.332 1.666 1.666 0 0 1 0 3.332Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={3.293}
        y1={1.243}
        x2={41.956}
        y2={7.242}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SmsIcon;
