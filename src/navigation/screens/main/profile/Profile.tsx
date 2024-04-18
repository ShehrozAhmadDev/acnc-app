import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useAppSelector } from '../../../../redux/store';
import { setUser } from '../../../../redux/features/user-slice';
import { useDispatch } from 'react-redux';
import Avatar1 from '../../../../assets/Avatar1.png';
import { Button } from '../../../../components/ui/button';
import { handledeleteAccount } from '../../../../services/auth/deleteAccount';

const Profile = () => {
  const dispatch = useDispatch()
  const {user} = useAppSelector((state)=> state.userReducer.value)
  const logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: () => dispatch(setUser(null))},
      ],
      {cancelable: false}
    );
  };

  const deleteAccount =async () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', onPress:async () =>{ 
          if(user?.token && user._id){
            const data =await handledeleteAccount(user?._id, user?.token);
            if(data.status === 200){
              Alert.alert("Account Deleted Successfully");
              dispatch(setUser(null));
            }

          }

        }}, 
      ],
      {cancelable: false}
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Profile Information</Text>
       <View style={styles.inlineContainer}>
        <TouchableOpacity
          style={styles.inlineContainer}
          >
          <Image source={Avatar1} style={styles.avatar} />
        </TouchableOpacity>
      </View>
        <View style={styles.textContainer}>
          <Text style={styles.labelContainer}>Name:</Text>
          <Text style={styles.mainText}>{user?.fullName}</Text>
          <Text style={styles.labelContainer}>Email:</Text>
          <Text style={styles.mainText}>{user?.email}</Text>
        </View>
        <View style={styles.buttonContainer}>

        <Button
          title="Logout"
          onPress={() => {
            logout();
          }}
        />
          <Button
          title="Delete Account"
          onPress={() => {
            deleteAccount()
          }}
        />
        </View>
      </View>
  );
};

export default Profile;

const styles = StyleSheet.create({  container: {
  backgroundColor: '#000',
  padding: 10,
  height: "100%"
},
headertext:{
  fontSize: 28,
  fontWeight:"600",
  marginVertical: 10,
  textAlign:"center"

},
inlineContainer: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:"center"
},
buttonContainer:{
  marginTop: 40,
  display:"flex",
  gap: 10
},
labelContainer:{
  marginTop: 10,
  fontSize: 20
},
avatar: {width: 80, height: 80},
textContainer: {
  marginLeft: 12,
},
mainText: {
  color: 'white',
  fontSize: 26,
  fontWeight: '500',
  fontFamily: 'Poppins-Medium',
},
});
