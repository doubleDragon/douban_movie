/* eslint-disable no-unused-vars */
//react-native run-android时用
import registerApp from './src/app/App';

// registerApp();

import {AppRegistry} from 'react-native';
import Self from "./src/containers/self";
AppRegistry.registerComponent('ReactDemo', () => Self);