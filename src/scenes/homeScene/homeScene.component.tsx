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



import { BleCard } from './bleCard';

import {ZoneCard} from '../../components/zoneCard';

export const homeScreen = ({ navigation }): React.ReactElement => {

  const [restartModalVisible, setRestartModalVisible] = React.useState<boolean>(true);

  React.useEffect(() => {
    
    // setRestartModalVisible(!restartModalVisible);
  });


  const exitFromApplication = (): void => {
    BackHandler.exitApp()
  }

  const toggleRestartModal = (): void => {
    setRestartModalVisible(!restartModalVisible);
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
      
      <BleCard 
      />
      <RestartAppModal
        visible={restartModalVisible}
        ifPressNo={exitFromApplication}
        ifPressYes={toggleRestartModal}
      />
      <Divider/>
      <Text>
        "Hello First Page to start work"
      </Text>
      <ZoneCard xyz="rahul"/>
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
