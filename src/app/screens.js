/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Hot from '../containers/hot';
import Found from '../containers/found';
import Self from "../containers/self";

export function registerScreens(store, Provider) {
    Navigation.registerComponent('hot', () => Hot, store, Provider);
    Navigation.registerComponent('found', () => Found, store, Provider);
    Navigation.registerComponent('self', () => Self, store, Provider);
}