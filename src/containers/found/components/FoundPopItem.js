import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Rating from 'react-native-easy-rating';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        width: 100
    },
    image: {
        width: 100,
        height: 140,
        borderRadius: 4,
    },
    title: {
        fontWeight: '900', color: '#494949', fontSize: 12, marginTop: 6
    },
    average: {
        fontSize: 10, color: '#9b9b9b', marginLeft: 3
    }
});

export default class FoundPopItem extends React.Component {
    render() {
        const {title, image, stars, average, index, count} = this.props;

        let rootStyle = {
            marginLeft: 10,
        };
        if (index === 0) {
            rootStyle.marginLeft = 15;
        } else if(index === (count - 1)) {
            rootStyle.marginLeft = 10;
            rootStyle.marginRight = 15;
        } else {
            rootStyle.marginLeft = 10;
        }

        // fake image use '../../../img/ic_test_movie.jpg'

        return (
            <View style={[styles.container, rootStyle]}>
                <Image source={{uri: image}} style={styles.image}/>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Rating
                        rating={stars}
                        max={5}
                        iconWidth={10}
                        iconHeight={10}
                        iconSelected={require('../../../img/icon_star_selected.png')}
                        iconUnselected={require('../../../img/icon_star_unselected.png')}
                        editable={false}
                    />
                    <Text style={styles.average}>{average}</Text>
                </View>
            </View>
        )
    }
}

FoundPopItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    average: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};