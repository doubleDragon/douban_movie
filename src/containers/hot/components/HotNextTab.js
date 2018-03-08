import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {PX1} from "../../../util/PixUtils";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderBottomColor: '#494949',
        borderBottomWidth: PX1,
        paddingLeft: 15,
        paddingRight: 15,
    },
});

const TabMonth = (props) => {

    let style = {
        color: '#cccccc',
        fontSize: 14,
        paddingRight: 17
    };
    if (props.item.selected) {
        style.color = '#494949';
    }

    return (
        <Text style={style}>{props.item.name}</Text>
    )
};

const TabOther = (props) => {
    let style = {
        color: '#cccccc',
        marginLeft: 17
    };

    if (props.item.selected) {
        style.color = '#494949';
    }

    return (
        <Text style={style}>{props.item.name}</Text>
    )
};

const monthData = [
    {
        name: '全部',
        selected: true
    },
    {
        name: '3月',
        selected: false
    },
    {
        name: '4月',
        selected: false
    },
    {
        name: '5月',
        selected: false
    }
];

export default class Tab extends React.Component {

    render() {
        return (
            <View>

                <View style={styles.container}>
                    <FlatList
                        data={monthData}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <TabMonth item={item}/>}
                    />

                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 1, backgroundColor: '#cccccc'}}/>
                        <TabOther item={{name:'时间', selected: true}}/>
                        <TabOther item={{name:'热度', selected: false}}/>
                    </View>
                </View>

            </View>
        )
    }
}