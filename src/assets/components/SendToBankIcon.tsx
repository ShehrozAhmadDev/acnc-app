import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SendToBankIcon = (props: SvgProps) => (
  <Svg width={33} height={32} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m16.993 2.867 12 4.8c.467.186.84.746.84 1.24v4.426c0 .734-.6 1.334-1.333 1.334h-24c-.733 0-1.333-.6-1.333-1.334V8.907c0-.494.373-1.054.84-1.24l12-4.8c.266-.107.72-.107.986 0ZM29.833 29.333H3.167v-4c0-.733.6-1.333 1.333-1.333h24c.733 0 1.333.6 1.333 1.333v4ZM5.833 24v-9.333M11.166 24v-9.333M16.5 24v-9.333M21.834 24v-9.333M27.166 24v-9.333M1.833 29.333h29.334"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.5 11.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
);
export default SendToBankIcon;
