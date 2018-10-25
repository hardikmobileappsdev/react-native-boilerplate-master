/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-material-ui';
import { NavigationActions } from 'react-navigation';

const img = require('../assets/BlurredImage.png');

class Main extends Component {
    static navigationOptions = {
      header: null,
    };

    constructor(props) {
      super(props);
      this.state = {
        userName: 'test',
        password: 'testtest',
      };
    }

    loginPress = () => {
      const { userName, password } = this.state;


      if (!userName || !password) {
        alert('All fiels are mendotary!');
      } else if (userName.length < 4) {
        alert('UserName must be atlest 4 Character!');
      } else if (password.length < 8) {
        alert('Password must be atlest 8 Character!');
      } else {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
        // this.props.navigation.navigate('Home');
      }
    };

    render() {
      const { userName, password } = this.state;
      return (
        <View style={styles.container}>
          <Image source={img} style={styles.backgroundImage} />

          <View style={{ width: '90%' }}>
            <TextField
              label="UserName"
              titleTextStyle={{ color: 'white' }}
              value={userName}
              textColor="#FFFFFF"
              baseColor="#FFFFFF"
              tintColor="#FFFFFF"
              error={userName && userName.length >= 4 ? null : 'UserName should be not null'}
              inputContainerStyle={{ width: 375 - 50 }}
              onChangeText={user => this.setState({ userName: user })}
            />
          </View>

          <View style={{ width: '90%' }}>
            <TextField
              label="Password"
              titleTextStyle={{ color: 'white' }}
              value={password}
              textColor="#FFFFFF"
              baseColor="#FFFFFF"
              tintColor="#FFFFFF"
              secureTextEntry
              error={password && password.length >= 8 ? null : 'Password should be not null'}
              onChangeText={pass => this.setState({ password: pass })}
            />
          </View>

          <View style={{ width: '50%', marginTop: 15 }}>
            <Button raised primary text="Login" onPress={() => this.loginPress()} />
          </View>

        </View>
      );
    }
}

export default Main;

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
