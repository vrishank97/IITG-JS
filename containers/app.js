import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  WebView,
  Linking,
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
      <View>
        <Button
          onPress={() => navigate('Map')}
          title="Campus Map"
        />
        <Button
          onPress={() => navigate('Webmail')}
          title="Webmail"
        />
        <Button
          onPress={() => navigate('Map')}
          title="Time Table"
        />
        <Button
          onPress={() => navigate('Map')}
          title="Bus Timings"
        />

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
});



AppRegistry.registerComponent('IITG', () => IITG);

export default IITG;
