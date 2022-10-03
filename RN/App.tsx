import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Main from './src/components/main/main'
import Login from './src/components/login/login'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
      {/* <Main /> */}
      {/* <Login /> */}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00284E',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 50
  }
});

export default App;
