import React, { Component } from 'react';
import {
	Text,
	View,
	Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PhotoView from 'react-native-photo-view';


class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Campus Map',
  };
  render() {
    return (
      <PhotoView
  source={require('./img/check.png')}
  minimumZoomScale={0.5}
  maximumZoomScale={3}
  style={{width: 370, height: 400}} />
    );
  }
}

export default MapScreen;
