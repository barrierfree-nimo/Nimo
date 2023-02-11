import React, { useState, useEffect } from "react";
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
import { useIsFocused } from "@react-navigation/native";
import * as Notifications from 'expo-notifications';

const Main = ({ navigation }: any) => {
  const [nickname, setNickname] = useState("니모");
  const [donePercent, setDonePercent] = useState(50);
  const [pushOk, setPushOk] = useState(false);
  const [pushString, setPushString] = useState("알림 끄기");
  const isFocused = useIsFocused();

  useEffect(() => {
    return () => {
      setUserInfo();
    };
  }, [isFocused]);

  useEffect(() => {
    setUserInfo();
  }, []);

  const setUserInfo = async () => {
    let token;
    
    try {
      token = await AsyncStorage.getItem("user_Token");
      if (token != null) {
        Axios.get(baseURL + "/main", {
          headers: {
            accessToken: `${token}`,
          },
        }).then((res) => {
          setNickname(String(res.data["nickname"]));
          setDonePercent(Number((100 * res.data["done"]) / res.data["all"]));
          res.data["pushOk"] == 0  ? setPushOk(false) : setPushOk(true);
          console.log(res.data)
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // AsyncStorage
  const local = async () => {
    const name = await AsyncStorage.getItem("name");
    const bank = await AsyncStorage.getItem("bank");
    const gender = await AsyncStorage.getItem("gender");
    const interest = await AsyncStorage.getItem("interest");
    console.log(name + ' ' + bank + ' ' + gender + ' ' + interest);
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />      
      <View style={MainStyle.container_header}>
        <Text style={MainStyle.text_header}>피싱백신</Text>
        <View style={MainStyle.btn_setting}>
          <TouchableOpacity
            style={MainStyle.container_setting}
            onPress={() => {
              navigation.navigate("Setting", {
                nickname: nickname,
                donePercent: donePercent,
                pushOk: pushOk
              })
            }}
          >
            <Text style={MainStyle.text_setting}>설정</Text>
            {/* <Image
              source={require("../../assets/icons/setting/setting.png")}
              style={MainStyle.img_setting}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={MainStyle.container_progress}>
        <View style={MainStyle.container_progress_detail}>
          <Image
            source={require("../../assets/images/main_progress.png")}
            style={MainStyle.img_progress}
            resizeMode="contain"
          />
          <View style={MainStyle.container_progress_text}>
            <Text style={MainStyle.text_progress}>
              {`${nickname}님의 체험 완료도는 \n`}
              <Text style={MainStyle.text_progress_percent}>{`${Math.floor(
                donePercent
              )}% 입니다`}</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={MainStyle.container_menu}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AppDoc")}
          style={MainStyle.btn_menu_tutorial}
        >
          <Text style={MainStyle.btnText_menu_tutorial}>사용 설명서 보기</Text>
        </TouchableOpacity>
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
          <Text style={MainStyle.btnText_menu}>피싱 문제 풀기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CommunityMain")}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>소통하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Info")}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>정보 얻기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
