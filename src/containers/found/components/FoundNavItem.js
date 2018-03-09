import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';


export default class FoundNavItem extends React.Component {

    render() {
        const {image, title, des} = this.props;

        return (
            <TouchableOpacity style={{flex: 1, flexDirection: 'row', height: 37, paddingLeft: 15, paddingRight: 8}}
                  onPress={this.props.handleClick}>
                <Image source={image} style={{width: 37, height: 37}} onPress={this.handleImage}/>

                <View style={{
                    marginLeft: 8, justifyContent: 'space-between', flexDirection: 'row', flex: 1,
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: '900', color: '#494949'}}>{title}</Text>
                        <Text style={{marginTop: 1, color: '#9b9b9b', fontSize: 10}} >{des}</Text>
                    </View>

                    <Image source={require('../../../img/ic_arrow_right.png')} style={{width: 9, height: 9}}/>
                </View>

            </TouchableOpacity>
        )
    }
}

FoundNavItem.propTypes = {
    image: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};