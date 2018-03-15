import React from 'react';
import {View, FlatList} from 'react-native';
import SelfWatchHeader from "./SelfWatchHeader";
import SelfEmpty from "./SelfEmpty";
import SelfFooter from "./SelfFooter";
import SelfWatchItem from "./SelfWatchItem";

const image = 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.webp';

const data = [
    {
        title: '大坏护理的故事',
        image,
        time:'2018-03-15',
        stars: 3,
        average: '9.1',
        director: '瑞恩·库格勒',
        casts: '查德维克·博斯曼/露皮塔·尼永奥'
    },
    {
        title: '水型物语',
        image,
        time:'2018-03-15',
        stars: 4,
        average: '7.3',
        director: '瑞恩·库格勒',
        casts: '查德维克·博斯曼/露皮塔·尼永奥'
    },
    {
        title: '大坏护理的故事',
        image,
        time:'2018-03-15',
        stars: 3,
        average: '9.1',
        director: '瑞恩·库格勒',
        casts: '查德维克·博斯曼/露皮塔·尼永奥'
    },
];

export default class SelfWatch extends React.Component {

    _renderItem = ({item}) => {
        return (
            <SelfWatchItem
                title={item.title}
                image={item.image}
                time={item.time}
                stars={item.stars}
                average={item.average}
                director={item.director}
                casts={item.casts}
            />
        );
    };

    render() {
        return (
            <View style={{paddingBottom: 48}}>

                <SelfWatchHeader count={data.length}/>

                <FlatList
                    data={data}
                    getItemLayout={(data, index) => ({length: 115, offset: 115 * index, index})}
                    keyExtractor={(item, index) => index.toString()}
                    ListEmptyComponent={() => <SelfEmpty />}
                    ListFooterComponent={() => <SelfFooter />}
                    ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#e4e4e4'}}/>}
                    renderItem={this._renderItem}

                />
            </View>
        )
    }
}