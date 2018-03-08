import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import loadTabIcons from '../util/IconUtils';

import { registerScreens } from './screens';
// import store from './store';
import store from '../redux/store';

registerScreens(store, Provider);

// const navigatorStyle = {
//     statusBarColor: 'black',
//     statusBarTextColorScheme: 'light',
//     navigationBarColor: 'black',
//     navBarBackgroundColor: '#0a0a0a',
//     navBarTextColor: 'white',
//     navBarButtonColor: 'white',
//     tabBarButtonColor: 'red',
//     tabBarSelectedButtonColor: 'red',
//     tabBarBackgroundColor: 'white'
// };


const tabNavigatorStyle = {
    statusBarColor: 'transparent',
    statusBarTextColorScheme: 'light',

    navBarHidden: true
};

const startApp = (icons) => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: '热映', // tab label as appears under the icon in iOS (optional)
                screen: 'hot', // unique ID registered with Navigation.registerScreen
                icon: icons[0],
                navigatorStyle: tabNavigatorStyle
            },
            {
                label: '找片',
                screen: 'test',
                icon: icons[1],
                navigatorStyle: tabNavigatorStyle
            },
            {
                label: '我的',
                screen: 'home',
                icon: icons[2],
                navigatorStyle: tabNavigatorStyle
            }
        ],
    })
};

export default () => {
    loadTabIcons().then((icons) => {
        startApp(icons);
    }).catch((error) => {
        console.error(error)
    });
};