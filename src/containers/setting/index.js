import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Styles} from "../../app/styles";
import {connect} from "react-redux";
import {logoutAction} from "../../redux/user";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f1ee',
        paddingTop: 20
    },
    box: {
        height: 50,
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e4'
    },
    between: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: '#494949',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 50
    },
    arrow: {
        width: 10, height: 10
    },
    trashText: {
        color: '#9b9b9b', fontSize: 12
    },
    trashImg: {
        width: 15, height: 15,
        marginLeft: 4
    },
    centerInBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

class Setting extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.between]}>
                    <Text style={styles.text}>清楚缓存</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.trashText}>46.38M</Text>
                        <Image source={require('../../img/ic_trash.png')} style={styles.trashImg}/>
                    </View>
                </View>

                <View style={[styles.box, styles.between]}>
                    <Text style={styles.text}>意见反馈</Text>
                    <Image source={require('../../img/ic_arrow_right.png')} style={styles.arrow}/>
                </View>

                <View style={[styles.box, styles.between]}>
                    <Text style={styles.text}>关于</Text>
                    <Image source={require('../../img/ic_arrow_right.png')} style={styles.arrow}/>
                </View>

                {this.props.showLogout &&
                    <TouchableOpacity style={[styles.box, styles.centerInBox, Styles.mt20]} onPress={this.props.logout}>
                        <Text style={styles.text}>退出登录</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    let showLogout = false;
    if(state.user.username) {
        showLogout = true;
    }
    return {
        showLogout
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutAction())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Setting);