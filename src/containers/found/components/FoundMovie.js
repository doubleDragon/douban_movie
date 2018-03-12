import React from 'react';
import {View, Text, SectionList, FlatList} from 'react-native';

import FoundNavContainer from "./FoundNavContainer";
import FoundPopHeader from "./FoundPopHeader";
import FoundTopHeader from "./FoundTopHeader";
import FoundPopItem from "./FoundPopItem";
import FoundTopItem from "./FoundTopItem";


const sections = [

    {
        key: 'nav',
        renderItem: ({item}) => <FoundNavContainer items={item}/>,
        data: [
            [
                {
                    image: require('../../../img/ic_movie_left.png'),
                    title: '找电影',
                    des: '治愈/大陆/剧情',
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
        key: 'pop',
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
        key: 'top',
        renderItem: ({item}) => <FoundTopItem stars={item.stars} image={item.image}/>,
        data: [
            {
                image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3178335615,1048423629&fm=27&gp=0.jpg',
                stars: 5
            },
            {
                stars: 4,
                image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3178335615,1048423629&fm=27&gp=0.jpg',
            },
            {
                stars: 3,
                image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3178335615,1048423629&fm=27&gp=0.jpg',
            },
            {
                stars: 2,
                image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3178335615,1048423629&fm=27&gp=0.jpg',
            },
            {
                stars: 1,
                image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3178335615,1048423629&fm=27&gp=0.jpg',
            },
        ]
    }
];


export default class FoundMovie extends React.Component {

    _renderSectionHeader = (item) => {
        switch (item.section.key) {
            case 'pop':
                return <FoundPopHeader/>;
            case 'top':
                return <FoundTopHeader/>;
            case 'nav':
            default:
                return null;
        }
    };

    _renderSectionSeparator = (section) => {
        if(!section.leadingSection && section.leadingItem && section.trailingSection &&
            section.trailingSection.key === 'pop') {
            //nav item 和pop header之间的分割线
            return (
                <View style={{height: 24, backgroundColor: 'white'}}/>
            )
        }

        if(section.leadingSection && section.trailingSection &&
            section.section.key === 'pop') {


            if(!section.leadingItem) {
                //pop header 和pop item之间的分割线
                return <View style={{height: 16, backgroundColor: 'white'}}/>;
            } else {
                //pop item和top header之间的分割线
                return <View style={{height: 25, backgroundColor: 'white'}}/>;
            }
        }

        if(section.leadingSection && !section.trailingSection && !section.leadingItem) {
            //top header和top item之间的分割线
            return <View style={{height: 7, backgroundColor: 'white'}}/>;
        }

        return null;
    };

    _ItemSeparatorComponent = () => {
        return (
            <View style={{height: 7, backgroundColor: 'white'}}/>
        )
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