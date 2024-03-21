import {StyleProp} from 'react-native';

export interface IButtonProps {
  title?: string;
  testID?: string;
  style?: StyleProp;
  onPress?: () => void;
}
