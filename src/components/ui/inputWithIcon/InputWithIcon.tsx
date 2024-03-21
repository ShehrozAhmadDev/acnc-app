import React, {FC} from 'react';
import {Input as RNEInput} from '@rneui/themed';
import {styles} from './styles';
import {IInputWithIconProps} from './InputWithIconType';
import SearchIcon from '../../../assets/components/SearchIcon';

const InputWithIcon: FC<IInputWithIconProps> = ({
  placeholder,
  value,
  setValue,
  onChangeText,
}) => {
  const handleChange = (val: any) => {
    setValue?.(val);
  };
  return (
    <RNEInput
      value={value}
      placeholderTextColor={'white'}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      placeholder={placeholder}
      onChange={handleChange}
      leftIcon={<SearchIcon />}
      onChangeText={onChangeText}
    />
  );
};

export default InputWithIcon;
