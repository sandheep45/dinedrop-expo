import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, type SvgProps } from "react-native-svg";

const FacebookLogo: React.FC<SvgProps> = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M12.5 25C19.404 25 25 19.404 25 12.5S19.404 0 12.5 0 0 5.596 0 12.5 5.596 25 12.5 25Z"
        fill="#3C5A9A"
      />
      <Path
        d="M16.564 3.837h-2.769c-1.643 0-3.47.691-3.47 3.073.007.83 0 1.625 0 2.52H8.422v3.024h1.96v8.71h3.602v-8.767h2.377l.215-2.976h-2.655s.006-1.324 0-1.708c0-.942.98-.888 1.039-.888.466 0 1.372.002 1.605 0V3.837h-.002Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FacebookLogo;
