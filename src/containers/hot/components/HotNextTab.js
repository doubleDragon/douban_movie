import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {PX1} from "../../../util/PixUtils";

import PropTypes from 'prop-types';

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
        <Text style={style} onPress={() => props.clickMonth(props.item)}>{props.item.name}</Text>
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
        <Text style={style} onPress={() => props.clickOther(props.item)}>{props.item.name}</Text>
    )
};

export default class Tab extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {monthData, otherData} = this.props;

        const otherEle = otherData.map((item,index) =>
            <TabOther key={index} item={item} clickOther={this.props.clickOther}/>
        );

        return (
            <View>

                <View style={styles.container}>
                    <FlatList
                        data={monthData}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <TabMonth item={item} clickMonth={this.props.clickMonth}/>}
                    />

                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 1, backgroundColor: '#cccccc'}}/>

                        {otherEle}
                    </View>
                </View>

            </View>
        )
    }
}

TabOther.propTypes = {
    clickOther: PropTypes.func.isRequired,
};

TabMonth.propTypes = {
    clickMonth: PropTypes.func.isRequired,
};
