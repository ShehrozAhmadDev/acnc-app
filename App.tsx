/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {ThemeProvider} from '@rneui/themed';
import {theme} from './src/theme';
import AppNavigator from './src/navigation/AppNavigator';
import {AuthProvider} from './src/context/AuthContext';
import { ReduxProvider } from './src/redux/provider';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
