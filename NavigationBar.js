import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Platform, } from 'react-native'
import PropTypes from 'prop-types';

const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEGIHT_ANDROID = 50;
const STATUS_BAR_HEIGHT = 20;

const StatusBarShape = {
    barStyle: PropTypes.oneOf(['light-content', 'dark-content', 'default']),
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string,
};

export default class NavigationBar extends Component {

    static propTypes = {
        style: PropTypes.style,
        hidden: PropTypes.bool,
        title: PropTypes.string,
        titleView: PropTypes.element,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar: PropTypes.shape(StatusBarShape)
    }

    static defaultProps = {
        statusBar: {
            hidden: false,
            barStyle: 'default',
            // backgroundColor: 'red' // 对ios不起作用
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
 
        const statusBar = !this.props.statusBar.hidden ? (
            <View>
                <StatusBar {...this.props.statusBar}></StatusBar>
            </View>
        ) : null;

        const titleView = this.props.titleView ?
            this.props.titleView
            : <Text ellipsizeMode='head' numberOfLines={1}>{this.props.title}</Text>;

        const content = <View style={[styles.navBar, this.props.style]}>
            {this.props.leftButton}
            <View style={styles.navBarTitleContainer}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>
        
        return (
            <View>
                {statusBar}
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEGIHT_ANDROID
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
    },
    navBarTitleContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    }
})