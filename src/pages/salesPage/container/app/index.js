import React, { Component } from 'react';
import { Provider } from "react-redux";
import { hashHistory } from "react-router";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Navigator,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Header from '@common/component/Header';
import Post from '../post';
import TextInputBar from '../textInputBar';

class App extends Component {
  render() {
    const {
      ...other
    } = this.props;
    return(
      <View style={styles.container}>
        <Header
          middleText="[求购][C++ primer/C++ primer plus/Effective C++]"
          rightText=""
        />
        <Post style={styles.postView}/>
        <TextInputBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
