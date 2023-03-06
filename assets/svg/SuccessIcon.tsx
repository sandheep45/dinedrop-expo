import * as React from "react";
import Svg, {
  type SvgProps,
  Circle,
  Ellipse,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const SuccessIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={172} height={162} fill="none">
    <Circle cx={85} cy={93} r={67} fill="url(#a)" />
    <Circle cx={165.5} cy={32.5} r={6.5} fill="url(#b)" />
    <Ellipse cx={10.5} cy={10} rx={10.5} ry={10} fill="url(#c)" />
    <Ellipse cx={5} cy={136.5} rx={5} ry={5.5} fill="url(#d)" />
    <Ellipse cx={153.5} cy={160} rx={2.5} ry={2} fill="url(#e)" />
    <Path
      d="M80.023 111.118c-1.421 0-2.842-.609-3.654-1.827L65.002 94.676c-1.624-2.03-1.218-4.871.812-6.495 2.03-1.624 4.872-1.218 6.495.812l7.714 9.946 17.05-22.125c1.624-2.03 4.466-2.436 6.496-.812 2.029 1.624 2.435 4.466.812 6.495l-20.705 26.794c-1.015 1.015-2.232 1.827-3.653 1.827Z"
      fill="#fff"
    />
    <Circle cx={113.5} cy={103.5} r={2.5} fill="#fff" />
    <Circle cx={48} cy={76} r={4} fill="#fff" />
    <Circle cx={106.5} cy={54.5} r={1.5} fill="#fff" />
    <Circle cx={65} cy={125} r={2} fill="#fff" />
    <Circle cx={87} cy={77} r={1} fill="#fff" />
    <Defs>
      <LinearGradient
        id="a"
        x1={18}
        y1={17.772}
        x2={172.69}
        y2={41.739}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={159}
        y1={25.202}
        x2={174.007}
        y2={27.527}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={0}
        y1={-1.228}
        x2={24.184}
        y2={2.706}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={0}
        y1={130.325}
        x2={11.591}
        y2={131.957}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={151}
        y1={157.754}
        x2={156.697}
        y2={158.858}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#53E88B" />
        <Stop offset={1} stopColor="#15BE77" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SuccessIcon;
