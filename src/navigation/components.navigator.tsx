import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ComponentsScreen } from '../scenes/components/components.component';

import { TooltipScreen } from '../scenes/components/tooltip/tooltip.component';
import { TopNavigationScreen } from '../scenes/components/top-navigation/top-navigation.component';

const Stack = createStackNavigator();

export const ComponentsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Components' component={ComponentsScreen}/>
   
    <Stack.Screen name='Tooltip' component={TooltipScreen}/>
    <Stack.Screen name='testTab2' component={TopNavigationScreen}/>
  </Stack.Navigator>
);
