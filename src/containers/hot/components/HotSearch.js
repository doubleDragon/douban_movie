import React from 'react';

import {Text, View, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        height: 35,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        borderRadius: 5
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        color: '#9b9b9b'
    },
});


export default class Search extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../../img/ic_query_new.png')}/>
                <Text style={styles.text}>电影 / 电视剧 / 影人</Text>
            </View>
        )
    }
}