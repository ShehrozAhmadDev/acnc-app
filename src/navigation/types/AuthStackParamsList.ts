import {RouteProp} from '@react-navigation/core';

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
};

export type WelcomeScreenRouteProp = RouteProp<AuthStackParamList, 'Welcome'>;
export type LoginScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>;
export type SignupScreenRouteProp = RouteProp<AuthStackParamList, 'Signup'>;
