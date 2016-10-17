import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Main from './app/components/Main' ;

export default class githubNative extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{ title: 'My Initial Scene', index: 0 }}
        renderScene = {(route, navigator) => {
          return <Main title = { route.title } />
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('githubNative', () => githubNative);
