import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  NativeEventEmitter,
  NativeModules,
  Platform,
  PermissionsAndroid,
  AppState,
  FlatList,
} from 'react-native';

import { Button, ListItem, Text, } from '@ui-kitten/components';

import BleManager from 'react-native-ble-manager';


const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);



const BleCard = () => {


  const [scanning, setScanning] = useState<boolean>(false);


  const [isFake, setisFake] = useState<boolean>(false);

  const [appState, setAppState] = useState<string>('');
  const [peripherals, setperipherals] = useState(new Map())


  useEffect(() => {

 
    AppState.addEventListener('change', handleAppStateChange);
    BleManager.start({showAlert: false});


    BleManager.scan([], 15);

    BleManager.enableBluetooth()
    .then(() => {
      BleManager.start().then(() => {
        // Success code
           console.log("Scan start if enable");
         });
         
  
    })
    .catch((error) => {
       console.log("The user refuse to enable bluetooth");
    });

    handlerDiscover()
      

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
        if (result) {
          console.log("Permission is OK");
        } else {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
            if (result) {
              console.log("User accept");
            } else {
              console.log("User refuse");
            }
          });
        }
      });
    }

    
    

    return () => {
      bleManagerEmitter.removeListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral)
      bleManagerEmitter.removeListener('BleManagerStopScan', handleStopScan);
      bleManagerEmitter.removeListener('BleManagerDisconnectPeripheral', handleDisconnectedPeripheral);
      bleManagerEmitter.removeListener('BleManagerDidUpdateValueForCharacteristic', handleUpdateValueForCharacteristic);
    }
  }, [])

  const handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
      BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
        console.log('Connected peripherals: ' + peripheralsArray.length);
      });
    }
    setAppState(nextAppState)
  }


  const handlerDiscover = () => {
    

    bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral)
    bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan);
    bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', handleDisconnectedPeripheral);
    bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleUpdateValueForCharacteristic);
  }

  const handleDisconnectedPeripheral = (data) => {
    //let peripherals = peripherals;
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      setperipherals(peripherals)

    }
    console.log('Disconnected from ' + data.peripheral);
  }

  const handleUpdateValueForCharacteristic = (data) => {
    console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
  }

  const handleStopScan = () => {
    console.log('Scan is stopped handleStopScan');
    setScanning(false)

  }

  const startScan = () => {
   // LocalNotification()
    if (!scanning) {
      BleManager.enableBluetooth()
        .then(() => {
          BleManager.scan([], 7, true).then((results) => {
            setScanning(true)
            
            setTimeout(function(){ setisFake(true) }, 5000);
          }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
          });
        })
        .catch((error) => {
           console.log("The user refuse to enable bluetooth");
        });
      }
  }


  const handleDiscoverPeripheral = (peripheral) => {
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripherals.set(peripheral.id, peripheral);
    setperipherals(peripherals)
  }

  const test = (peripheral) => {
    if (peripheral) {
      if (peripheral.connected) {
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id).then(() => {
          let p = peripherals.get(peripheral.id);
          if (p) {
            p.connected = true;
            peripherals.set(peripheral.id, p);
            setperipherals(peripherals)
          }
          console.log('Connected to ' + peripheral.id);


          setTimeout(() => {
            BleManager.retrieveServices(peripheral.id).then((peripheralInfo) => {
               var service = '13333333-3333-3333-3333-333333333337';
              var bakeCharacteristic = '13333333-3333-3333-3333-333333330003';
              var crustCharacteristic = '13333333-3333-3333-3333-333333330001';

              setTimeout(() => {
                BleManager.startNotification(peripheral.id, service, bakeCharacteristic).then(() => {
                  console.log('Started notification on ' + peripheral.id);
                  setTimeout(() => {
                    BleManager.write(peripheral.id, service, crustCharacteristic, [0]).then(() => {
                      console.log('Writed NORMAL crust');
                      BleManager.write(peripheral.id, service, bakeCharacteristic, [1, 95]).then(() => {
                        console.log('Writed 351 temperature, the pizza should be BAKED');

                      });
                    });

                  }, 500);
                }).catch((error) => {
                  console.log('Notification error', error);
                });
              }, 200);
            });

          }, 900);
        }).catch((error) => {
          console.log('Connection error', error);
        });
      }
    }
  }

  const renderItem = (item) => (
    <TouchableHighlight onPress={() => test(item)}>
      <ListItem
      title={`${item.name}`}
      description={`${item.id}`}
    />
    </TouchableHighlight>
  );


  let list = Array.from(peripherals.values());
   if(list.length ==  0 && isFake){
    list = [{name:'unknown',rssi:'89',id:'12:98:ad:po:lk:a2'},{name:'Apple Phone',rssi:'-98',id:'33:98:ad:po:lk:a2'}]
  } 
  const btnScanTitle = 'Manual Scanning (' + (scanning ? 'on' : 'off') + ')';

  return (
      <View style={styles.container}>

        <Button
          onPress={() => startScan()}
          size='small'
        >
          {btnScanTitle}
        </Button>

        {(list.length == 0) &&
          <View style={{ flex: 1, margin: 20 }}>
            <Text style={{ textAlign: 'center' }}>No Device Found</Text>
          </View>
        }
        <FlatList
          data={list}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
  );
};


export default BleCard;


const styles = StyleSheet.create({
  container: {
    margin: 20
  }
  
});