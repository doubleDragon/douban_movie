import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white'
    },
    backBox: {
        padding: 15, width: 80
    },
    backImg: {
        width: 15,
        height: 15
    },
    title: {
        marginTop: 70, textAlign: 'center', fontSize: 30, color: '#42bd56'
    },
    usernameBox: {
        borderBottomColor: '#ccc', borderBottomWidth: 1,
        marginLeft: 24, marginRight: 24, marginTop: 50,
        paddingLeft: 8,
    },
    pwdBox: {
        borderBottomColor: '#ccc', borderBottomWidth: 1,
        marginLeft: 24, marginRight: 24, marginTop: 10,
        paddingLeft: 8,
    },
    submitBox: {
        backgroundColor: '#42bd56', height: 50, justifyContent: 'center',
        marginLeft: 20, marginRight: 20, marginTop: 20,
        borderRadius: 4
    },
    registerText:{
        flex: 1, textAlign: 'right', paddingRight: 17, color: '#42bd56', fontSize: 15
    },
    forgetText: {
        flex: 1, color: '#cccccc', fontSize: 15, paddingLeft: 17
    }
});

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: {
                focus: false,
                text: ''
            },
            pwd: {
                focus: false,
                text: ''
            }
        }
    }

    _handleFocus = (focus, key) => {
        this.setState(preState => ({
            [key]: {
                focus,
                text: preState[key].text
            }
        }));
    };

    _handleText = (text, key) => {
        this.setState(preState => ({
            [key]: {
                focus: preState[key].focus,
                text
            }
        }));
    };

    _handleSubmit = () => {
        const {username, pwd} = this.state;
        this.props.onActionLogin(username.text, pwd.text);
    };

    render() {
        if(this.props.finish) {
            this.props.onActionBack();
            return null;
        }

        const {username, pwd} = this.state;
        let usernameStyle = null;
        if (username.focus) {
            usernameStyle = {borderBottomColor: '#42bd56'}
        }

        let pwdStyle = null;
        if (pwd.focus) {
            pwdStyle = {borderBottomColor: '#42bd56'}
        }

        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this.props.onActionBack} style={styles.backBox}>
                    <Image source={require('../../img/ic_arrow_left.png')} style={styles.backImg}/>
                </TouchableOpacity>


                <Text style={styles.title}>
                    欢迎来到豆瓣
                </Text>


                <View style={[styles.usernameBox, usernameStyle]}>
                    <TextInput
                        numberOfLines={1}
                        editable={true}
                        placeholder={'手机号/邮箱'}
                        placeholderTextColor={'#cccccc'}
                        underlineColorAndroid="transparent"
                        onBlur={() => this._handleFocus(false, 'username')}
                        onFocus={() => this._handleFocus(true, 'username')}
                        onChangeText={(text) => this._handleText(text, 'username')}
                    />
                </View>


                <View style={[styles.pwdBox, pwdStyle]}>
                    <TextInput
                        numberOfLines={1}
                        editable={true}
                        placeholder={'密码'}
                        placeholderTextColor={'#cccccc'}
                        underlineColorAndroid="transparent"
                        onBlur={() => this._handleFocus(false, 'pwd')}
                        onFocus={() => this._handleFocus(true, 'pwd')}
                        onChangeText={(text) => this._handleText(text, 'pwd')}
                    />
                </View>

                <TouchableOpacity style={styles.submitBox} onPress={this._handleSubmit}>
                    <Text style={{color: 'white', textAlign: 'center'}}>登录</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
                    <Text style={styles.registerText} onPress={this.props.onActionRegister}>注册豆瓣</Text>
                    <View style={{width: 1, height: 15, backgroundColor: '#bcbcbc'}}/>
                    <Text style={styles.forgetText} onPress={this.props.onActionForget}>忘记密码</Text>
                </View>

            </View>
        )
    }
}

Login.propTyps = {
    onActionBack: PropTypes.func.isRequired,
    onActionLogin: PropTypes.func.isRequired,
    onActionRegister: PropTypes.func,
    onActionForget: PropTypes.func,
    finish: PropTypes.bool
};
