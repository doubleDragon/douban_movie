import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import Search from "./components/FounSearch";

import FoundMovie from './components/FoundMovie';
import FoundTv from './components/FoundTv';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default class FoundContainer extends React.Component {

    render() {
        return (
            <View style={styles.root}>
                <Search/>

                <ScrollableTabView
                    style={{flex: 1}}
                    initialPage={0}
                    tabBarInactiveTextColor='#9b9b9b'
                    tabBarActiveTextColor='#494949'
                    tabBarUnderlineStyle={{height: 1, backgroundColor: '#494949'}}
                    renderTabBar={() => <DefaultTabBar/>}
                >

                    <FoundMovie tabLabel='电影'
                    />
                    <FoundTv tabLabel='电视'
                    />
                </ScrollableTabView>

            </View>
        )
    }
}