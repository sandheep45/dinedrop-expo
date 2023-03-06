import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const ChatIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={24} height={24} fill="none">
    <G opacity={0.5}>
      <Path
        d="M12.02 2C6.21 2 2 6.74 2 12c0 1.68.49 3.41 1.35 4.99.16.26.18.59.07.9l-.67 2.24c-.15.54.31.94.82.78l2.02-.6c.55-.18.98.05 1.491.36 1.46.86 3.279 1.3 4.919 1.3 4.96 0 10-3.83 10-10C22 6.65 17.7 2 12.02 2Z"
        fill="url(#a)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.98 13.29c-.71-.01-1.28-.58-1.28-1.29 0-.7.58-1.28 1.28-1.27.71 0 1.28.57 1.28 1.28 0 .7-.57 1.28-1.28 1.28Zm-4.61 0c-.7 0-1.28-.58-1.28-1.28 0-.71.57-1.28 1.28-1.28.71 0 1.28.57 1.28 1.28 0 .7-.57 1.27-1.28 1.28Zm7.94-1.28c0 .7.57 1.28 1.28 1.28.71 0 1.28-.58 1.28-1.28 0-.71-.57-1.28-1.28-1.28-.71 0-1.28.57-1.28 1.28Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={2}
        y1={0.774}
        x2={25.087}
        y2={4.356}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default ChatIcon;
