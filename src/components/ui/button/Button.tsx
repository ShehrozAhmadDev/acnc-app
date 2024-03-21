import {Button as RNEButton} from '@rneui/themed';
import React, {FC} from 'react';
import {IButtonProps} from './ButtonType';
import {styles} from './styles';

const Button: FC<IButtonProps> = ({title, onPress, style}) => {
  return (
    <RNEButton
      buttonStyle={styles.buttonStyles}
      containerStyle={{...styles.containerStyle, ...style}}
      title={title}
      onPress={onPress}
      titleStyle={styles.titleStyle}
    />
  );
};

export default Button;
