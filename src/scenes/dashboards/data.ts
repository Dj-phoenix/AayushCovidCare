import { LayoutItem } from '../../model/layout-item.model';

export interface DashboardData extends LayoutItem {
  route: string;
}

export const data: DashboardData[] = [
  {
    title: 'Trainings',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-training-1.jpg'),
    route: 'Trainings1',
  }
];
