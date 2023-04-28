import * as React from "react";
import Svg, { SvgProps, Rect, Circle } from "react-native-svg";
const ClickPictureIcon: React.FC<SvgProps> = (props) => (
  <Svg width={48} height={48} fill="none" {...props}>
    <Rect width={48} height={48} fill="#fff" rx={24} />
    <Circle cx={24} cy={24} r={19} fill="#fff" stroke="#000" strokeWidth={2} />
  </Svg>
);
export default ClickPictureIcon;
