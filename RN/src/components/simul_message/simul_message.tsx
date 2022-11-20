import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";
import MessageCard from "./messageCard";

const SCREEN_WIDTH = Dimensions.get("window").width;

const MessageSimul = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/icons/simul_message/message_bg.png")}
        style={styles.img_bg}
      />
      <Text style={styles.text_title}>메세지</Text>
      <TouchableOpacity onPress={() => navigation.navigate("MessageDetail")}>
        <MessageCard
          title="지인 사칭형 피싱"
          content="엄마 나 송아야!"
          check={false}
        />
      </TouchableOpacity>
      <MessageCard
        title="지인 사칭형 피싱"
        content="민서야 잘 지내? 다름이..."
        check={false}
      />
      <MessageCard
        title="대출 빙자형 피싱"
        content="[Web발신] 국민은행 대..."
        check={true}
      />
      <MessageCard
        title="허위 정보 피싱"
        content="[국제발신] 해외직구 지..."
        check={true}
      />
      {/* 이동버튼 */}
      <View style={styles.navigate_btn_container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.navigate_btn}
        >
          <Text style={styles.navigate_btn_text}>이전 화면</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SimulMain")}
          style={styles.navigate_btn}
        >
          <Text style={styles.navigate_btn_text}>체험 첫화면</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Main")}
        style={styles.exit_btn}
      >
        <Text style={styles.text_exit}>체험 나가기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    top: 60,
    alignItems: "center",
  },
  img_bg: {
    position: "absolute",
    width: SCREEN_WIDTH - 20,
    height: 720,
    resizeMode: "stretch",
  },
  text_title: {
    top: 80,
    right: 120,
    color: "#000000",
    fontSize: 35,
    fontWeight: "900",
    marginBottom: 120,
  },
  navigate_btn_container: {
    position: "absolute",
    top: 620,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CADBE8",
    paddingVertical: 15,
  },
  navigate_btn: {
    width: 130,
    height: 50,
    padding: 10,

    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FFD542",
    borderRadius: 15,
    overflow: "hidden",
  },
  navigate_btn_text: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "800",
  },
  exit_btn: {
    width: SCREEN_WIDTH - 150,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 750,
    backgroundColor: "#FF4D4D",
    borderRadius: 15,
    overflow: "hidden",
  },
  text_exit: {
    fontSize: 30,
    fontWeight: "800",
  },
});

export default MessageSimul;
