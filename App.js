import React from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { PRIMARY } from './assets/styles/colors.js'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from './components/screens/StartScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ProfileScreen from './components/screens/ProfileScreen';

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
  headerTintColor : PRIMARY,
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
          <Stack.Screen name='Register' options={{ title:null,}} component={RegisterScreen} />
          <Stack.Screen name='Profile' options={{ title:null,headerShown: false}} component={ProfileScreen} />

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
