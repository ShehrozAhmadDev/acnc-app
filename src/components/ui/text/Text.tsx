import {Text as RNEText} from '@rneui/themed';

import React, {FC} from 'react';
import {ITextProps} from './TextType';
import {styles} from './styles';

const Text: FC<ITextProps> = ({children, style}) => {
  const combinedStyle = [styles.textStyle, style];
  return <RNEText style={combinedStyle}>{children}</RNEText>;
};

export default Text;
