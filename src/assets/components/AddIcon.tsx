import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const AddIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16h16M16 24V8"
    />
  </Svg>
);
export default AddIcon;
