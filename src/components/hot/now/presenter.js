import React from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';

import Item from './Item';

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default class HotNow extends React.Component {

    componentDidMount() {
        this.props.handleRefresh();
    }

    onRefresh = () => {
        console.log('onRefresh invoke');

        if (this.props.refreshing) {
            return
        }
        this.props.handleRefresh();
    };

    onEndReached = () => {
        if (this.props.loading) {
            console.log('loadMore cancel, because last loading not finish');
            return
        }


        let length = this.props.items.length;

        if(this.props.start && length < this.props.start) {
            //props.items.length 不太稳定，上次是20,这次可能是17, 这种情况直接return
            let start = this.props.start;
            console.log(`loadMore cancel, because ${length}less than last time ${start}`);
            return
        }

        if (this.props.total && this.props.total <= length) {
            console.log('loadMore cancel, because all data loaded');
            return
        }
        this.props.handleLoad(length);
    };

    render() {
        const {items, refreshing, error} = this.props;

        let content = null;
        if (error) {
            content = <Text>error</Text>
        } else {
            content = <FlatList
                data={items}
                refreshing={refreshing}
                onRefresh={this.onRefresh}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={0.1}
                initialNumToRender={3}
                getItemLayout={(data, index) => ({length: 143, offset: 143 * index, index})}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Item item={item}/>}
            />
        }
        return (
            <View style={styles.container}>
                {content}
            </View>
        )

    }
}