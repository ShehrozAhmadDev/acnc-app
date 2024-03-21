import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Divider as RNEDivider} from '@rneui/themed';
import {IDividerProps} from './DividerType';
import {styles} from './styles';

const Divider: FC<IDividerProps> = ({children}) => {
  return (
    <View style={styles.dividerContainer}>
      <RNEDivider style={styles.divider} width={1} />
      <Text style={styles.textStyle}>{children}</Text>
      <RNEDivider style={styles.divider} width={1} />
    </View>
  );
};

export default Divider;
