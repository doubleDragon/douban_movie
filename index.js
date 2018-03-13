/* eslint-disable no-unused-vars */
//打包时用
import registerApp from './src/app/App';

// registerApp();


import {AppRegistry} from 'react-native';
import Self from "./src/containers/self";
AppRegistry.registerComponent('self', () => Self);