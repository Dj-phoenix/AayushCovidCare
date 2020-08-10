import React from 'react';
import { StyleSheet,BackHandler } from 'react-native';
import {
  Divider,
  TopNavigation,
  Text,
  TopNavigationAction
} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';

import { MenuIcon } from '../../components/icons';
import { RestartAppModal } from './restart-app-modal.component';



import { BleCard,BleCardResult } from './bleCard';

import {ZoneCard} from '../../components/zoneCard';

export const homeScreen = ({ navigation }): React.ReactElement => {

  const [restartModalVisible, setRestartModalVisible] = React.useState<boolean>(true);


  const [bleCardSearching, setbleCardSearching] = React.useState<boolean>(false);


  React.useEffect(() => {
   
  }, []);

  const exitFromApplication = (): void => {
    BackHandler.exitApp()
  }

  const toggleRestartModal = () => {
    setRestartModalVisible(!restartModalVisible);
    const timer = setTimeout(() => 
    setbleCardSearching(!bleCardSearching)
    , 4000)
     return () => clearTimeout(timer);
  }
  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={navigation.toggleDrawer}
    />
  );

 

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='Aayush Covid Care'
        leftControl={renderDrawerAction()}
      />
      {!bleCardSearching ? (
        <BleCard />
      ) : (
        <BleCardResult />
      )}

     <RestartAppModal
        visible={restartModalVisible}
        ifPressNo={exitFromApplication}
        ifPressYes={toggleRestartModal}
      />
      <Divider/>
    
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 8,
  },
  item: {
    margin: 8,
  }
});
