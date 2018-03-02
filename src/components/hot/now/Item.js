import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

import {PX1} from '../../../util/PixUtils';
import Rating from 'react-native-easy-rating';

import {isEmpty} from "../../../util/ToolUtils";

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

export default class HotNowItem extends React.Component {

    render() {

        const {item} = this.props;

        const movieName = item.title;
        const movieSource = {uri: item.images.small};
        const directorName = item['directors'][0].name;

        let castNames = [];
        const castList = item['casts'];
        if(castList && castList.length > 0) {
            for(let i=0; i<castList.length; i++) {
                let castObj = castList[i];
                if(castObj.hasOwnProperty('name')) {
                    castNames.push(castObj['name']);
                }
            }
        }
        let castsElement = null;
        if(!isEmpty(castNames)) {
            castsElement = (<Text style={styles.movieLabel}>主演 : {castNames.join('/')}</Text>);
        }

        let collectCount = item['collect_count'];
        if(collectCount > 10000) {
            collectCount = (collectCount / 10000).toFixed(1) + '万';
        }

        const rating = item['rating'];

        const average = rating['average'];
        const stars = parseInt(rating['stars']) / 10;
        const starNo = stars.toFixed(1);

        const hasRating = (average > 0 && stars > 0);
        const ratingDes = hasRating ? average : '暂无评分';

        const ratingLabelStyle = hasRating ? styles.movieRating : styles.movieRatingEmpty;

        return(
            <View style={styles.container}>

                <Image source={movieSource} style={styles.image}/>

                <View style={{flex: 1, marginLeft: 15}}>
                    <Text style={styles.movieName}>{movieName}</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
                        {hasRating && (
                            <Rating
                                rating={starNo}
                                max={5}
                                iconWidth={15}
                                iconHeight={15}
                                iconSelected={require('../../../img/icon_star_selected.png')}
                                iconUnselected={require('../../../img/icon_star_unselected.png')}
                                editable={false}
                            />

                        )}
                        <Text style={ratingLabelStyle}>{ratingDes}</Text>
                    </View>

                    <Text style={styles.movieLabel}>导演 : {directorName}</Text>
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