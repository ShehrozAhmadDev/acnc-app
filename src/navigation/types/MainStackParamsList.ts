import {RouteProp} from '@react-navigation/core';

export type MainStackParamList = {
  Home: undefined;
  Cart: undefined;
  Send: undefined;
};

export type HomeScreenRouteProp = RouteProp<MainStackParamList, 'Home'>;
export type SendScreenRouteProp = RouteProp<MainStackParamList, 'Send'>;
export type CartScreenRouteProp = RouteProp<MainStackParamList, 'Cart'>;

