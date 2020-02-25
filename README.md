# react_native_study

#### 介绍
1.react_native是基于React这门框架语法来进行开发的：
2.RN中，提供了移动端专用的一些组件， 网页中的div,p,img的标签都不可以用只能使用RN原有的组件。
3.把一个RN项目完整的发布到搜集上运行，结合安卓打包签名，结合Rn提供的打包命令，进行完整的spk文件发布
最终大部出来的是Release版本的项目，可以上传到应用商店，

装好相关开发环境。详情见官网。
1.初始化项目：   npm install -g yarn react-native-cli 
                react-native init 项目名
                进入新建的项目目录，执行升级命令：cd 项目名
2.打开虚拟设备，可以使用androidstudio的  AVD manager，  打开成功后：在cmd中输入  adb devices 查看是否有设备连接
3.成功连接后，在初始化好的项目中，react-native run-android 将项目安装到手机上
4.手机配置使用数据线，把手机连接到电脑上。
adb devices  安卓开发环境提供的
5.构建项目时使用react-native run-android将项目安装到手机或者虚拟设备上即可，之后使用react-native start即可
6.react-native start  后出现的黑框是reactnative packager 它可以帮助我们试试编译源代码，并把结果应用到手机上
开发者可以实时看到项目的状态。这个编译代码的功能运行在8081端口，每当有新的代码编译应用到手机上，就会多一行结果。


项目结构及运行：
1.//在rn中只能使用.js作为组件的后缀名,不能使用.jsx后缀

//不推荐npm下载包，下载速度慢，推荐使用yarn add 包名

//修改了任何Android目录下的任何文件后，要react-native run-android

项目有问题有时间重新修改
