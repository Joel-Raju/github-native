const React = require('React');

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }

    handleChange()
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          value = {this.state.username}
          onchange={this.handleChange.bind(this)}
        />
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
