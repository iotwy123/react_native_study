//这是项目的跟组件。。真正的根组件
import React ,{Component} from 'react'
import{View,Text,Image,ActivityIndicator } from 'react-native'
//导入路由相关组件
import { Router,Stack,Scene} from 'react-native-router-flux'
//Router相当于Hashrouter,stack是一个分组的容器，不表示具体的路由 scence表示一个具体的路由规则，route
import App from './App.js'
export default class Main extends Component{
    render(){
        return <View>
           <Router>
               <Stack key='root'>
                    <Scene key="app" component={App} title='App组件'></Scene>
               </Stack>
           </Router>
           </View>
    }
}