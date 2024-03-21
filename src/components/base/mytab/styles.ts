import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#121111',
    position: 'absolute',
    bottom: 30,
    left: 'auto',
    right: 'auto',
    height: 92,
    alignSelf: 'center',
    width: '92%',
    borderRadius: 60,
    padding: 10,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 72,
    borderRadius: 60,
  },
});
