import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, FlatList, StyleSheet} from 'react-native';

import Item from './HotNotItem';

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

    render() {
        const {items, isFetching, error} = this.props;

        let content = null;
        if (error) {
            content = <Text>error</Text>
        } else {
            content = <FlatList
                data={items}
                refreshing={isFetching}
                onRefresh={this.props.onRefresh}
                onEndReached={this.props.onEndReached}
                onEndReachedThreshold={0.1}
                initialNumToRender={3}
                getItemLayout={(data, index) => ({length: 143, offset: 143 * index, index})}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Item title={item.title}
                          image={item.image}
                          director={item.director}
                          casts={item.casts}
                          collectCount={item.collectCount}
                          stars={item.stars}
                          average={item.average}
                        />)}
            />
        }
        return (
            <View style={styles.container}>
                {content}
            </View>
        )

    }
}

HotNow.propTypes = {
    onRefresh: PropTypes.func.isRequired,
    onEndReached: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    items: PropTypes.array
};