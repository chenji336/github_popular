import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Girl from './Girl'
import NavigationBar from './NavigationBar';

export default class Boy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      what: ''
    }
  }

  render() {
    let what = this.state.what === '' ? '' : '我收到了女孩回赠的:' + this.state.what;
    return (
      <View style={styles.container}>
        <NavigationBar
          title='Boy'
          style={{ backgroundColor: 'red' }}
          statusBar={{backgroundColor: 'red'}}
        ></NavigationBar>
        <Text style={styles.tips}>Hello I am boy.</Text>
        <Text onPress={
          () => {
            this.props.navigator.push({
              component: Girl,
              name: 'Girl',
              params: {
                what: '一支玫瑰花',
                onCallBack: (what) => {
                  this.setState({
                    what
                  });
                }
              }
            })
          }
        }>送花给女孩</Text>
        <Text style={styles.tips}>{what}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'gray'
  },
  tips: {
    fontSize: 29
  }
});
