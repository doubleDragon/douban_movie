import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 170,
        backgroundColor: '#5dc76d',
        justifyContent: 'center'
    },
    setting: {
        position: 'absolute',
        right: 15,
        top: 15,
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

                <Image source={require('../../../img/ic_setting.png')} style={styles.setting}/>

                <View style={styles.avatarBox}>
                    <Image source={require('../../../img/ic_avatar_default.png')} style={styles.avatar}/>
                    <Text style={styles.text}>请登录</Text>
                </View>

            </View>
        )
    }
}