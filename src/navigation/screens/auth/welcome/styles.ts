import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    ...Platform.select({
      ios: {
        paddingTop: 70,
      },
      android: {
        paddingTop: 35,
      },
    }),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 28,
    paddingRight: 39,
  },
  logoStyle: {
    width: 209,
    height: 70,
  },
  moneyStyle: {
    width: 75,
    height: 32,
  },
  backgroundStyle: {
    width: '100%',
    ...Platform.select({
      ios: {
        marginTop: 50,
      },
      android: {
        paddingTop: 65,
        marginTop: 40
      },
    }),
    height: '100%',
    objectFit:"fill",
    position: 'absolute',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 8,
    width: '70%',
    lineHeight: 43,
    color: '#FFFFFF',
  },
  subText: {
    fontSize: 12,
    marginBottom: 21,
    width: '88%',
    textAlign: 'center',
    color: '#FFFFFF',
    lineHeight: 16,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 70,
  },
});
