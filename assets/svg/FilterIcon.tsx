import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const FilterIcon: React.FC<SvgProps> = (props) => (
  <Svg {...props} width={24} height={24} fill="none">
    <Path
      opacity={0.4}
      d="M10.083 15.958H3.508c-.832 0-1.508.664-1.508 1.481 0 .817.676 1.482 1.508 1.482h6.575c.832 0 1.508-.665 1.508-1.482s-.675-1.481-1.508-1.481ZM22 6.379c0-.817-.675-1.48-1.507-1.48h-6.575c-.832 0-1.508.663-1.508 1.48s.676 1.48 1.508 1.48h6.575c.832 0 1.507-.663 1.507-1.48Z"
      fill="#DA6317"
    />
    <Path
      d="M8.878 6.379c0 1.866-1.54 3.38-3.44 3.38C3.54 9.758 2 8.244 2 6.378 2 4.513 3.54 3 5.439 3c1.9 0 3.439 1.513 3.439 3.379ZM22 17.4c0 1.865-1.54 3.378-3.44 3.378-1.898 0-3.438-1.513-3.438-3.379 0-1.867 1.54-3.38 3.439-3.38 1.9 0 3.439 1.514 3.439 3.38Z"
      fill="#DA6317"
    />
  </Svg>
);

export default FilterIcon;