import React from 'react';
import { SafeAreaView, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import CommonStyle from '../common/common_style';
import LoginStyle from './login_style';

const Login = ({navigation}: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={LoginStyle.container_login_title}>
        <Text style={LoginStyle.text_login}>Login</Text>
        
      </View>
      
      <View style={LoginStyle.container_login_img}>
        <Image style={LoginStyle.img_login} source={require('../../assets/images/nimo.png')} />
      </View>

      <View style={LoginStyle.container_login_input}>
        <TextInput style={LoginStyle.textInput_login} placeholder="닉네임" />
        <TextInput style={LoginStyle.textInput_login} placeholder="비밀번호" />
        <TouchableOpacity onPress={() => navigation.navigate("Main")} style={LoginStyle.btn_login}>
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