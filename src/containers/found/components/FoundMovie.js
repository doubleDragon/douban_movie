import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {PX1} from '../../../util/PixUtils';

import FoundNavContainer from "./FoundNavContainer";

const styles = StyleSheet.create({

});

const navItems = [
    {
        image: require('../../../img/ic_movie_left.png'),
        title:'找电影',
        des: '治愈/大陆/剧情',
        handleClick: () => {
            console.log('click item left');
        }
    },
    {
        image: require('../../../img/ic_movie_right.png'),
        title:'我的影视',
        des: '未登录',
        handleClick: () => {
            console.log('click item right');
        }
    },
];

export default class FoundMovie extends React.Component {
    render() {
        return (
            <View>

                <FoundNavContainer items={navItems}/>

            </View>
        )
    }
}