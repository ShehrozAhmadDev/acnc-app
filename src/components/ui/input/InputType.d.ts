import {FunctionWithParam} from './../../../types/types';
import {SetStateAction} from 'react';
import {StyleProp} from 'react-native';

export interface IInputProps {
  placeholder?: string;
  value?: string;
  setValue?: FunctionWithParam<SetStateAction<string>>;
  testID?: string;
  style?: StyleProp;
  textArea?: boolean;
  onPress?: () => void;
  onChange?: FunctionWithParam;
  errorMessage?: string;
  multiline?: boolean;
}
