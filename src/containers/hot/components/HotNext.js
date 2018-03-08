import React from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';
import {PX1} from "../../../util/PixUtils";

import Tab from './HotNextTab';


const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#494949',
        borderBottomWidth: PX1,
        paddingLeft: 15,
        paddingRight: 15,
    }
});



export default class HotNext extends React.Component {

    render() {
        return (
            <View>
                <Tab />

            </View>
        )
    }
}