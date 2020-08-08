import React from 'react';
import { ListRenderItemInfo, StyleSheet, YellowBox, View, BackHandler } from 'react-native';
import {Button, Modal, Card, CardElement, Layout, List, ListElement, ListProps, Text } from '@ui-kitten/components';
import { LayoutItem } from '../model/layout-item.model';
import { RestartAppModal } from './restartAppModal';
import {HideModal} from './hideModal';
import PushNotification from 'react-native-push-notification';
import {ListCard} from './listCard';

export interface LayoutListProps extends Omit<ListProps, 'renderItem'> {
    // data: LayoutItem[];
    // onItemPress: (index: number) => void;
    x: string;
    val:string;
}

export type LayoutListElement = React.ReactElement<LayoutListProps>;

export const NewCard = (props: LayoutListProps) => {

    // const { val } = props;
    // const x = "dfdgdgd";
    const [restartModalVisible, setRestartModalVisible] = React.useState<boolean>(false);
    const [hideModalDisplay, setHideModalDisplay] = React.useState<boolean>(false);
    const [listCardDisplay, setListCardDisplay] = React.useState<boolean>(true);

  const exitFromApplication = (): void => {
    BackHandler.exitApp()
  }
 const alertNotification = (): void =>{
   console.log("inside");
//   PushNotification.localNotification({
//     autoCancel: true,
//     bigText:
//       'This is local notification demo in React Native app. Only shown, when expanded.',
//     subText: 'Local Notification Demo',
//     title: 'Local Notification Title',
//     message: 'Expand me to see more',
//     vibrate: true,
//     vibration: 300,
//     playSound: true,
//     soundName: 'default',
//     actions: '["Yes", "No"]'
//   })
}
  const toggleRestartModal = (): void => {
    setRestartModalVisible(!restartModalVisible);//settimeout logic
    setHideModalDisplay(true);
  }
    return (
       <Layout style={styles.container} level='1'>
        {/* <Text style={styles.trisha}>Welcome to Water Drinker {x} {val}</Text> */}
       
        
      {!hideModalDisplay ? (
 <Button onPress={() => setRestartModalVisible(true)}>
        Water Drinker Alert!
      </Button>
 ) : (
     <div>
<Button onPress={() => alertNotification()}>
Notification
</Button>
<ListCard visible={listCardDisplay}/>
</div>
 )}
    
      <RestartAppModal
        visible={restartModalVisible}
        ifPressNo={exitFromApplication}
        ifPressYes={toggleRestartModal}
      />
        </Layout>
    );
};

const styles = StyleSheet.create({
     container: {
    minHeight: 192,
  },
    itemContainer: {
        marginVertical: 8,
        marginHorizontal: 8,
    },
    itemDescription: {
        marginTop: 4,
    },
     backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
    trisha:{
        color : 'red',
        float:'right'
    }
});
