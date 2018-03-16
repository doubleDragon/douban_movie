import React from 'react';
import {View, Text} from 'react-native';
import SelfHeader from "./components/SelfHeader";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import SelfDiscuss from "./components/SelfDiscuss";
import SelfWatch from "./components/SelfWatch";
import SelfComment from "./components/SelfComment";
import SelfPerson from "./components/SelfPerson";
import PropTypes from 'prop-types';

export default class SelfComponent extends React.Component {

    handleLogin = () => {
        this.props.navigator.showModal({
            screen: 'login',
            navigatorStyle: {
                navBarHidden: true
            },
        });
    };

    handleSetting = () => {
        this.props.navigator.showModal({
            screen: 'setting',
            title: '设置'
        });
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <SelfHeader handleLogin={this.handleLogin} handleSetting={this.handleSetting} name={this.props.name}/>

                <ScrollableTabView
                    style={{flex: 1}}
                    initialPage={0}
                    tabBarInactiveTextColor='#999999'
                    tabBarActiveTextColor='#494949'
                    tabBarUnderlineStyle={{height: 1, backgroundColor: '#494949'}}
                    renderTabBar={() => <DefaultTabBar/>}
                >
                    <SelfDiscuss tabLabel='讨论'/>
                    <SelfWatch tabLabel='想看'/>
                    <SelfWatch tabLabel='在看'/>
                    <SelfWatch tabLabel='看过'/>
                    <SelfComment tabLabel='影评'/>
                    <SelfPerson tabLabel='影人'/>
                </ScrollableTabView>
            </View>
        )
    }
}

SelfComponent.propTypes = {
    name: PropTypes.string.isRequired
};