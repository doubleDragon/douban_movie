import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Rating from "react-native-easy-rating";
import {PX1} from '../../../util/PixUtils';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        height:42, flexDirection: 'row',
        paddingLeft: 15, paddingRight: 15
    },
    image: {
        height:42, width: 30, borderRadius: 4, borderWidth:PX1, borderColor: '#ccc'
    }
});

export default class FoundTopItem extends React.Component {

    render() {
        const {image, stars} = this.props;

        return (
            <View style={styles.container}>

                <Image source={{uri: image}} style={styles.image}/>

                <View style={{flex:1, marginLeft: 7}}>
                    <Text style={{color: '#494949', fontSize: 12, fontWeight: '900'}}>肖生克的救赎</Text>
                    <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                        <Rating
                            rating={stars}
                            max={5}
                            iconWidth={10}
                            iconHeight={10}
                            iconSelected={require('../../../img/icon_star_selected.png')}
                            iconUnselected={require('../../../img/icon_star_unselected.png')}
                            editable={false}
                        />

                        <Text style={{color: '#cccccc', fontSize: 10, marginLeft: 3}}>9.6</Text>
                        <Text style={{color: '#cccccc', fontSize: 10, marginLeft: 6}}>96000个人评价</Text>
                    </View>

                    <View style={{height: PX1, backgroundColor: '#dfdfdf', marginTop: 4}}/>
                </View>

            </View>
        )
    }
}

FoundTopItem.propTypes = {
    image: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired
};

