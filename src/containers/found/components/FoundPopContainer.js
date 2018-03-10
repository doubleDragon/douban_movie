import React from 'react';
import {View, Text, FlatList} from 'react-native';
import FoundPopItem from "./FoundPopItem";
import FoundPopHeader from "./FoundPopHeader";


const data = [
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
];

export default class FoundPopContainer extends React.Component {

    _renderItem = ({item, index}) => {
        console.log('index: ', index);
        return (
            <FoundPopItem
                title={item.title}
                image={item.image}
                stars={item.stars}
                average={item.average}
                index={index}
                count={data.length}
            />
        );
    };

    render() {
        return (
            <View style={{marginTop: 24}}>
                <FoundPopHeader/>
                <FlatList
                    data={data}
                    initialNumToRender={4}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
}