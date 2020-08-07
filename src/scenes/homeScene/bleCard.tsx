import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Layout, Text } from '@ui-kitten/components';

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
  }
});