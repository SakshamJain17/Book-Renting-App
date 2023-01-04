import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Dashboard extends Component {
    render() {
        return (
            <View>
            <TouchableOpacity style={styles.button}>
                <Text>a</Text>
                </TouchableOpacity>
            
            <TouchableOpacity style={styles.button1}>
                <Text>b</Text>
                </TouchableOpacity>
                </View>
            )
    }}

const styles= StyleSheet.create({

    button: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
    },
    button1: {
        backgroundColor: 'green',
        width: 100,
        height: 100,

    }
})    