import React from 'react';

import {Text, View, Image, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        height: 35,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
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
                <View style={styles.box}>
                    <Image source={require('../../../img/ic_query_new.png')}/>
                    <Text style={styles.text}>电影 / 电视剧 / 影人</Text>
                </View>
            </View>
        )
    }
}