import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
    mainContainer:{
        width: 180,
        height: 200,
        borderRadius: 30,
        backgroundColor: '#121111',
        elevation: 20,
        padding: 18,
        display:"flex",
        justifyContent:"space-between"
      },
      imageContainer:{display: 'flex', alignItems: 'center'},
      image:{height: 100, width: 100, objectFit:"contain"},

      mainText:{
        fontSize: 14,
        color: 'white',
        fontWeight: '600',
        marginTop: 6,
      }, priceContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      price:{
        fontSize: 16,
        color: 'white',
        fontWeight: '400',
        marginTop: 4,
      },
      bottomImage:{height: 200, width: 200, position:"absolute", top: -50, zIndex: 1000},
      bottomSheetContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 27,
        paddingBottom: 82,
        backgroundColor: "#1B1B1B",
        position:"relative"
      },
      bottomSheetTextCont: {marginTop: 150, height:200, justifyContent:"space-between"},
      bottomSheetmainText: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Poppins-Medium',
      },
      loginSuccessfulText: {
        marginTop: 0,
      },
      bottomSheetSubText: {
        fontSize: 12,
        color: 'white',
        lineHeight: 16,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
      },

});
