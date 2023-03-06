import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop, type SvgProps } from "react-native-svg";

const ProfileIcon: React.FC<SvgProps> = (props) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G opacity={0.5}>
      <Path
        d="M11.997 15.175c-4.313 0-7.997.68-7.997 3.4C4 21.295 7.661 22 11.997 22c4.313 0 7.997-.68 7.997-3.4 0-2.721-3.66-3.425-7.997-3.425"
        fill="url(#a)"
      />
      <Path
        opacity={0.4}
        d="M11.997 12.584a5.273 5.273 0 0 0 5.292-5.292A5.273 5.273 0 0 0 11.997 2a5.274 5.274 0 0 0-5.292 5.292 5.274 5.274 0 0 0 5.292 5.292"
        fill="url(#b)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={4}
        y1={14.755}
        x2={20.705}
        y2={20.821}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={6.705}
        y1={1.35}
        x2={18.923}
        y2={3.243}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default ProfileIcon;
