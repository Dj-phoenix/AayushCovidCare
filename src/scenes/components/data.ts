import React from 'react';
import { ImageStyle } from 'react-native';
import { ThemedIcon } from '../../components/themed-icon.component';
import {
  AssetTopNavigationDarkIcon,
  AssetTopNavigationIcon,
} from '../../components/icons';
import { MenuItem } from '../../model/menu-item.model';

export interface ComponentData extends MenuItem {
  route: string;
}

export const data: ComponentData[] = [
  {
    title: 'Test 2',
    route: 'testTab2',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetTopNavigationIcon, dark: AssetTopNavigationDarkIcon },
      );
    },
  }
];
