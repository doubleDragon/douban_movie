import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        height: 72, paddingTop: 15, paddingLeft: 15, paddingRight: 15
    },
    title: {
        color: '#494949',fontWeight: '900', fontSize: 16
    },
    count: {
        marginTop: 8,
        fontSize: 10, color: '#9b9b9b'
    }
});

export default class SelfDiscussItem extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <Text style={styles.count}>{this.props.countIn}人参与，{this.props.countTopic}个话题</Text>
                    <Image source={require('../../../img/ic_etc.png')} style={{width: 15, height: 15}}/>
                </View>
            </View>
        )
    }
}

SelfDiscussItem.propTypes = {
    title: PropTypes.string.isRequired,
    countIn: PropTypes.number.isRequired,
    countTopic: PropTypes.number.isRequired,
};