/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const img = require('../assets/BlurredImage.png');

export default class Home extends Component {
    static navigationOptions = {
      header: null,
    };

    render() {
      return (
        <View style={styles.container}>

          <Image source={img} style={styles.backgroundImage} />

          <Text style={{ color: '#FFFFFF' }}>WelCome</Text>

        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
  },
});
