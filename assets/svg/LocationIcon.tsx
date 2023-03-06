import * as React from "react";
import Svg, { type SvgProps, Circle, Mask, G, Path } from "react-native-svg";

const LocationIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={33} height={33} fill="none">
    <Circle cx={16.5} cy={16.5} r={16.5} fill="#FFE14D" />
    <Mask
      id="a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={33}
      height={33}
    >
      <Circle cx={16.5} cy={16.5} r={16.5} fill="#FFE14D" />
    </Mask>
    <G mask="url(#a)">
      <Path d="m25 35-8.5-9 5-8V7.5L36 24 25 35Z" fill="#F8D52B" />
    </G>
    <Path
      d="M16.5 6.005c-4.404 0-7.996 3.592-7.996 7.996 0 1.747.554 3.408 1.6 4.798l5.904 7.955c.086.123.32.246.492.246a.73.73 0 0 0 .492-.246c.025-.037 5.967-8.041 6.016-8.115.012 0 .012 0 .012-.012A7.96 7.96 0 0 0 24.496 14c0-4.404-3.592-7.996-7.996-7.996Zm0 12.302A4.31 4.31 0 0 1 12.195 14 4.31 4.31 0 0 1 16.5 9.696 4.31 4.31 0 0 1 20.806 14a4.31 4.31 0 0 1-4.306 4.306Z"
      fill="#FF833D"
    />
    <Path
      d="M16.5 6v3.69a4.31 4.31 0 0 1 4.306 4.306 4.31 4.31 0 0 1-4.306 4.306v8.693a.73.73 0 0 0 .492-.246c.025-.037 5.966-8.041 6.016-8.115.012 0 .012 0 .012-.012a7.96 7.96 0 0 0 1.476-4.626C24.496 9.592 20.904 6 16.5 6Z"
      fill="#E86D28"
    />
  </Svg>
);

export default LocationIcon;
