import React, {useState, useEffect} from "react";
import Axios from "axios";
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import CommonStyle from "../common/common_style";
import MainStyle from "./main_style";
import baseURL from "../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Main = ({ navigation }: any) => {
  const [nickname, setNickname] = useState('니모');
  const [donePercent, setDonePercent] = useState(50);
  

  useEffect(() => {
    setUserInfo()
  })

  const setUserInfo = async () => {
    let token 
    try {
      token = await AsyncStorage.getItem('user_Token')
      if(token != null) {
        Axios.get(baseURL + "/main", {
          headers: {
            'accessToken': `${token}`
          }
        }).then((res) => {
          setNickname(String(res.data["nickname"]));
          setDonePercent(Number(100 * res.data["done"] / res.data['all'] ));
        });
      }
    } catch(err) {
      console.log(err)
    }
    
  }

  const clear = async () => {
    try {
      await AsyncStorage.clear();
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar />
      <TouchableOpacity style={MainStyle.btn_tutorial}>
        <Text style={MainStyle.btnText_tutorial}>어플사용설명서</Text>
      </TouchableOpacity>

      <View style={MainStyle.container_progress}>
        <Text style={MainStyle.title_main}>체험 완료도</Text>
        <View style={MainStyle.container_progress_detail}>
          <Image
            source={require("../../assets/images/main_progress.png")}
            style={MainStyle.img_progress}
          />
          <View style={MainStyle.container_progress_text}>
            <Text style={MainStyle.text_progress}>
              {`${nickname}님의 체험 완료도는 \n`}
              <Text style={MainStyle.text_progress_percent}>{`${Math.floor(donePercent)}% 입니다`}</Text>
            </Text>
            
          </View>
          
        </View>
      </View>

      <View style={MainStyle.container_menu}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SimulMain")}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>피싱 체험하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Quiz")}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>피싱 퀴즈 풀기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Community")}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>소통하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => clear()}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>정보 얻기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
