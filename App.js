import React from 'react';
import { StyleSheet } from 'react-native';

import AppStackNavigator from './Navigation/AppStackNavigator';

export default class App extends React.Component{
  render(){ 
  return (
    <AppStackNavigator/>
    
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
