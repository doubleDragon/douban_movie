import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Rating from "react-native-easy-rating";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        height: 112,
        flexDirection: 'row',
        padding: 15
    },
    rightBox: {
        flex: 1,
        marginLeft: 15
    },
    image: {
        width: 60, height: 84
    },
    title: {
        fontSize: 17, color: '#494949', fontWeight: '900'
    },
    time: {
        fontSize: 12, color: '#cccccc',
        alignSelf: 'flex-end', paddingBottom: 2
    },
    average: {
        fontSize: 10
    },
    director: {
        color: '#9b9b9b',fontSize: 12, fontWeight: '400',
        marginTop: 5
    },
    casts: {
        color: '#9b9b9b',fontSize: 12, fontWeight: '400',
        marginTop: 2
    }
});

export default class SelfWatchItem extends React.Component {

    render() {

        const {title, image, time, stars, average, director, casts} = this.props;

        return (
            <View style={styles.container}>
                <Image source={{uri: image}} style={styles.image}/>
                <View style={styles.rightBox}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.time}>{time}</Text>
                    </View>

                    <View style={{marginTop: 5, flexDirection: 'row', alignItems: 'center'}}>
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

                    <Text style={styles.director}>导演 : {director}</Text>
                    <Text style={styles.casts}>主演 : {casts}</Text>
                </View>

            </View>
        )
    }
}

SelfWatchItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    average: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    casts: PropTypes.string.isRequired,
};