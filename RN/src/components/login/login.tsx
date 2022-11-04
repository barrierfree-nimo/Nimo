import React, {useState} from 'react';
import Axios from 'axios';
import { SafeAreaView, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import CommonStyle from '../common/common_style';
import LoginStyle from './login_style';
import baseURL from '../baseURL';

const Login = ({navigation}: any) => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = () => {
    Axios.post(baseURL + '/user/login', {
      userId: userId,
      password: password
    }).then(res => {
        console.log(res.data)
        navigation.replace("Main")
      }).catch(err => console.log(err))
  }

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={LoginStyle.container_login_title}>
        <Text style={LoginStyle.text_login}>Login!</Text>
        
      </View>
      
      <View style={LoginStyle.container_login_img}>
        <Image style={LoginStyle.img_login} source={require('../../assets/images/nimo.png')} />
      </View>

      <View style={LoginStyle.container_login_input}>
        <TextInput value={userId} onChangeText={(userId) => setUserId(userId)} style={LoginStyle.textInput_login} placeholder="아이디" />
        <TextInput value={password} onChangeText={(password) => setPassword(password)} style={LoginStyle.textInput_login} placeholder="비밀번호" />
        <TouchableOpacity onPress={() => {userLogin()}} style={LoginStyle.btn_login}>
          <Text style={LoginStyle.btnText_login}>로그인하기</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")} style={LoginStyle.btn_register}>
          <Text style={LoginStyle.btnText_login}>회원가입하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login;