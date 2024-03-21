import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: 20,
      },
    }),
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000000',
    height: '80%',

  },
  imageLogoContainer:{
    display: "flex",
    flexDirection:"row",
    gap: 10
  },
  logoStyle: {
    width: 130,
    height: 40,
  },
  inputContainer:{marginTop: 20},
  mainHeader: {
    fontSize: 24,
    color: "white",
  },
  categoriesCard:{
    borderRadius: 50,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    fontFamily: 'Poppins-Medium',

  },
  categoryHeaderContainer:{
    marginVertical:10,
    display:"flex",
    justifyContent:'space-between',
    width: "100%",
    flexDirection:"row",
    alignItems:"center"
  },
  categoryHeader:{
    fontSize: 24,
    color: "white"
  },
  categoryViewAll:{
    fontSize: 14,
    color: "#eeeeee"
  },
  addToCart: {
    width: 26,
    height: 26,
  }
});
