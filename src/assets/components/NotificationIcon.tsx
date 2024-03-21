import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

const NotificationIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.125}
      d="M9.015 2.182a4.504 4.504 0 0 0-4.5 4.5V8.85c0 .457-.195 1.155-.428 1.545l-.862 1.432c-.533.885-.165 1.868.81 2.198a15.69 15.69 0 0 0 9.952 0 1.502 1.502 0 0 0 .81-2.198l-.862-1.432c-.225-.39-.42-1.088-.42-1.545V6.682c0-2.475-2.025-4.5-4.5-4.5Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.125}
      d="M10.402 2.4a5.065 5.065 0 0 0-2.775 0 1.489 1.489 0 0 1 1.388-.945c.63 0 1.17.39 1.387.945Z"
    />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={1.125}
      d="M11.265 14.295a2.257 2.257 0 0 1-2.25 2.25 2.258 2.258 0 0 1-1.59-.66 2.258 2.258 0 0 1-.66-1.59"
    />
    <Circle cx={14} cy={5} r={3} fill="#FF7F7F" />
  </Svg>
);
export default NotificationIcon;
