const React = require('React');

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>hello world</Text>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});
