import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    ...Platform.select({
      ios: {
        paddingTop: 120,
      },
      android: {
        paddingTop: 120,
      },
    }),
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000000',
    height: '100%',
  },
  textContainer: {
    marginHorizontal: 9,
  },
  inputContainer: {
    // marginBottom: 6,
  },
  mainText: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    lineHeight: 43,
    fontStyle: 'normal',
    fontFamily: 'Poppins-SemiBold',
    color:"#FFFFFF",
    textAlign: "center"
  },
  subText: {
    fontSize: 12,
    marginBottom: 12,
    color:"#FFFFFF",
    lineHeight: 16,
    width: '96%',
    fontFamily: 'Poppins-Regular',
  },
  loginContainer: {
    marginTop: 30,
  },
  loginButton: {
    marginHorizontal: 10,
  },
  checkBoxCont: {
    marginTop: 16,
  },
  dividerContainer: {
    marginTop: 118,
  },
  altLoginCont: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 43,
    width: '100%',
  },
  altLogin: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    width: '65%',
  },
  bottomContainer: {
    marginTop: 45,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMainText: {
    fontSize: 12,
    textAlign: 'center',
    color:"#FFFFFF",
    fontWeight: '500',
    lineHeight: 16.5,
    fontFamily: 'Poppins-Medium',
  },
  signUpTextCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    paddingBottom: 100,
    fontFamily: 'Poppins-Regular',
  },
  signUpText: {
    color:"#FFFFFF",
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  highlightedText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 17,
    fontFamily: 'Poppins-Medium',
  },
  signupButton: {
    color: '#2A61EE',
    marginLeft: 5,
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  bottomSheetContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 27,
    paddingBottom: 82,
  },
  bottomSheetTextCont: {},
  bottomSheetmainText: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: -25,
    textAlign: 'center',
    color: '#1F1F1F',
    fontFamily: 'Poppins-Medium',
  },
  loginSuccessfulText: {
    marginTop: 0,
  },
  bottomSheetSubText: {
    fontSize: 12,
    color: '#A5A5A5',
    lineHeight: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  image: {
    width: 264,
    height: 256,
  },
  loginImage: {
    marginLeft: 20,
  },
  backToHomeButton: {
    width: '100%',
    marginTop: 50,
  },
  loginSuccessful: {
    paddingBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 24,
  },
});
