import React from 'react';
import { ListRenderItemInfo, StyleSheet, YellowBox } from 'react-native';
import { Card, CardElement, List, ListElement, ListProps, Text } from '@ui-kitten/components';
import { LayoutItem } from '../model/layout-item.model';

export interface LayoutListProps extends Omit<ListProps, 'renderItem'> {
    // data: LayoutItem[];
    // onItemPress: (index: number) => void;
    x: string;
    xyz:string;
}

export type LayoutListElement = React.ReactElement<LayoutListProps>;

export const ZoneCard = (props: LayoutListProps) => {

    const { xyz } = props;
    const x = "jjjj";
    return (
        <Text style={styles.rahul}>Hello0000 Rahul! ZONE1223 {x} {xyz}</Text>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    itemContainer: {
        marginVertical: 8,
        marginHorizontal: 8,
    },
    itemDescription: {
        marginTop: 4,
    },
    rahul:{
        backgroundColor : 'yellow'
    }
});
