import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    },
    line: {
        backgroundColor: '#d9d9d9', height:1, width: 20
    },
    text: {
        color: '#d9d9d9', fontSize: 10, marginLeft: 15, marginRight: 15
    }
});

export default class SelfFooter extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.line}/>
                <Text style={styles.text}>THE END</Text>
                <View style={styles.line}/>
            </View>
        )
    }
}