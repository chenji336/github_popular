import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'
import WelcomePage from './WelcomePage'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']); // 忽略黄色提醒

class Root extends Component {
    renderScene(route, navigator) {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
    }

    render() {
        return <Navigator
            initialRoute={{ component: WelcomePage }}
            renderScene={(route, navigator) => this.renderScene(route, navigator)}
        />
    }
}
function setup() {
    //进行一些初始化配置
    return (
        <SafeAreaView style={{flex:1}}>
            <Root />
        </SafeAreaView>
    );
}
// module.exports = setup; // 这里不能setup(),因为AppRegistry.registerComponent(appName, () => App);的App应该是function或则class
export default setup;