import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        height: 250
    },
    text: {
        color: '#494949', fontSize: 14, fontWeight: '800',
        textAlign: 'center'
    }
});

export default class SelfEmpty extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>暂无内容</Text>
            </View>
        )
    }
}