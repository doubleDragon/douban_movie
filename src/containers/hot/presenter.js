import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ScrollableTabView, {DefaultTabBar,} from 'react-native-scrollable-tab-view';
import PropTypes from 'prop-types';

import HotSearch from './components/HotSearch';
import HotNow from './components/HotNow';
import HotNext from './components/HotNext';

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
        paddingLeft: 15,
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
        marginLeft: 5
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
});

export default class Hot extends React.Component {

    componentDidMount() {
        this.props.handleNowRefresh();
        this.props.handleNextRefresh();
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.top}>
                    <Text style={styles.location}>北京</Text>
                    <Image source={require('../../img/ic_arrow_down.png')} style={styles.arrow}/>

                    <HotSearch />
                </View>

                <ScrollableTabView
                    style={{flex: 1}}
                    initialPage={0}
                    tabBarInactiveTextColor='#9b9b9b'
                    tabBarActiveTextColor='#494949'
                    tabBarUnderlineStyle={{height: 1, backgroundColor: '#494949'}}
                    renderTabBar={() => <DefaultTabBar/>}
                >

                    <HotNow tabLabel='正在热映'
                            onEndReached={this.props.handleNowLoaded}
                            onRefresh={this.props.handleNowRefresh}
                            isFetching={this.props.nowItem.isFetching}
                            items={this.props.nowItem.items}
                            error={this.props.nowItem.error}/>
                    <HotNext tabLabel='即将上映'
                             onEndReached={this.props.handleNextLoaded}
                             onRefresh={this.props.handleNextRefresh}
                             isFetching={this.props.nextItem.isFetching}
                             items={this.props.nextItem.items}
                             error={this.props.nextItem.error}/>
                </ScrollableTabView>

            </View>
        )
    }
}

Hot.propTypes = {
    handleNowLoaded: PropTypes.func.isRequired,
    handleNowRefresh: PropTypes.func.isRequired,
    nowItem: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        items:  PropTypes.array,
        error:  PropTypes.string,
    }),

    handleNextLoaded: PropTypes.func.isRequired,
    handleNextRefresh: PropTypes.func.isRequired,
    nextItem: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        items:  PropTypes.array,
        error:  PropTypes.string,
    }),
};