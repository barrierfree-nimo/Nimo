import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  Linking,
  StatusBar
} from "react-native";
import CommonStyle from "../common/common_style";
import SettingStyle from "./setting_style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ExitBtn from "../common/exit_btn";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Setting = ({ route, navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef<Modal>(null);
  const notice =
    "https://sugary-cuticle-b44.notion.site/9669f75d847248a99f7c727cf0cd423b";
  const contact = "https://forms.gle/xdjSQYDyKP1NtJ7z8";

  const logout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("AuthStackNavigator");
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
            <Text style={SettingStyle.text_info_title}>아이디</Text>
            <Text style={SettingStyle.text_info_value}>{route.params.nickname}</Text>
          </View>
          <View style={SettingStyle.container_info_item}>
            <Text style={SettingStyle.text_info_title}>체험 완료율</Text>
            <Text style={SettingStyle.text_info_value}>
              {Math.floor(route.params.donePercent)} %
            </Text>
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
        </View>
      </View>
      <ExitBtn navigation={navigation} content={"설정 나가기"} />
    </SafeAreaView>
  );
};


export default Setting;
