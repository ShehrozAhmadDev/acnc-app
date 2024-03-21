import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const BackIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.625 14.25 6.375 9l5.25-5.25"
    />
  </Svg>
);
export default BackIcon;
