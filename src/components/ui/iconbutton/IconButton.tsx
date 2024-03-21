import {Button as RNEButton} from '@rneui/themed';
import React, {FC} from 'react';
import {IIconButtonProps} from './IconButtonType';
import {styles} from './styles';

const IconButton: FC<IIconButtonProps> = ({children, onPress, style}) => {
  return (
    <RNEButton
      buttonStyle={{...styles.buttonStyles, ...style}}
      containerStyle={{...styles.containerStyle, ...style}}
      onPress={onPress}>
      {children}
    </RNEButton>
  );
};

export default IconButton;
