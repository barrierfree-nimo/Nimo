import React, { useState } from "react";
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import CommonStyle from "../common/common_style";
import LoginStyle from "./login_style";
import baseURL from "../baseURL";

const Login = ({ navigation }: any) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const showToast = () => {
    ToastAndroid.show("유효하지 않은 계정입니다.", ToastAndroid.SHORT);
  };

  const userLogin = async () => {
    try {
      await Axios.post(baseURL + "/user/login", {
        nickname: nickname,
        password: password,
      })
        .then((res) => {
          if (res.status == 200) {
            const token = String(res.data["token"]["accessToken"]);
            AsyncStorage.setItem("user_Token", token);
            AsyncStorage.setItem("user_nickname", nickname);
            navigation.replace("MainStackNavigator");
          }
        })
        .catch((err) => {
          console.log(err);
          showToast();
        });
    } catch (error) {
      console.log(error);
      showToast();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={CommonStyle.container}>
        <View style={LoginStyle.container_login_title}>
          <Text style={LoginStyle.text_title}>피싱백신</Text>
          <Text style={LoginStyle.text_login}>로그인</Text>
        </View>

        <KeyboardAvoidingView style={LoginStyle.container}>
          <View style={LoginStyle.container_login_input}>
            <TextInput
              value={nickname}
              style={LoginStyle.textInput_login}
              onChangeText={(nickname) => setNickname(nickname)}
              placeholder="아이디"
            />
            <TextInput
              value={password}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry={true}
              style={LoginStyle.textInput_login}
              placeholder="비밀번호"
            />
          </View>

          <View style={LoginStyle.container_login_btn}>
            <TouchableOpacity
              onPress={() => {
                userLogin();
                Keyboard.dismiss();
              }}
              style={LoginStyle.btn_login}
            >
              <Text style={LoginStyle.btnText_login}>로그인하기</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={LoginStyle.btn_register}
            >
              <Text style={LoginStyle.btnText_login}>회원가입하기</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
