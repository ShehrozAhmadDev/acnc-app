/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../tab/TabNavigation';
import {Order} from '../screens/main/order';
import {CustomHeader} from '../../components/base/customHeader';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  const isAndroid = Platform.OS === 'android';

  return (
    <NavigationContainer>
      {isAndroid && (
        <StatusBar
          barStyle="light-content"
          backgroundColor={'#800000'}
          translucent={true}
        />
      )}
      {!isAndroid && (
        <StatusBar barStyle="light-content" backgroundColor="black" />
      )}

      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{header: props => <CustomHeader {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
