import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SendMoneyIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M29.333 16c0 7.36-5.973 13.333-13.333 13.333S2.666 23.36 2.666 16 8.64 2.667 16 2.667M29.333 8V2.667H24M22.666 9.333l6.667-6.666"
    />
  </Svg>
);
export default SendMoneyIcon;
