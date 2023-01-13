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

      <View style={styles.container_contents}>
        <View style={styles.container_info}>
          <Text style={styles.text_title}>나의 정보</Text>
          <View style={styles.container_info_item}>
            <Text style={styles.text_info_title}>아이디</Text>
            <Text style={styles.text_info_value}>{route.params.nickname}</Text>
          </View>
          <View style={styles.container_info_item}>
            <Text style={styles.text_info_title}>체험 완료율</Text>
            <Text style={styles.text_info_value}>
              {Math.floor(route.params.donePercent)} %
            </Text>
          </View>
        </View>

        <View style={styles.container_setting}>
          <TouchableOpacity
            style={styles.btn_setting}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.title_setting}>로그아웃하기</Text>
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
            <View style={styles.container_modal}>
              <View style={styles.container_modal_main}>
                <Text style={styles.text_modal_question}>
                  로그아웃 하시겠습니까?
                </Text>
                <View style={styles.container_modal_main_options}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible), logout();
                    }}
                  >
                    <Text style={styles.text_modal_option}>네</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.text_modal_option}>아니오</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.btn_setting}
            onPress={() => Linking.openURL(notice)}
          >
            <Text style={styles.title_setting}>공지사항</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn_setting}
            onPress={() => Linking.openURL(contact)}
          >
            <Text style={styles.title_setting}>문의하기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ExitBtn navigation={navigation} content={"설정 나가기"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container_contents: {
    flex: 1,
    width: SCREEN_WIDTH,
    padding: 30,
  },
  container_info: {
    marginHorizontal: 5,
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  text_title: {
    color: "#00284E",
    fontSize: 19,
    fontWeight: "900",
    marginBottom: 10,
  },
  container_info_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginVertical: 10,
  },
  text_info_title: {
    fontSize: 15,
    fontWeight: "500",
    color: "#707070",
  },
  text_info_value: {
    fontSize: 15,
  },
  container_setting: {
    marginTop: 30,
    alignItems: "center",
  },
  btn_setting: {
    width: SCREEN_WIDTH - 70,
    height: 60,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#00284E",
  },
  title_setting: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  container_modal: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  container_modal_main: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  container_modal_main_options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },
  text_modal_question: {
    fontSize: 16,
    fontWeight: "900",
    color: "#848484",
  },
  text_modal_option: {
    width: 65,
    height: 27,
    fontSize: 14,
    fontWeight: "900",
    backgroundColor: "#848484",
    borderRadius: 20,
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 10,
    marginHorizontal: 20,
    color: "#FFFFFF",
  },
});

export default Setting;
