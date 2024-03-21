import React, {FC} from 'react';
import {Input as RNEInput} from '@rneui/themed';
import {styles} from './styles';
import {IInputProps} from './InputType';

const Input: FC<IInputProps> = ({
  placeholder,
  value,
  textArea,
  onChange,
  errorMessage,
  multiline,
}) => {
  return (
    <RNEInput
      value={value}
      inputContainerStyle={[textArea && styles.textArea, styles.inputContainer]}
      inputStyle={styles.input}
      multiline={multiline}
      // {...(multiline && {numberOfLines: 4})}
      placeholder={placeholder}
      onChangeText={onChange}
      placeholderTextColor="#787878"
      {...(errorMessage && {errorMessage})}
      errorStyle={{fontSize: 14}}
    />
  );
};

export default Input;
