import {ReactNode} from 'react';
import {StyleProp} from 'react-native';

export interface IBottomSheetProps {
  isVisible: boolean;
  children: ReactNode;
  testID?: string;
  style?: StyleProp;
  onClose?: () => void;
}
