import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const CartIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={24} height={24} fill="none">
    <G opacity={0.5} fillRule="evenodd" clipRule="evenodd">
      <Path
        opacity={0.4}
        d="M5.91 20.589c0-.84.68-1.52 1.52-1.52a1.515 1.515 0 1 1-1.52 1.52Zm11.25 0c0-.84.68-1.52 1.52-1.52a1.515 1.515 0 1 1-1.52 1.52Z"
        fill="url(#a)"
      />
      <Path
        d="M20.19 6.35c.61 0 1.01.21 1.41.67.4.46.47 1.12.38 1.718l-.95 6.56a2.552 2.552 0 0 1-2.53 2.19H7.59c-1.33 0-2.43-1.02-2.54-2.339l-.92-10.9-1.51-.26a.753.753 0 0 1-.61-.86c.07-.41.46-.68.87-.62l2.386.36c.34.06.59.34.62.68l.19 2.24a.61.61 0 0 0 .61.56H20.19Zm-6.06 5.198h2.77c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75h-2.77c-.42 0-.75.33-.75.75 0 .41.33.75.75.75Z"
        fill="url(#b)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={5.911}
        y1={18.883}
        x2={16.921}
        y2={26.922}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={2}
        y1={1.579}
        x2={24.689}
        y2={6.274}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default CartIcon;
