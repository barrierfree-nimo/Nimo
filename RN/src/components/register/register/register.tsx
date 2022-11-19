import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import CommonStyle from "../../common/common_style";
import RegisterStyle from "./register_style";
import baseURL from "../../baseURL";


const Register = ({navigation}: any) => {

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  

  const addUser = () => {
    Axios.post(baseURL + '/user/join', {
      userId: userId,
      password: password,
      nickname: nickname
    }).then(res => {
        console.log(res.data)
        navigation.navigate("RegisterCheck")
      }).catch(err => console.log(err))
  }

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.title}>회원가입</Text>
      </View>

      <View style={RegisterStyle.container}>
        <View style={RegisterStyle.container_item}>
            <Text style={RegisterStyle.title_item}>아이디</Text>
            <View style={RegisterStyle.container_item_input}>
              <TextInput value={userId} onChangeText={(userId) => setUserId(userId)} style={RegisterStyle.textInput_item} placeholder="아이디" />
              <TouchableOpacity style={RegisterStyle.btn_overlapping}><Text>중복확인</Text></TouchableOpacity>
            </View>
        </View>

          <View style={RegisterStyle.container_item}>
            <Text style={RegisterStyle.title_item}>비밀번호</Text>
            <View style={RegisterStyle.container_item_input}>
              <TextInput value={password} onChangeText={(password) => setPassword(password)} style={RegisterStyle.textInput_item} placeholder="비밀번호" />
            </View>
          </View>

          <View style={RegisterStyle.container_item}>
            <Text style={RegisterStyle.title_item}>비밀번호 확인</Text>
            <View style={RegisterStyle.container_item_input}>
              <TextInput style={RegisterStyle.textInput_item} placeholder="비밀번호" />
            </View>
          </View>

          <View style={RegisterStyle.container_item}>
            <Text style={RegisterStyle.title_item}>닉네임</Text>
            <View style={RegisterStyle.container_item_input}>
              <TextInput value={nickname} onChangeText={(nickname) => setNickname(nickname)} style={RegisterStyle.textInput_item} placeholder="닉네임" />
            </View>
        </View>


        <View style={RegisterStyle.container_btn}>
          <TouchableOpacity onPress={() => {addUser()}} style={RegisterStyle.btn_register}>
            <Text style={RegisterStyle.btnText_register}>회원가입 완료하기</Text>
          </TouchableOpacity>
        </View>

      </View>
    
    </SafeAreaView>


  )
}


export default Register;