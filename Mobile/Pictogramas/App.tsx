import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import ListScreen from './screens/ListScreen';
import NewScreen from './screens/NewScreen';
import ViewScreen from './screens/ViewScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <SafeAreaProvider>
      //   <Navigation colorScheme={colorScheme} />
      //   <StatusBar />
      <Router>
        <Scene key="root">
          <Scene
            key="LoginScreen"
            component={LoginScreen}
            left={() => null}
            title="Mureed"
            initial={true}
          />
          <Scene
            key="SignupScreen"
            component={SignupScreen}
            left={() => null}
            title="Mureed"
          />
          <Scene
            key="ListScreen"
            component={ListScreen}
            left={() => null}
            title="Mureed"
          />
          <Scene
            key="NewScreen"
            component={NewScreen}
            left={() => null}
            title="Mureed"
          />
          <Scene
            key="ViewScreen"
            component={ViewScreen}
            left={() => null}
            title="Mureed"
          />
        </Scene>
      </Router>
      // </SafeAreaProvider>
    );
  }
}
