import React, {FC} from 'react';
import {CheckBox as RNECheckbox} from '@rneui/themed';
import {ICheckboxProps} from './CheckboxType';
import UncheckedIcon from '../../../assets/components/UncheckedIcon';

const Checkbox: FC<ICheckboxProps> = ({title}) => {
  const [checked, setChecked] = React.useState(false);
  const toggleCheckbox = () => setChecked(false);
  return (
    <RNECheckbox
      checked={checked}
      uncheckedIcon={<UncheckedIcon />}
      onPress={toggleCheckbox}
      containerStyle={{padding: 0}}
      titleProps={{
        style: {
          color: '#A5A5A5',
          fontSize: 12,
          fontFamily: 'Poppins-Medium',
        },
      }}
      title={title}
    />
  );
};

export default Checkbox;
