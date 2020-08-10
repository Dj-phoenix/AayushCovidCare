import React from 'react';
//import { StyleSheet, View } from 'react-native';
import { Card, Layout, Text, Button, Icon, List, ListItem } from '@ui-kitten/components';

import {
  RefreshControl, StyleSheet, SafeAreaView, View, ToastAndroid
} from 'react-native';
import AnimatedSVG from './AnimatedSvg'


const Header = (props) => (
  <View {...props}>
    <Text category='h5' style={styles.alignItems}>Blutooth Searching...</Text>
  </View>
);



export const BleCard = (props): React.ReactElement => {
  return (
    <>
      <Layout style={styles.topContainer}>
        <Card style={styles.card} header={Header}>
          <AnimatedSVG />
        </Card>
      </Layout>
    </>
  );
};

const initialData = new Array(6).fill({
  id:'123456',
  title: 'Rahul',
  description: 'Rishikesh, Uttarakhand',
})

export const BleCardResult = (props): React.ReactElement =>{

  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState(initialData);


  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (listData.length < 10) {
      try {
        let response = await fetch(
          'http://www.mocky.io/v2/5e3315753200008abe94d3d8?mocky-delay=2000ms',
        );
        let responseJson = await response.json();
        setListData(responseJson.result.concat(initialData));
        setRefreshing(false)
      } catch (error) {
        console.error(error);
      }
    }
    else{
      console.log('No more new data available')
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false)
    }
  }, [refreshing]);

  const renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  const renderItemIcon = (props) => (
    <Icon {...props} name='person'/>
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      keyExtractor={item => item.id}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
    <List
      style={styles.container}
      data={listData}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: .6
  },
  card: {
    flex: 1,
    margin: 2,
  },
  alignItems: {
    left: 90
  },
  container: {
    maxHeight: 192,
  }
});