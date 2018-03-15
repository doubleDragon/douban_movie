import React from 'react';
import {connect} from 'react-redux';

import SelfComponent from './presenter';


const mapStateToProps = (state) => {
    let name = '请登录';
    if(state.user.username) {
        name = state.user.username
    }
    return {
        name
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SelfComponent)