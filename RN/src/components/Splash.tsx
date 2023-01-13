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

      if(token != null) { 
        setHasLocalToken(true) 
        navigation.replace("MainStackNavigator")
      }
      else { 
        setHasLocalToken(true) 
        navigation.replace("AuthStackNavigator")
      }

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
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <View>
        <View style={styles.container}>
          <Image source={require('../assets/icons/simul_common/ic_correct.png')} 
            style={styles.img} 
            resizeMode="contain" />
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
    width: 200,
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