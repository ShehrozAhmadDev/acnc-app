import {StyleProp} from 'react-native';

export interface IIconButtonProps {
  children: ReactNode;
  testID?: string;
  style?: StyleProp;
  onPress?: () => void;
}
