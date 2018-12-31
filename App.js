/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy';

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tb_popular'
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            selectedTitleStyle={{ color: 'red' }}
            title="最热"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'red' }]} source={require('./res/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={{ backgroundColor: 'red', flex: 1 }}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="趋势"
            selectedTitleStyle={{ color: 'yellow' }}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'yellow' }]} source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={{ backgroundColor: 'yellow', flex: 1 }}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            title="收藏"
            selectedTitleStyle={{ color: 'green' }}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'green' }]} source={require('./res/images/ic_favorite.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={{ backgroundColor: 'green', flex: 1 }}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            title="我的"
            selectedTitleStyle={{ color: 'blue' }}
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: 'blue' }]} source={require('./res/images/ic_my.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={{ backgroundColor: 'blue', flex: 1 }}></View>
          </TabNavigator.Item>
        </TabNavigator> */}
        <Navigator
          initialRoute = {{
            component: Boy
          }}
          renderScene = {
            (route, navigator) => {
               let Component = route.component;
               return <Component navigator={navigator} {...route.params} />
            }
          }
        >
        </Navigator>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 22,
    width: 22
  }
});
