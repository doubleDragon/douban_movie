import React from 'react';
import {connect} from 'react-redux';
import Login from "./presenter";

import {loginAction} from "../../redux/user";
import {show} from '../../util/ToastUtils';

const handleLogin = (dispatch, username, pwd) => {
    if (!username) {
        show('用户名不能为空');
        return
    }
    if (!pwd) {
        show('密码不能为空');
        return
    }
    dispatch(loginAction(username, pwd));
};

const mapStateToProps = (state) => {
    let finish = false;
    if(state.user && state.user.username && state.user.pwd) {
        finish = true;
    }
    return {
        finish
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onActionBack: () => {ownProps.navigator.dismissModal()},
        onActionLogin: (username, text) => {handleLogin(dispatch, username, text)},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);