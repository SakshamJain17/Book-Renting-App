import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Dashboard extends Component {
    render() {
        return (
            <View>
            <TouchableOpacity style={styles.button}>
                <Text style= {styles.text}>a</Text>
                </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
                <Text style= {styles.text}>b</Text>
                </TouchableOpacity>
                </View>
            )
    }}

const styles= StyleSheet.create({

    button: {
        backgroundColor: 'green',
        width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30)
    },
    text: {
        fontSize: RFValue(30),
 
    }
})    