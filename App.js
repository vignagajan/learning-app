import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import StartScreen from './components/screens/StartScreen';

let customFonts = {
  'Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
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
        <StartScreen />
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
