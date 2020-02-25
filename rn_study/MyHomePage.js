//在rn中只能使用.js作为组件的后缀名,不能使用.jsx后缀
import React ,{Component}from 'react'
import { View ,Text,TextInput,Image,Button, 
     ActivityIndicator,
    AppRegistry,
    StyleSheet,} from 'react-native'

export default class MyHomePage extends Component{
    //必须有一个render函数
    //constructor一般也用
    constructor(props){
        super(props)
        this.state={
            msg:''
        }
    }
    render(){
        //在Rn中不能使用网页中的标签，像div，P，img都不能用
        //2.如果想要实现布局，Rn提供了View的组件。 Rn提供了一系列基础的组件，方便程序员开发，
        //如果想使用这些组件，只需要按需把组件从rn中导入即可
        return <View>
            {/* 在rn中所有的文本必须使用text组件包裹。 */}
            <Text>
                123456
            </Text>
            <TextInput style={{width:'100%',}} defaultValue="1" secureTextEntry={true}>
            </TextInput>
            <View>
                <Image
                source={require('./images/1.jpg')}
                style={{width: 150, height: 150}}
                />
                <Image
                // 网络上的资源必须要为图片指定宽和高。
                style={{width: 150, height: 150}}
                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582474791295&di=d754f7a7ae7c9417c938c1bc8da58fab&imgtype=0&src=http%3A%2F%2Fi2.w.yun.hjfile.cn%2Fdoc%2F201303%2Fd5547c74-d9ad-4625-bd93-41c2817f1dff_03.jpg'}}
                />
                <Image
                style={{width: 66, height: 58}}
                source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                /> 
            </View>
            <Button title="这是一个按钮" onPress={()=>{console.warn('123')}}></Button>
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
                <ActivityIndicator size="small" color="#00ff00" />
                <ActivityIndicator size="large" color="#0000ff" />
                {/* 如果使用animating属性，隐藏，只是看不到，却占有空降位置 */}
                <ActivityIndicator size="small" color="#00ff00"  animating={false}/>
            </View>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })
