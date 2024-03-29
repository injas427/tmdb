/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {COLORS} from './src/theme';

import {AppNavigator} from './src/AppNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        networkMode: 'offlineFirst',
      },
    },
  });

  const backgroundStyle = {
    backgroundColor: COLORS.white,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </SafeAreaView>
  );
}

export default App;
