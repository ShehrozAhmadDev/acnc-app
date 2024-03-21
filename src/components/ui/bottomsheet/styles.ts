import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#1B1B1B',
    // maxHeight: 476,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  backdropStyle: {
    backgroundColor: '#1B1B1B',
    height: Dimensions.get('screen').height,
    opacity: 0.3,
    flex: 1,
  },
});
