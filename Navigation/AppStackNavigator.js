import React  from 'react';
import {StyleSheet, View, Text }  from 'react-native';
// import {StackNavigator} from 'react-navigation';

import LoginScreen  from '../Screen/LoginScreen'
export default class AppStackNavigator extends React.Component{

   render(){

    return(
          
            <LoginScreen/>
       
    );
   }
}

// const AppStackNavigator = StackNavigator({
//      LoginScreen: {screen: LoginScreen}
// });


const styles = StyleSheet.create({

   container:{
       flex: 1,
       alignItems:'center',
       justifyContent:'center'
   }

});