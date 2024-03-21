import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from './styles';
import ArrowIcon from '@src/assets/components/ArrowIcon';
const countries = ['Recent', 'A-Z'];

const Select = () => {
  return (
    <SelectDropdown
      buttonStyle={styles.inputContainer}
      renderDropdownIcon={ArrowIcon}
      buttonTextStyle={{fontSize: 12}}
      defaultValue={'Recent'}
      data={countries}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={selectedItem => {
        return selectedItem;
      }}
      rowTextForSelection={item => {
        return item;
      }}
    />
  );
};

export default Select;
