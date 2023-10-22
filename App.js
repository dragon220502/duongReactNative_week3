
import *as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FirstHome from './components/FirstHome';
import App1a from './components/App1a';
import App1b from './components/App1b';
import App2a from './components/App2a';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <App2a />  
      </View>
    );
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
