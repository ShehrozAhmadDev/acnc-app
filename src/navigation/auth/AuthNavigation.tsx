import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, Platform} from 'react-native';
import {Welcome} from '../screens/auth/welcome';
import {Login} from '../screens/auth/login';
import Signup from '../screens/auth/signup/Signup';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  const isAndroid = Platform.OS === 'android';

  return (
    <NavigationContainer>
      {isAndroid && (
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'white'}
          translucent={true}
        />
      )}
      {!isAndroid && (
        <StatusBar barStyle="dark-content" backgroundColor="white" />
      )}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
