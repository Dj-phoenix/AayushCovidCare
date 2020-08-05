import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { homeScreen } from '../scenes/homeScene/homeScene.component';

const Stack = createStackNavigator();

export const LayoutsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Themes' component={homeScreen}/>
  </Stack.Navigator>
);

