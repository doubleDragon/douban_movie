import React from 'react';
import {View, Text} from 'react-native';

import {PX1} from "../../../util/PixUtils";
import FoundNavItem from "./FoundNavItem";

import PropTypes from 'prop-types';


export default class FoundNavContainer extends React.Component {

    render() {

        const {items} = this.props;

        return (
            <View style={{
                height: 70,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: PX1,
                borderBottomColor: '#dfdfdf'
            }}>

                <FoundNavItem image={items[0].image} title={items[0].title} des={items[0].des} handleClick={items[0].handleClick}/>
                <View style={{width: PX1, height: 37, backgroundColor: '#dfdfdf'}}/>
                <FoundNavItem image={items[1].image} title={items[1].title} des={items[1].des} handleClick={items[1].handleClick}/>
            </View>
        )
    }
}

FoundNavContainer.propTypes = {
    items: PropTypes.array.isRequired
};