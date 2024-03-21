import {View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Text} from '../../../components/ui/text';
import Avatar1 from '../../../assets/Avatar1.png';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/features/user-slice';
import { useAppSelector } from '../../../redux/store';

const ProfileHeader = () => {
  const dispatch = useDispatch()
  const [showDropdown, setShowDropdown] = useState(false);
  const {user} = useAppSelector((state)=> state.userReducer.value)
  const logout = ()=>{
    dispatch(setUser(null));
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.inlineContainer}>
        <TouchableOpacity
          style={styles.inlineContainer}
          onPress={toggleDropdown}>
          <Image source={Avatar1} style={styles.avatar} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Hi {user?.fullName || "User"}</Text>
          <Text style={styles.emailText}>{user?.email}</Text>
        </View>
      </View>
      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default ProfileHeader;
