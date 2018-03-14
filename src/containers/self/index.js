import React from 'react';
import {View, Text} from 'react-native';
import SelfHeader from "./components/SelfHeader";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";



export default class SelfComponent extends React.Component {

    handleLogin = () => {
        console.log('login click');

        this.props.navigator.showModal({
            screen: 'login',
            navigatorStyle: {
                navBarHidden: true
            },
        });
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <SelfHeader handleLogin={this.handleLogin}/>

                <ScrollableTabView
                    style={{flex: 1}}
                    initialPage={0}
                    tabBarInactiveTextColor='#999999'
                    tabBarActiveTextColor='#494949'
                    tabBarUnderlineStyle={{height: 1, backgroundColor: '#494949'}}
                    renderTabBar={() => <DefaultTabBar/>}
                >
                    <Text tabLabel='讨论'>讨论</Text>
                    <Text tabLabel='想看'>想看</Text>
                    <Text tabLabel='在看'>在看</Text>
                    <Text tabLabel='看过'>看过</Text>
                    <Text tabLabel='影评'>影评</Text>
                    <Text tabLabel='影人'>影人</Text>
                </ScrollableTabView>
            </View>
        )
    }
}