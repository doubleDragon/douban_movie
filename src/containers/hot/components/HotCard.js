import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

import {PX1} from '../../../util/PixUtils';
import Rating from 'react-native-easy-rating';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 143,
        padding: 15,
        borderBottomColor: '#e4e4e4',
        borderBottomWidth: PX1,
    },
    image: {
        width: 80,
        height: 113
    },
    movieName:{
        color: '#494949',
        fontSize: 17,
        fontWeight: '900'
    },
    movieLabel: {
        color: '#9b9b9b',
        marginTop: 5,
        fontSize: 11
    },
    movieDes: {
        fontSize:11,
        color: '#ff6677'
    },
    rightBox: {
        width: 85,
        paddingTop:18,
        alignItems: 'center'
    },
    buyBox: {
        borderRadius: 3,
        borderColor: '#ff6677',
        borderWidth: 1,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 18,
        paddingRight: 18,
        marginTop: 7,
    },
    movieBuy: {
        color: '#ff6677',
        fontWeight: '800'
    },
    rating: {
        fontSize:10,
        color: "#9b9b9b",
        marginLeft: 4
    },
    movieRating: {
        fontSize:10,
        color: "#9b9b9b",
        marginLeft: 4
    },
    movieRatingEmpty: {
        fontSize:10,
        color: "#9b9b9b",
    },
});

export default class HotCard extends React.Component {

    render() {

        const {title, image, director, casts, collectCount, stars, average} = this.props;

        let castsElement = null;
        if(casts) {
            castsElement = (<Text style={styles.movieLabel}>主演 : {casts}</Text>);
        }

        let hasRating = stars !== 0;
        const ratingLabelStyle =  hasRating ? styles.movieRating : styles.movieRatingEmpty;

        return(
            <View style={styles.container}>

                <Image source={{uri: image}} style={styles.image}/>

                <View style={{flex: 1, marginLeft: 15}}>
                    <Text style={styles.movieName}>{title}</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
                        {hasRating && (
                            <Rating
                                rating={stars}
                                max={5}
                                iconWidth={15}
                                iconHeight={15}
                                iconSelected={require('../../../img/icon_star_selected.png')}
                                iconUnselected={require('../../../img/icon_star_unselected.png')}
                                editable={false}
                            />

                        )}
                        <Text style={ratingLabelStyle}>{average}</Text>
                    </View>

                    <Text style={styles.movieLabel}>导演 : {director}</Text>
                    {castsElement}
                </View>

                <View style={styles.rightBox}>
                    <Text style={styles.movieDes}>{collectCount}人观看过</Text>
                    <View style={styles.buyBox}>
                        <Text style={styles.movieBuy}>购票</Text>
                    </View>
                </View>

            </View>
        )
    }
}

HotCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    casts: PropTypes.string,
    collectCount: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    average: PropTypes.string.isRequired,
};