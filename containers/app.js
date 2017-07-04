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
      <View style={ styles.flex_column }>
      <View style={ styles.flex_row }>
        <Button
          onPress={() => navigate('Map')}
          title="Campus Map"
        />
        <Button
          onPress={() => navigate('Webmail')}
          title="Webmail"
        />
      </View>
      <View style={ styles.flex_row }>
        <Button
          onPress={() => navigate('Map')}
          title="Time Table"
        />
        <Button
          onPress={() => navigate('Map')}
          title="Bus Timings"
        />
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
    justifyContent:'space-between',
    alignItems:'center'
  }
});



AppRegistry.registerComponent('IITG', () => IITG);

export default IITG;
