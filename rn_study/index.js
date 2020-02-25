/**
 * @format
 */

import {AppRegistry} from 'react-native';  //注册项目的首页
import App from './App';
import Main from './main.js'
import {name as appName} from './app.json';
import MyHomePage from './MyHomePage.js'
AppRegistry.registerComponent(appName, () => App);  
//注册项目。第一个参数不要修改，第二个参数表示把那个页面注册为项目首页

