import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
const FacebookIcon = (props: SvgProps) => (
  <Svg width={47} height={46} fill="none" {...props}>
    <Rect width={46} height={46} x={0.5} fill="#F8F8F8" rx={23} />
    <Path
      fill="#1877F2"
      d="M35.5 23c0-6.628-5.372-12-12-12s-12 5.372-12 12c0 5.99 4.386 10.955 10.126 11.855v-8.383H18.58V23h3.045v-2.643c0-3.005 1.788-4.669 4.53-4.669 1.315 0 2.69.237 2.69.237v2.952h-1.513c-1.492 0-1.952.928-1.952 1.874V23h3.327l-.533 3.472h-2.794v8.383C31.114 33.955 35.5 28.99 35.5 23Z"
    />
    <Path
      fill="#fff"
      d="M28.168 26.472 28.701 23h-3.327v-2.249c0-.946.467-1.874 1.953-1.874h1.512v-2.952s-1.374-.237-2.69-.237c-2.741 0-4.53 1.664-4.53 4.669V23h-3.044v3.472h3.044v8.383a11.78 11.78 0 0 0 1.874.145c.638 0 1.263-.053 1.874-.145v-8.383h2.801Z"
    />
  </Svg>
);
export default FacebookIcon;
