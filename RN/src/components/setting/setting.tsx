import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Modal,
  ToastAndroid,
  StyleSheet,
  Dimensions,
  Linking,
  StatusBar
} from "react-native";
import CommonStyle from "../common/common_style";
import SettingStyle from "./setting_style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ExitBtn from "../common/exit_btn";
import Axios from "axios";
import baseURL from "../baseURL";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Setting = ({ route, navigation }: any) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [push, setPush] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef<Modal>(null);
  

  const notice = "https://sugary-cuticle-b44.notion.site/9669f75d847248a99f7c727cf0cd423b";
  const contact = "https://forms.gle/xdjSQYDyKP1NtJ7z8";

  useEffect(() => {
    checkAdmin();
    setPush(route.params.pushOk);
  }, []);

  const checkAdmin = async () => {
    let token;
    try {
      token = await AsyncStorage.getItem("user_Token");
      await Axios.get(baseURL + "/user/checkAdmin", {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        if(res.status == 200) setIsAdmin(true);
      });      
    } catch (err) {
      console.log(err);
    }
  }

  const showToast = (notice : string) => {
    ToastAndroid.show(notice, ToastAndroid.SHORT);
  };

  const updatePushOk = async (value : boolean) => {
    
    try {
      let token;
      token = await AsyncStorage.getItem("user_Token");    
      
      const pushOk = value ? 1 : 0;
        
      await Axios.put(baseURL + `/user/push`,      
        { pushOk: pushOk },
        { headers: { accessToken: `${token}` }}
      ).then((res) => {
        if(res.status == 200) showToast('알림 설정이 변경되었습니다.')
      });      
    } catch (err) {
      console.log(err);
    }
  }

  const logout = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("user_Token");
      console.log(accessToken)
      await Axios.get(baseURL + "/notification/remove", 
        { headers: { accessToken: `${accessToken}`} }        
      ).then((res) => {
        console.log(res)
      });

      await AsyncStorage.clear();
      navigation.reset({
        index: 0,
        routes: [{name: "AuthStackNavigator"}],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.text_header}>설정</Text>
      </View>

      <View style={SettingStyle.container_contents}>
        <View style={SettingStyle.container_info}>
          <Text style={SettingStyle.text_title}>나의 정보</Text>
          <View style={SettingStyle.container_info_item}>
            <Text style={SettingStyle.text_info_title}>닉네임</Text>
            <Text style={SettingStyle.text_info_value}>{route.params.nickname}</Text>
          </View>

          <View style={SettingStyle.container_info_item}>
            <Text style={SettingStyle.text_info_title}>체험 완료율</Text>
            <Text style={SettingStyle.text_info_value}>
              {Math.floor(route.params.donePercent)} %
            </Text>
          </View>

          <View style={SettingStyle.container_info_item}>
            <Text style={SettingStyle.text_info_title}>알림 설정</Text>
            <View style={SettingStyle.container_info_item_setting}>
              {push ? (
                <Text>알림 켜기</Text>
              ) : (
                <Text>알림 끄기</Text>
              )}
              <View style={SettingStyle.container_switch}>
                <Switch
                  onValueChange={(value) => {setPush(value); updatePushOk(value)}}
                  value={push}
                  trackColor={{false: '#767577', true: '#FFD74B'}}
                  thumbColor={push ? '#DFAF05' : '#f4f3f4'}
                />
              </View>              
            </View>
          </View>
        </View>

        <View style={SettingStyle.container_setting}>
          <TouchableOpacity
            style={SettingStyle.btn_setting}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={SettingStyle.title_setting}>로그아웃하기</Text>
          </TouchableOpacity>
          <Modal
            ref={modalRef}
            animationType="fade"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={SettingStyle.container_modal}>
              <View style={SettingStyle.container_modal_main}>
                <Text style={SettingStyle.text_modal_question}>
                  로그아웃 하시겠습니까?
                </Text>
                <View style={SettingStyle.container_modal_main_options}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible), logout();
                    }}
                  >
                    <Text style={SettingStyle.text_modal_option}>네</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={SettingStyle.text_modal_option}>아니오</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={SettingStyle.btn_setting}
            onPress={() => Linking.openURL(notice)}
          >
            <Text style={SettingStyle.title_setting}>공지사항</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={SettingStyle.btn_setting}
            onPress={() => Linking.openURL(contact)}
          >
            <Text style={SettingStyle.title_setting}>문의하기</Text>
          </TouchableOpacity>

          {isAdmin ? (
            <TouchableOpacity
              style={SettingStyle.btn_setting_admin}
              onPress={() => navigation.navigate("AdminNotification")}>
              <Text style={SettingStyle.title_setting_admin}>관리자 알림 보내기</Text>
            </TouchableOpacity>
          ) : (
            <Text></Text>
          )}
          
        </View>
      </View>
      <ExitBtn navigation={navigation} content={"설정 나가기"} />
    </SafeAreaView>
  );
};


export default Setting;
