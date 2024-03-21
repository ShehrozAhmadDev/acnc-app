import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ArrowIcon = (props: SvgProps) => (
  <Svg width={12} height={13} fill="none" {...props}>
    <Path
      stroke="#1F1F1F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.75}
      d="M9.96 4.975 6.7 8.235a.993.993 0 0 1-1.4 0l-3.26-3.26"
    />
  </Svg>
);
export default ArrowIcon;
