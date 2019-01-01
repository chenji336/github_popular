import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput
} from 'react-native';
import NavigationBar from '../common/NavigationBar'
import DataRepository from '../expand/dao/DataRepository'
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.dataRespository = new DataRepository();
        this.state = {
            result: '',
        }
    }

    loadData() {
        let url = URL + this.key + QUERY_STR;
        this.dataRespository
            .fetchNetRepository(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result),
                });
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        return <View style={styles.container}>
            <NavigationBar
                title={'最热'}
            />
            <Text
                style={styles.tips}
                onPress={() => this.loadData()}
            >加载数据</Text>
            <TextInput style={{ height: 40, borderWidth: 1 }}
                onChangeText={(text) => {
                    this.key = text;
                }}
            />
            <Text style={{ height: 800 }}>{this.state.result}</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tips: {
        fontSize: 20
    }
})