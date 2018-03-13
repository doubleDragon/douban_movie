import React from 'react';
import {View, Text, SectionList, FlatList} from 'react-native';
import FoundNavContainer from "./FoundNavContainer";
import FoundPopItem from "./FoundPopItem";
import FoundPopHeader from "./FoundPopHeader";

const sections = [
    {
        key: 'nav',
        renderItem: ({item}) => <FoundNavContainer items={item}/>,
        data: [
            [
                {
                    image: require('../../../img/ic_movie_left.png'),
                    title: '找电视',
                    des: '动画/韩剧/日剧',
                    handleClick: () => {
                        console.log('click item left');
                    }
                },
                {
                    image: require('../../../img/ic_movie_right.png'),
                    title: '我的影视',
                    des: '未登录',
                    handleClick: () => {
                        console.log('click item right');
                    }
                },
            ]
        ]
    },
    {
        key: 'pop0',
        renderItem: ({item}) => {
            const count = item.length;
            return (
                <FlatList
                    data={item}
                    initialNumToRender={4}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return <FoundPopItem
                            title={item.title}
                            image={item.image}
                            stars={item.stars}
                            average={item.average}
                            index={index}
                            count={count}
                        />
                    }}
                />
            );
        },
        data: [
            [
                {
                    title: '古墓丽影',
                    image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512717509.jpg',
                    stars: 3,
                    average: '3.5',
                },
                {
                    title: '环太平洋',
                    image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512983475.jpg',
                    stars: 4,
                    average: '4.0',
                },
                {
                    title: '十七后',
                    image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514909553.jpg',
                    stars: 5,
                    average: '8.5',
                },
                {
                    title: '十七后喝喝',
                    image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514909553.jpg',
                    stars: 1,
                    average: '7.5',
                },
            ]
        ]
    },
    {
        key: 'pop1',
        renderItem: ({item}) => {
            const count = item.length;
            return (
                <FlatList
                    data={item}
                    initialNumToRender={4}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return <FoundPopItem
                            title={item.title}
                            image={item.image}
                            stars={item.stars}
                            average={item.average}
                            index={index}
                            count={count}
                        />
                    }}
                />
            );
        },
        data: [
            [
                {
                    title: '古墓丽影',
                    image: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512717509.jpg',
                    stars: 3,
                    average: '3.5',
                },
                {
                    title: '环太平洋',
                    image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512983475.jpg',
                    stars: 4,
                    average: '4.0',
                },
                {
                    title: '十七后',
                    image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514909553.jpg',
                    stars: 5,
                    average: '8.5',
                },
                {
                    title: '十七后喝喝',
                    image: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514909553.jpg',
                    stars: 1,
                    average: '7.5',
                },
            ]
        ]
    },
];

export default class FoundTv extends React.Component {

    _renderSectionSeparator = (section) => {
        if(!section.leadingSection && !section.leadingItem) {
            return null;
        }

        if(!section.trailingSection && !section.trailingItem) {
            return null;
        }

        return (
            <View style={{height: 20, backgroundColor: 'white'}}/>
        )
    };

    _ItemSeparatorComponent = () => {
        return null
    };

    _renderSectionHeader = (item) => {
        switch (item.section.key) {
            case 'pop0':
                return <FoundPopHeader title={'近期热门国产剧'} count={'全部50'}/>;
            case 'pop1':
                return <FoundPopHeader title={'近期热门综艺'} count={'全部99+'}/>;
            case 'nav':
            default:
                return null;
        }
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <SectionList
                    sections={sections}
                    SectionSeparatorComponent={this._renderSectionSeparator}
                    ItemSeparatorComponent={this._ItemSeparatorComponent}
                    keyExtractor={(item, index) => index.toString()}
                    renderSectionHeader={this._renderSectionHeader}
                />
            </View>
        )
    }
}