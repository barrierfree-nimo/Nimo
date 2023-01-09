import React from "react";
import {useState} from 'react';
import Axios from 'axios';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ToastAndroid ,Linking } from "react-native";
import Checkbox from "expo-checkbox";
import CommonStyle from "../../common/common_style";
import RegisterStyle from "./register_style";
import baseURL from "../../baseURL";


const Register = ({navigation}: any) => {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [nicknameOk, setNicknameOk] = useState(false);
  const [passwordOk, setPasswordOk] = useState(false);
  const [termsOk, setTermsOk] = useState(false)
  const termsURL = "https://sugary-cuticle-b44.notion.site/ef5867bd9c6a4696bb6b3eecca1bc266"

  // 닉네임 중복 체크
  const checkNickname = async () => {
    try {
      console.log(nickname)
      if(nickname.length < 5) {
        showToast("5자 이상의 아이디를 설정해주세요.");
        return;
      }

      await Axios.get(baseURL + `/user/nickname/${nickname}`)
      .then(res => {
          if(res.status == 200) setNicknameOk(true)
          else {
            setNicknameOk(false);
            showToast("이미 존재하는 아이디입니다.");
          } 
        })
    } catch(err) {
      setNicknameOk(false);
      showToast("이미 존재하는 아이디입니다.");
    }
  }

  // 비밀번호 재확인 
  const checkPassword = (passwordAgain: string) => {
    if(password == passwordAgain) setPasswordOk(true)
    else setPasswordOk(false)
  }

  // 토스트 띄우기
  const showToast = (notice : string) => {
    ToastAndroid.show(notice, ToastAndroid.SHORT)
  }
  
  // 회원가입
  const addUser = () => {
    if(nicknameOk && passwordOk && termsOk) {
      Axios.post(baseURL + '/user/join', {
        nickname: nickname,
        password: password,
      }).then(res => {
          showToast('회원가입이 완료되었습니다.')
          navigation.navigate("Login")
        }).catch(err => console.log(err))
    }

    else if(!nicknameOk) {
      showToast('아이디 중복 여부를 확인해주세요.')
    }

    else if(!passwordOk) {
      showToast('비밀번호를 다시 확인해주세요')
    }

    else {
      showToast('이용약관에 동의하셔야 가입이 가능합니다.')
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={CommonStyle.container}>
      
        <View style={CommonStyle.container_header}>
          <Text style={CommonStyle.text_header}>회원가입</Text>
        </View>

        <ScrollView style={RegisterStyle.container}>
          <View style={RegisterStyle.container_input}>
            <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>아이디</Text>
              <View style={RegisterStyle.container_item_input}>
                <TextInput value={nickname} onChangeText={(nickname) => {setNickname(nickname), setNicknameOk(false)}} 
                  style={RegisterStyle.textInput_item} placeholder="아이디" />
                <TouchableOpacity style={RegisterStyle.btn_overlapping} onPress={() => checkNickname()}>
                  <Text style={RegisterStyle.btnText_overlapping}>중복확인</Text>
                </TouchableOpacity>
              </View>
              {nicknameOk === false ? (<View></View>) : (<Text style={RegisterStyle.text_notice}>* 사용 가능한 아이디입니다.</Text>)}
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
                <TextInput value={passwordAgain} onChangeText={(passwordAgain) => {setPasswordAgain(passwordAgain); checkPassword(passwordAgain)}}
                  style={RegisterStyle.textInput_item_pw} secureTextEntry={true} placeholder="비밀번호를 한번 더 입력해주세요" />
              </View>
              {passwordOk === false ? (<View></View>) : (<Text style={RegisterStyle.text_notice}>* 비밀번호 확인이 완료되었습니다.</Text>)}
            </View>

            <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>약관 동의</Text>
              <View style={RegisterStyle.container_checkbox}>
                <Checkbox
                  style={RegisterStyle.checkbox}
                  value={termsOk}
                  onValueChange={(termsOk) => {setTermsOk(termsOk); console.log(termsOk)}}
                  color={termsOk ? '#FFD542' : undefined}
                />
                <Text style={RegisterStyle.text_checkbox_title}>(필수) 이용약관 동의 </Text>
                <TouchableOpacity style={RegisterStyle.btn_checkbox_link} onPress={() => Linking.openURL(termsURL)}>
                  <Text style={RegisterStyle.text_checkbox_link}>보기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          

          <View style={RegisterStyle.container_btn}>
            <TouchableOpacity onPress={() => {addUser()}} style={RegisterStyle.btn_register}>
              <Text style={RegisterStyle.btnText_register}>회원가입 완료하기</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}


export default Register;