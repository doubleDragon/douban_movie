/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Home from '../home';
import Test from '../test';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('home', () => Home, store, Provider);
    Navigation.registerComponent('test', () => Test, store, Provider);
}