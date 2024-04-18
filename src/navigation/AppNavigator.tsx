import React from 'react';
import AuthNavigation from './auth/AuthNavigation';
import MainNavigation from './main/MainNavigation';
import { useAppSelector } from '../redux/store';

const AppNavigator = () => {
  const { user } = useAppSelector((state) => state.userReducer.value);
  return <>{!user?.token ? <AuthNavigation /> : <MainNavigation />}</>;
};

export default AppNavigator;
