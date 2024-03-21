import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const ChartIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill={props.fill}>
      <Path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z" />
      <Path d="M15.5 19.25c-1.52 0-2.75-1.23-2.75-2.75v-9c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v9c0 1.52-1.23 2.75-2.75 2.75Zm0-13c-.69 0-1.25.56-1.25 1.25v9a1.25 1.25 0 0 0 2.5 0v-9c0-.69-.56-1.25-1.25-1.25ZM8.5 19.25c-1.52 0-2.75-1.23-2.75-2.75V13c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v3.5c0 1.52-1.23 2.75-2.75 2.75Zm0-7.5c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 0 0 2.5 0V13c0-.69-.56-1.25-1.25-1.25Z" />
    </G>
  </Svg>
);
export default ChartIcon;
