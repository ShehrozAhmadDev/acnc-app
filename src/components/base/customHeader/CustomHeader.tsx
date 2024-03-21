import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Text} from '../../ui/text';
import BackIcon from '../../../assets/components/BackIcon';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from '../../ui/iconbutton';

const CustomHeader = ({route}: any) => {
  const navigation = useNavigation();
  const title = route.name;

  const handleBackNavigation = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.inlineContainer}>
        <IconButton style={styles.backButton} onPress={handleBackNavigation}>
          <BackIcon />
        </IconButton>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>{title}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CustomHeader;
