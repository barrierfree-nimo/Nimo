import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ToastAndroid } from "react-native";
import CommonStyle from "../../common/common_style";
import RegisterStyle from "./register_style";
import baseURL from "../../baseURL";


const Register = ({navigation}: any) => {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const showToast = () => {
    ToastAndroid.show('회원가입이 완료되었습니다.', ToastAndroid.SHORT)
  }
  
  const addUser = () => {
    Axios.post(baseURL + '/user/join', {
      nickname: nickname,
      password: password,
    }).then(res => {
        console.log(res.data)
        showToast()
        navigation.navigate("Login")
      }).catch(err => console.log(err))
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={CommonStyle.container}>
      
        <View style={CommonStyle.container_header}>
          <Text style={CommonStyle.title}>회원가입</Text>
        </View>

        <View style={RegisterStyle.container}>
          <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>닉네임</Text>
              <View style={RegisterStyle.container_item_input}>
                <TextInput value={nickname} onChangeText={(nickname) => setNickname(nickname)} 
                  style={RegisterStyle.textInput_item} placeholder="닉네임" />
                <TouchableOpacity style={RegisterStyle.btn_overlapping}>
                  <Text style={RegisterStyle.btnText_overlapping}>중복확인</Text>
                </TouchableOpacity>
              </View>
          </View>

            <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>비밀번호</Text>
              <View style={RegisterStyle.container_item_input}>
                <TextInput value={password} onChangeText={(password) => setPassword(password)} 
                secureTextEntry={true} style={RegisterStyle.textInput_item_pw} placeholder="비밀번호" />
              </View>
            </View>

            <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>비밀번호 확인</Text>
              <View style={RegisterStyle.container_item_input}>
                <TextInput style={RegisterStyle.textInput_item_pw} secureTextEntry={true} placeholder="비밀번호를 한번 더 입력해주세요" />
              </View>
            </View>


          <View style={RegisterStyle.container_btn}>
            <TouchableOpacity onPress={() => {addUser()}} style={RegisterStyle.btn_register}>
              <Text style={RegisterStyle.btnText_register}>회원가입 완료하기</Text>
            </TouchableOpacity>
          </View>

        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}


export default Register;