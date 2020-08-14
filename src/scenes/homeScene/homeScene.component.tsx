import React from 'react';
import { StyleSheet ,KeyboardAvoidingView,SafeAreaView} from 'react-native';
import {
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components';

import { MenuIcon } from '../../components/icons';

import BleCard from './bleCard';

import TweetFeeds from './TweetFeeds';

export const homeScreen = ({ navigation }): React.ReactElement => {

  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );
  return (
    <>

    <SafeAreaView
      style={styles.safeArea}
    >
    <TopNavigation
        title='Aayush Covid Care'
        leftControl={renderDrawerAction()}
      />
      <BleCard />
      <TweetFeeds />


     </SafeAreaView>
     </>

  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
});
