/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileHeader} from '../../components/base/profileHeader';
import {MyTabBar} from '../../components/base/mytab';
import WalletIcon from '../../assets/components/WalletIcon';
import HomeIcon from '../../assets/components/HomeIcon';
import ChartsIcon from '../../assets/components/ChartIcon';
import ProfileIcon from '../../assets/components/ProfileIcon';
import {Home} from '../screens/main/home';
import {Profile} from '../screens/main/profile';
import Cart from '../screens/main/cart/Cart';
import { Order } from '../screens/main/order';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const screenIcons = {
    Home: HomeIcon,
    Cart:WalletIcon ,
    Wallet: ChartsIcon,
    Profile: ProfileIcon,
  };
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} screenIcons={screenIcons} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{header: () => <ProfileHeader />}}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{header: () => <ProfileHeader />}}
      />
      <Tab.Screen
        name="Wallet"
        component={Home}
        options={{header: () => <ProfileHeader />}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{header: () => <ProfileHeader />}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
