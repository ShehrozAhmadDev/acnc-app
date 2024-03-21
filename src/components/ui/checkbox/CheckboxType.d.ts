import {StyleProp} from 'react-native';

export interface ICheckboxProps {
  title?: string;
  testID?: string;
  style?: StyleProp;
  onPress?: () => void;
}
