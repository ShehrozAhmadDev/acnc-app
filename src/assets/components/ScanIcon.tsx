import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ScanIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.667 12V8.667c0-3.32 2.68-6 6-6H12M20 2.667h3.333c3.32 0 6 2.68 6 6V12M29.334 21.333v2c0 3.32-2.68 6-6 6h-2M12 29.333H8.666c-3.32 0-6-2.68-6-6V20"
    />
  </Svg>
);
export default ScanIcon;
