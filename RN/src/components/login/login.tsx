import React, { useState } from "react";
import { Platform } from "react-native";
import Axios from "axios";
import Notification from "../notification/Notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
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
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  async function registerForPushNotificationsAsync(accessToken : string) {
    let pushToken;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      console.log('statue : ' + existingStatus)
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      pushToken = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(pushToken);

      await Axios.post(`http://172.30.1.85:5000` + "/notification/save", 
        { pushToken : `${pushToken}` },
        { headers: { accessToken: `${accessToken}`} }        
      ).then((res) => {
        console.log(res)
      });
      
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return pushToken;
  }

  const showToast = () => {
    ToastAndroid.show("유효하지 않은 계정입니다.", ToastAndroid.SHORT);
  };

  const userLogin = async () => {
    try {
      await Axios.post(baseURL+ "/user/login", {
        userId: userId,
        password: password,
      })
        .then((res) => {
          if (res.status == 200) {
            const token = String(res.data["token"]["accessToken"]);
            registerForPushNotificationsAsync(token)
            AsyncStorage.setItem("user_Token", token);
            navigation.reset({
              index: 0,
              routes: [{name: "MainStackNavigator"}],
            });
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
        <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
        <View style={LoginStyle.container_login_title}>
          <Text style={LoginStyle.text_title}>피싱백신</Text>
          <Text style={LoginStyle.text_login}>로그인</Text>
        </View>

        <KeyboardAvoidingView style={LoginStyle.container}>
          <View style={LoginStyle.container_login_input}>
            <TextInput
              value={userId}
              style={LoginStyle.textInput_login}
              onChangeText={(userId) => setUserId(userId)}
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
