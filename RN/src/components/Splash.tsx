import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { SafeAreaView, StatusBar, Text, View, Image, StyleSheet } from 'react-native';
import CommonStyle from './common/common_style';
import baseURL from './baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}: any) => {
  const [ hasLocalToken, setHasLocalToken ] = useState(false)

  const getLocalToken = async () => { 
    let token;
    try {
      token = await AsyncStorage.getItem('user_Token')
      console.log('token: ' + token)

      if(token != null) { 
        setHasLocalToken(true) 
        navigation.replace("MainStackNavigator")
      }
      else { 
        setHasLocalToken(true) 
        navigation.replace("AuthStackNavigator")
      }
      //console.log('hastoken: ' + hasLocalToken)

    } catch(error) {
      console.log(error)
    }

  }

  useEffect(() => {
    setTimeout(() => {
      getLocalToken()
    }, 3000)
  }, [])

  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar />
      <View>
        <View style={styles.container}>
          <Image source={require('../assets/images/main_progress.png')} style={styles.img} />
          <Text style={styles.text_title}>피싱백신</Text>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  img: {
    marginTop: 70,
    marginBottom: 20,
  },
  text_title: {
    fontSize: 70,
    color: '#00284E',
    fontWeight: 'bold',
    alignItems: 'center'
  }
})

export default Splash;