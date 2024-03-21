import {FunctionWithParam} from './../../../types/types';
import {SetStateAction} from 'react';
import {StyleProp} from 'react-native';

export interface IInputWithIconProps {
  placeholder?: string;
  value?: string;
  setValue?: FunctionWithParam<SetStateAction<string>>;
  testID?: string;
  style?: StyleProp;
  onPress?: () => void;
  onChangeText?: FunctionWithParam;
}
