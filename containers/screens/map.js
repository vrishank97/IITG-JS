import React, { Component } from 'react';
import {
	Text,
	View,
	Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';



class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Campus Map',
  };
  render() {
    return (
      <Image source={require('./img/check.png')} style={{width: 370, height: 400}} />
    );
  }
}

export default MapScreen;