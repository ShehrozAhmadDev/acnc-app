import {StyleSheet, Platform} from 'react-native';
export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#800000',
    ...Platform.select({
      ios: {
        paddingTop: 65,
      },
      android: {
        paddingTop: 55,
      },
    }),
    paddingBottom: 20,
    paddingHorizontal: 18,
  },
  inlineContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {width: 40, height: 40},
  textContainer: {
    marginLeft: 12,
  },
  mainText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 25,
    fontFamily: 'Poppins-Medium',
  },
  emailText: {
    color: '#AAC0F8',
    marginTop: 2,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Poppins-Regular',
  },
  notificationButton: {
    width: 40,
    height: 40,
  },
  dropdown: {
    position: 'absolute',
    top: 110,
    left: 5,
    backgroundColor: '#111111',
    padding: 6,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  logoutButton: {
    padding: 10,
  },

  logoutButtonText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
});
