import React from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';

import TabContainer from './HotNextTabContainer';
import PropTypes from 'prop-types';

import HotCard from './HotCard';

const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
});



export default class HotNext extends React.Component {

    render() {
        const {items, isFetching, error} = this.props;

        let content = null;
        let tab = null;
        if (error) {
            content = <Text>error</Text>;
        } else {
            tab = <TabContainer />;
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
                    <HotCard title={item.title}
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
                {tab}
                {content}
            </View>
        )
    }
}

HotNext.propTypes = {
    onRefresh: PropTypes.func.isRequired,
    onEndReached: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    items: PropTypes.array
};