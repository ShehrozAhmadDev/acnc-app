import * as React from 'react';
import Svg, {SvgProps, Rect} from 'react-native-svg';
const UncheckedIcon = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Rect
      width={16}
      height={16}
      x={10}
      y={10}
      stroke="#A5A5A5"
      strokeWidth={2}
      rx={3}
    />
  </Svg>
);
export default UncheckedIcon;
