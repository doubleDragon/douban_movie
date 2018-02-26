import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import store from './store';

registerScreens(store, Provider);

const navigatorStyle = {
    statusBarColor: 'black',
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarBackgroundColor: '#0a0a0a',
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    tabBarButtonColor: 'red',
    tabBarSelectedButtonColor: 'red',
    tabBarBackgroundColor: 'white'
};

export default () => {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'home',
            title: 'douban  moveies',
            navigatorStyle
        },
        // drawer: {
        //     left: {
        //         screen: 'movieapp.Drawer'
        //     }
        // }
    });
};