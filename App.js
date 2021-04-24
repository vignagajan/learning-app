import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from './components/screens/StartScreen';
import LoginScreen from './components/screens/LoginScreen';

let customFonts = {
  'Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
};

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle:{ 
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor : '#2188dd',
};

const StartScreenOptions =  {
  headerShown: false
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={ globalScreenOptions }>
          <Stack.Screen name='Start' options={ StartScreenOptions } component={StartScreen} />
          <Stack.Screen name='Login' options={{ title:null,}} component={LoginScreen} />

        </Stack.Navigator>
      </NavigationContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
