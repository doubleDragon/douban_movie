import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 170,
        backgroundColor: '#5dc76d',
        justifyContent: 'center'
    },
    settingBox: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    setting: {
        width: 20,
        height: 20
    },
    avatarBox: {
        height: 71,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
    },
    avatar: {
        height: 71,
        width: 71
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
        color: 'white',
        marginLeft:20
    }
});

export default class SelfHeader extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this.props.handleSetting} style={styles.settingBox}>
                    <Image source={require('../../../img/ic_setting.png')} style={styles.setting}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.avatarBox} onPress={this.props.handleLogin}>
                    <Image source={require('../../../img/ic_avatar_default.png')} style={styles.avatar}/>
                    <Text style={styles.text}>{this.props.name}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


SelfHeader.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleSetting: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};