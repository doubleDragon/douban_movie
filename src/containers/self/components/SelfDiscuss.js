import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SelfEmpty from "./SelfEmpty";
import SelfDiscussItem from "./SelfDiscussItem";
import SelfFooter from "./SelfFooter";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    stickHeader: {
        height: 46, backgroundColor: '#f2f1ee', color: '#797877',
        fontSize: 12, fontWeight: '500',lineHeight: 46, paddingLeft: 15
    }
});

const data = [
    {
        title: '红海行动',
        countIn: 100,
        countTopic: 50
    },
    {
        title: '黑豹',
        countIn: 17913,
        countTopic: 1791
    }
];


export default class SelfDiscuss extends React.Component {

    _renderItem = ({item}) => {
        return (
            <SelfDiscussItem
                title={item.title}
                countIn={item.countIn}
                countTopic={item.countTopic}
            />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.stickHeader}>
                    参与或浏览锅的谈论区将出现在这里
                </Text>

                <FlatList
                    data={data}
                    getItemLayout={(data, index) => ({length: 72, offset: 72 * index, index})}
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