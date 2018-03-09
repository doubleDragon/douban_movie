/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Home from '../home';
import Hot from '../containers/hot';
import Found from '../containers/found';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('home', () => Home, store, Provider);
    Navigation.registerComponent('found', () => Found, store, Provider);
    Navigation.registerComponent('hot', () => Hot, store, Provider);
}