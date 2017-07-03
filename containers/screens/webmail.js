import React, { Component } from 'react';
import {
	Text,
	View,
	processColor,
	WebView,
	Linking
} from 'react-native';

class WebmailScreen extends React.Component {
    render() {
    const uri = 'https://goo.gl/xwPGBt';
    return (
        <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
             Linking.openURL(event.url);
          }}}/>
    	);
	}
}


export default WebmailScreen;