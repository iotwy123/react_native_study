import React ,{Component} from 'react'

//导入轮播图组件
import { AppRegistry, StyleSheet, Text, View,Image } from 'react-native'

import Swiper from 'react-native-swiper'
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            lunbotu:[] //轮播图数组
        }
    }
    // UNSAFE_componentWillReceiveProps(){

    // }
    componentWillMount(){
        // fetch('http://127.0.0.1:4000/api/get')
        // .then(res=>res.json())
        // .then(data=>{
        //     this.setState({
        //         lunbotu:data
        //     })
        // })
    }
    render(){
        return <View>
            {/* 轮播图 */}
            <Text>{this.state.lunbotu}</Text>
                <View style={{height:220}}>
                     <Swiper
                        style={styles.container}
                        showsButtons = {true}
                        autoplay={true}
                        loop={true}
                    >
                        <View style={styles.slide1}>
                        <Text style={styles.text}>Android</Text>
                        </View>
                        <View style={styles.slide2}>
                        <Text style={styles.text}>iOS</Text>
                        </View>
                        <View style={styles.slide3}>
                        <Text style={styles.text}>Java</Text>
                        </View>
                    </Swiper>
                </View>
            {/* 6个大图标 */}
            <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                <View style={{width:'33.3%',alignItems:'center'}}>
                    <Image source={require('../../images/course1.jpg')} style={{width:60,height:60}}></Image>
                    <Text>新闻资讯</Text>
                </View>
                <View  style={{width:'33.3%',alignItems:'center'}}>
                    <Image source={require('../../images/course2.jpg')} style={{width:60,height:60}}></Image>
                    <Text>图片分享</Text>
                </View>
                <View  style={{width:'33.3%',alignItems:'center'}}>
                    <Image source={require('../../images/course3.jpg')} style={{width:60,height:60}}></Image>
                    <Text>商品购买</Text>
                </View>
                <View  style={{width:'33.3%',alignItems:'center'}}>
                    <Image source={require('../../images/course4.jpg')} style={{width:60,height:60}}></Image>
                    <Text>视频专区</Text>
                </View>
                <View  style={{width:'33.3%',alignItems:'center'}}>
                    <Image source={require('../../images/course5.jpg')} style={{width:60,height:60}}></Image>
                    <Text>热映电影</Text>
                </View>
                <View  style={{width:'33.3%',alignItems:'center'}}>
                    <Image source={require('../../images/course5.jpg')} style={{width:60,height:60}}></Image>
                    <Text>联系我们</Text>
                </View>
            </View>
        </View>
         
            
                
    }
}