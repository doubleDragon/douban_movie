import React from 'react';
import {View, Text, ViewPagerAndroid, StyleSheet} from 'react-native';

export default class Test extends React.Component {

    // render() {
    //     return (
    //         <View>
    //             <Text>test component</Text>
    //         </View>
    //
    //     )
    // }

    render() {
        return (
            <View style={{flex: 1}}>
                <ViewPagerAndroid style={{flex:1, backgroundColor: '#333'}} initialPage={0}>

                    <View style={styles.pageStyle} key="1">
                        <Text>First page</Text>
                    </View>
                    <View style={styles.pageStyle} key="2">
                        <Text>Second page</Text>
                    </View>

                </ViewPagerAndroid>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
});