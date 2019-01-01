#react-native实战
## 第一章 开发准备
### 1-5项目底部导航开发
react-native-tab-navigate使用
> png图片可以在renderIcon中通过tintColor进行着色,这个是ios的着色机制
### 1-6 navigator的基本使用
navigator已经在该版本被弃用，如果想使用可以从react-native-deprecated-custom-components中引用
最后还是使用react-navigation(现在只是测试一下navigator而已，放在了--save-dev
### 1-7/8/9 navigationBar的使用
+ 使用navigator默认是没有navigationBar的
+ 使用statusBar，可以控制高度以及背景色（ios背景色没有作用）[ios/android-statusBar区别](http://www.hangge.com/blog/cache/detail_1613.html)
+ prop-types使用，prop类型

## 第二章 适配RN0.55最新导航器
### 2-1 react-navigation详解
纯文字描述，也可以参考文档[official](https://reactnavigation.org/docs/zh-Hans/custom-navigators.html)
三种类型
+ stackNavigator普通导航，上面有back/share/share/collection（收藏）按钮
+ navigationTab,底部导航栏
+ drawer导航，qq的弹出框然后导航
详细的先听一下后面的实战，如果没有涉及的再来回看下

### 2-2 stackNavigator精讲-1
stackNaivgator就是堆栈的导航（就是普通导航）

### 2-3 stackNavigator精讲-2
navigate goback

### 2-4 stackNavigator精讲-3
动态设置options ({navigation}) => ({title: navigation.state.params.name})

### 2-5 stackNavigator精讲-4
navigation header和content的互动（setParams)
老师没讲的是如何通过navigationOptions去控制component的state，不过在官方文档有讲

### 2-6/7/8 tabBarNavigator精讲
参照offical内容

### 2-9/10 drawerNavigator精讲
参照offical内容+作者提供的demo

## 第三章 适配RN 0.55最新高性能列表组件精讲
内容都在react-native-study/AwesomeProject/offical-study里面

## 第四章 项目基础功能开发（ListView、Fetch、启动）
### 4-1 ListView列表
最新版本的被FlatList替换掉
### 4-2/3 Fetch的使用的轻量封装
fetch是替换XMLHttpRequest的浏览器提供，主要是通过promise实现。兼容性查看 canIUse
封装就是对get和post的封装而已
### 4-4 项目启动引导流程
现在使用的还是老版本的navigator以及listview，因为跟着课程来所以先使用，后续会改成react-navigation以及fasterList
忽略黄色提醒:
```
    import { YellowBox } from 'react-native';
    YellowBox.ignoreWarnings(['Remote debugger']);
```

## 第五章 popular（最热）模块开发
### 数据层设计
up主封装的很像java了，使用了dao层
https://api.github.com/search/repositories?q=&sort=stars

