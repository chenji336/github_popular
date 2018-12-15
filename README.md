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
