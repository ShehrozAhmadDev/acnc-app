import React, {FC} from 'react';
import {BottomSheet as RNEBottomSheet} from '@rneui/themed';
import {IBottomSheetProps} from './BottomSheetType';
import {styles} from './styles';
const BottomSheet: FC<IBottomSheetProps> = ({children, isVisible, onClose}) => {
  return (
    <RNEBottomSheet
      containerStyle={styles.containerStyle}
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropStyle={styles.backdropStyle}>
      {children}
    </RNEBottomSheet>
  );
};

export default BottomSheet;
