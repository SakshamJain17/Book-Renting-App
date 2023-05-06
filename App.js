import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import * as React from "react";

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>      
    </View>
    )
  }
}
var AppNavigator = createSwitchNavigator({

  login: Login,
  dashboard: Dashboard,
});

const AppContainer = createAppContainer(AppNavigator);