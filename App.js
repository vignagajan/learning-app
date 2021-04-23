import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Platform Default</Text>
          <Text style={{ fontFamily: 'Regular' }}>Regular</Text>
          <Text style={{ fontFamily: 'Bold' }}>Bold</Text>
          <Text style={{ fontFamily: 'Medium' }}>Medium</Text>
          <Text style={{ fontFamily: 'SemiBold' }}>SemiBold</Text>
          
        </View>
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
