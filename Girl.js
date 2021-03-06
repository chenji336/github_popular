import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'
import NavigationBar from './js/common/NavigationBar'

export default class Girl extends Component {

    renderButton(image) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigator.pop();
                }}>
                <Image
                    style={styles.image}
                    source={image} />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='Girl'
                    statusBar={{
                        backgroundColor: 'red'
                    }}
                    style={{ backgroundColor: 'red' }}
                    leftButton={this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))}
                    rightButton={this.renderButton(require('./res/images/ic_star.png'))}
                ></NavigationBar>
                <Text style={styles.tips}>I am girl.</Text>
                <Text style={styles.tips}>我收到了男孩送的:{this.props.what}</Text>
                <Text style={styles.tips} onPress={() => {
                    this.props.onCallBack('巧克力');
                    this.props.navigator.pop();
                }}>
                    回赠,男孩巧克力
                </Text>
            </View >)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tips: {
        fontSize: 18
    },
    image: {
        height: 22,
        width: 22,
        margin: 8,
        // tintColor: 'yellow'
    }
})