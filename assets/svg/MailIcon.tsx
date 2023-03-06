import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, type SvgProps } from "react-native-svg";

const MailIcon: React.FC<SvgProps> = (props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G opacity={0.5}>
      <Path
        opacity={0.4}
        d="M22 15.94c0 2.79-2.24 5.05-5.03 5.06H7.05C4.27 21 2 18.75 2 15.96v-.01s.006-4.426.014-6.652a.498.498 0 0 1 .808-.392c2.376 1.885 6.625 5.322 6.678 5.367.71.57 1.61.89 2.53.89.92 0 1.82-.32 2.53-.9.053-.036 4.207-3.37 6.619-5.286a.5.5 0 0 1 .811.39c.01 2.21.01 6.573.01 6.573"
        fill="url(#a)"
      />
      <Path
        d="M21.476 5.674A5.035 5.035 0 0 0 17.03 3H7.05a5.035 5.035 0 0 0-4.446 2.674.864.864 0 0 0 .22 1.078l7.426 5.939c.52.42 1.15.629 1.78.629h.02c.63 0 1.26-.21 1.78-.63l7.425-5.938a.864.864 0 0 0 .22-1.078"
        fill="url(#b)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={2}
        y1={8.048}
        x2={24.21}
        y2={13.688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={2.503}
        y1={2.366}
        x2={23.342}
        y2={8.333}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default MailIcon;
