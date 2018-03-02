import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import HotNowContainer from './now';
import HotNext from './next';


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft:15,
        paddingRight: 15,
    },
    location: {
        textAlign: 'center',
        color: '#494949',
        fontWeight: '500'
    },
    arrow: {
        width: 15,
        height: 15,
        marginLeft:5
    },
    searchBox: {
        flexDirection: 'row',
        flex: 1,
        height: 35,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:8,
        borderRadius: 5
    },
    searchText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#9b9b9b'
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
});

export default class Hot extends React.Component {

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.top}>
                    <Text style={styles.location}>北京</Text>
                    <Image source={require('../../img/ic_arrow_down.png')} style={styles.arrow}/>

                    <View style={styles.searchBox}>
                        <Image source={require('../../img/ic_query_new.png')}/>
                        <Text style={styles.searchText}>电影 / 电视剧 / 影人</Text>
                    </View>
                </View>

                <ScrollableTabView
                    style={{flex: 1}}
                    initialPage={0}
                    tabBarInactiveTextColor='#9b9b9b'
                    tabBarActiveTextColor='#494949'
                    tabBarUnderlineStyle={{height:1, backgroundColor: '#494949'}}
                    renderTabBar={() => <ScrollableTabBar />}
                >

                    <HotNowContainer tabLabel='正在热映'/>
                    <HotNext tabLabel='即将上映'/>
                </ScrollableTabView>

            </View>
        )
    }
}