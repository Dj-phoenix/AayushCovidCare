import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ZoneCard  from '../scenes/zones/zoneCard';

const Stack = createStackNavigator();

export const MyHomeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Home' component={ZoneCard}/>
  </Stack.Navigator>
);
