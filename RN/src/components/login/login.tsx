import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width

const Login = () => {
  return (
    <SafeAreaView style={styles.container_login}>
      <View style={styles.container_login_title}>
        <Text style={styles.text_login}>Login</Text>
        
      </View>
      
      <View style={styles.container_login_img}>
        <Image style={styles.img_login} source={require('../../assets/images/nimo.png')} />
      </View>

      <View style={styles.container_login_input}>
        <TextInput style={styles.textInput_login} placeholder="닉네임" />
        <TextInput style={styles.textInput_login} placeholder="비밀번호" />
        <TouchableOpacity style={styles.btn_login}>
          <Text style={styles.btnText_login}>로그인하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container_login: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },  
  container_login_title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  text_login: {
    color: '#FFFFFF', 
    fontSize: 50,
  },
  container_login_img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_login: {
    width: 150,
    height: 150
  },
  container_login_input: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput_login: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: 'orange',
    fontSize: 20,
  },
  btn_login: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'coral',
  },
  btnText_login: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "500"
  }
})

export default Login;