import React from 'react';
import {View} from 'react-native';
import Login from "./presenter";
import Toast from 'react-native-root-toast';

export default class LoginContainer extends React.Component {

    toast = null;

    constructor(props) {
        super(props);
    }

    _showToast = (text) => {
        this.toast = Toast.show(text, {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: false,
            animation: false,
            delay: 0,
        });

        this._hideToastDelay();
    };

    _hideToastDelay = (delay=500) => {
        setTimeout(() => {
            Toast.hide(this.toast)
        }, delay);
    };

    _handleBack = () => {
        this.props.navigator.dismissModal();
    };

    _handleLogin = (username, pwd) => {
        if (!username) {
            this._showToast('用户名不能为空');
            return
        }
        if (!pwd) {
            this._showToast('密码不能为空');
            return
        }

        this._showToast('login action done');
    };

    _handleRegister = () => {
        console.log('handle register');
    };

    _handleForget = () => {
        console.log('handle forget');
    };

    render() {
        return (
            <View style={{flex:1, backgroundColor: 'white'}}>
                <Login
                    onActionBack={this._handleBack}
                    onActionLogin={this._handleLogin}
                    onActionRegister={this._handleRegister}
                    onActionForget={this._handleForget}
                />
            </View>
        )
    }
}