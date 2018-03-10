import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', justifyContent: 'space-between',
        paddingLeft: 15, paddingRight: 15,
        paddingBottom: 5
    },
    left: {fontSize: 16, fontWeight: '900', color: '#494949'},
    right: {fontSize: 12, color: '#9b9b9b'},
    image: {width: 9, height: 9, marginLeft: 1}
});

export default class FoundPopHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.left}>豆瓣热门</Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.right}>全部99+</Text>
                    <Image source={require('../../../img/ic_arrow_right.png')} style={styles.image}/>
                </View>
            </View>
        )
    }
}