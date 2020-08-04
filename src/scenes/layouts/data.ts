import React from 'react';
import { ImageStyle } from 'react-native';
import { ThemedIcon } from '../../components/themed-icon.component';
import {
  AssetDashboardsDarkIcon,
  AssetDashboardsIcon,
} from '../../components/icons';
import { MenuItem } from '../../model/menu-item.model';

export interface LayoutData extends MenuItem {
  route: string;
}

export const data: LayoutData[] = [
  {
    title: 'Test 1',
    route: 'Dashboards',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetDashboardsIcon, dark: AssetDashboardsDarkIcon },
      );
    },
  }
];
