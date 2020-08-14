import * as React from 'react';
import {  StyleSheet } from 'react-native';
import WebView from 'react-native-webview';


import { Layout, } from '@ui-kitten/components';
export default function TweetFeeds() {
  return (
    <Layout style={styles.container}>
      <WebView
        source={{ html: require('./Feeds.js')() }}
        originWhitelist={['*']}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
     flex:1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    margin:20
  }
});
