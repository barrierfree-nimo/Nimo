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
      <MessageCard title="대출빙자형 피싱" content="dfdf" check={true} />
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
