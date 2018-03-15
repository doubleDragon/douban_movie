import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelfEmpty from "./SelfEmpty";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    stickHeader: {
        height: 46, backgroundColor: '#f2f1ee', color: '#797877',
        fontSize: 12, fontWeight: '500',lineHeight: 46, paddingLeft: 15
    }
});

export default class SelfComment extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.stickHeader}>
                    0 篇
                </Text>

                <SelfEmpty/>
            </View>
        )
    }
}