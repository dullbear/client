import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';


export default class Tip extends Component {

  static defaultProps = {
    text: '点我哦'
  };

  static propTypes = {
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
  };

  render () {
    const {
      text
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.tipText}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 20,
    backgroundColor: 'white',
    marginLeft: 8,
    paddingLeft: 6,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 6,
    borderRadius: 18,
  },
  tipText: {
    fontSize: 14
  }
});