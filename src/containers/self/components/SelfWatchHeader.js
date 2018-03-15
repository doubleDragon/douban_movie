import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 46,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f2f1ee',
        paddingLeft: 15, paddingRight:15,
    },
    label0: {
        color: '#797877',
        fontSize: 12
    },
    label1: {
        color: '#9b9b9b',
        fontSize: 12,
        borderRadius: 13,
        borderColor: '#cccccc',
        borderWidth: 1,
        paddingTop: 5, paddingBottom:5, paddingLeft:10, paddingRight:10
    },
    label2: {
        color: '#68cb78',
        fontSize: 12,
        fontWeight: '500',
        marginLeft:10
    }
});


export default class SelfWatchHeader extends React.Component {
    render() {

        return (
            <View style={styles.header}>
                <Text style={styles.label0}>{this.props.count} 部</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.label1}>全选</Text>
                    <Text style={styles.label2}>标签筛选</Text>
                </View>

            </View>
        )
    }
}
SelfWatchHeader.propTypes = {
    count: PropTypes.number.isRequired
};