import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator'
import Home from './components/tabbars/Home.js'
import Me from './components/tabbars/Me.js'
import Search from './components/tabbars/Search.js'
import ShopCar from './components/tabbars/ShopCar.js'
//导入图标相关组件
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
  constructor(props){
    super(props)
      this.state={
        selectedTab:'home', //选中的Tab栏，默认为home
      }
    }
  

  render(){
    return <View style={styles.container}>
      {/* 这个是Home 主页 */}

      <TabNavigator >
          <TabNavigator.Item
           selected={this.state.selectedTab==='home'} //判断当前的tab栏是否被选中
          title="主页"  //表示tabbar展示的内容
          // renderIcon={()=><Image source={}></Image>}
          onPress={()=>this.setState({selectedTab:'home'})}
          renderIcon={()=><Image style={{width: 30, height: 30}} source={{uri:'https://static.easyicon.net/preview/124/1240136.gif'}}/>}  //未选中状态下的图标
          renderSelectedIcon={()=><Image  style={{width: 35, height: 35}} source={{uri:'https://static.easyicon.net/preview/123/1233671.gif'}}/>}  //选中状态的图标
          >
            <Home></Home>
          </TabNavigator.Item>

          {/* 这个是 搜素*/}
          <TabNavigator.Item
           selected={this.state.selectedTab=='search'}
           title="搜索"
           onPress={()=>this.setState({selectedTab:'search'})}
           renderIcon={()=><Image  style={{width: 30, height: 30}} source={{uri:'https://static.easyicon.net/preview/124/1241080.gif'}}/>}  //未选中状态下的图标
           renderSelectedIcon={()=><Image  style={{width: 35, height: 35}} source={{uri:'https://static.easyicon.net/preview/124/1241130.gif'}}/>}  //选中状态的
           
          >
            <Search></Search>
          </TabNavigator.Item>

            {/* 这个是 购物车*/}
            <TabNavigator.Item
           selected={this.state.selectedTab=='shopcar'}
           title="购物车"
           onPress={()=>this.setState({selectedTab:'shopcar'})}
           badgeText="0"
           renderIcon={()=><Image  style={{width: 30, height: 30}} source={{uri:'https://static.easyicon.net/preview/124/1241015.gif'}}/>}  //未选中状态下的图标
           renderSelectedIcon={()=><Image  style={{width: 35, height: 35}} source={{uri:'https://static.easyicon.net/preview/123/1232426.gif'}}/>}  //选中状态的图标
          >
            <ShopCar></ShopCar>
          </TabNavigator.Item>

           {/* 这个是 Me*/}
          <TabNavigator.Item
           selected={this.state.selectedTab=='me'}
           title="Me"
           onPress={()=>this.setState({selectedTab:'me'})}
           renderIcon={()=><Image  style={{width: 30, height: 30}} source={{uri:'https://static.easyicon.net/preview/123/1232016.gif'}}/>}  //未选中状态下的图标
           renderSelectedIcon={()=><Image  style={{width: 35, height: 35}} source={{uri:'https://static.easyicon.net/preview/123/1230160.gif'}}/>}  //选中状态的
          >
            <Me></Me>
          </TabNavigator.Item>
      </TabNavigator>
    </View>
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1
    }
});

