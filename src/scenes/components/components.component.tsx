import React from 'react';
import {  TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { MenuIcon } from '../../components/icons';

import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export const ComponentsScreen = ({ navigation }): React.ReactElement => {


  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

  return (
    <>
    <TopNavigation
        title='Aayush Covid Care'
        leftControl={renderDrawerAction()}
      />
     <View style={styles.container}>
    <WebView
       source={{ html: require('./ExtraaFeed.js')() }}
      originWhitelist={['*']}
    />
  </View>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    margin:20
  }
});
