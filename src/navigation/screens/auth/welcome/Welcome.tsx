import {View, Image} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';

import Logo from '../../../../assets/acnclogo.png';

import {IWelcomeProps} from './WelcomeType';
import {Text} from '../../../../components/ui/text';
import {Button} from '../../../../components/ui/button';

const Welcome: FC<IWelcomeProps> = ({navigation}) => {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.flexContainer}>
        <Image source={Logo} style={styles.logoStyle} resizeMode="contain" />
        <Text style={styles.headerText}>ACNC Kitchen</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.mainText}>Food Delivery App</Text>
        <Text style={styles.subText}>
          Order your favourite food and we will deliver it to your doorstep
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Get Started" onPress={navigateToLogin} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
