
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  WebView,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import WebmailScreen from './screens/webmail'
import MapScreen from './screens/map'
//import TimeTableScreen from './screens/timetable'
//import BusScreen from './screens/bus'


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Hello IITG',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.flex_column }>
      <View style={ styles.flex_row }>
        <TouchableOpacity
          onPress={() => navigate('Map')}>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Campus Map</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Webmail')}>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Webmail</Text>
          </View>
          </TouchableOpacity>
      </View>
      <View style={ styles.flex_row }>
        <TouchableOpacity
          onPress={() => navigate('Map')}>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Time Table</Text>
          </View>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Map')}>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Bus Timings</Text>
          </View>
          </TouchableOpacity>
      </View>
      <View style={ styles.flex_row }>
        <TouchableOpacity
          onPress={() => navigate('Map')}>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Taxi Services</Text>
          </View>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Map')}>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Internet Settings</Text>
          </View>
          </TouchableOpacity>
      </View>
      <View style={ styles.flex_row }>
        <TouchableOpacity
          onPress={() => navigate('Map')}>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Places</Text>
          </View>
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Map')}>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>Gymkhana</Text>
          </View>
          </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const IITG = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen },
  Webmail: { screen: WebmailScreen },
//  TimeTable: { screen: TimeTableScreen },
//  Bus: { screen: BusScreen },

});

const styles = StyleSheet.create({
  bigblue: {
    fontSize: 30,
  },
  flex_column: {
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center'
  },
  flex_row: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  button: {
    borderRadius:15,
    marginRight:40,
    marginLeft:40,
    padding:20,
    marginBottom: 30,
    width: 150,
    //height:100,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    //padding: 20,
    color: 'white'
  }
});



AppRegistry.registerComponent('IITG', () => IITG);

export default IITG;
