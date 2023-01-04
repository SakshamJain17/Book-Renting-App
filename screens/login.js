import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Platform, StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';


export default class Login extends Component {
    render() {
        return (
            <View>
            <SafeAreaView style={styles.droidSafeArea} />               
            <TouchableOpacity style={styles.button} onPress={() =>
                        this.props.navigation.navigate("Dashboard")}>   
                <Text style= {styles.text}>Log in</Text>
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
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },

    text: {
        fontSize: RFValue(30),

    }  
})    