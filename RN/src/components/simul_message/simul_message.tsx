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

const MessageSimul = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/icons/simul_message/message_bg.png")}
        style={styles.img_bg}
      />
      <Text style={styles.text_title}>메세지</Text>
      <MessageCard
        title="지인 사칭형 피싱"
        content="엄마 나 송아야"
        check={false}
      />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
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
});

export default MessageSimul;
