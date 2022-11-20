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

const SCREEN_WIDTH = Dimensions.get("window").width;

const CorrectPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/icons/simul_message/message_bg.png")}
        style={styles.img_bg}
      />
      <View style={styles.yellow_box}>
        <Text style={styles.text_title}>정답입니다!</Text>
        <Text style={styles.text_content}>
          링크를 통해 스마트폰을 원격으로 조정할 수 있는 앱이 설치될 수
          있습니다!
        </Text>
        <Text style={styles.text_content}>
          신원이 불분명한 번호로 온 문자, 본인과 관련없는 내용의 문자에 있는
          링크는 절대 클릭하지 마세요!
        </Text>
      </View>
      {/* 이동버튼 */}
      <View style={styles.navigate_btn_container}>
        <TouchableOpacity style={styles.navigate_btn}>
          <Text style={styles.navigate_btn_text}>이전 화면</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigate_btn}>
          <Text style={styles.navigate_btn_text}>체험 첫화면</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.exit_btn}>
        <TouchableOpacity>
          <Text style={styles.text_exit}>체험 나가기</Text>
        </TouchableOpacity>
      </View>
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
  yellow_box: {
    alignItems: "center",
    justifyContent: "center",
    top: 100,
    width: SCREEN_WIDTH - 100,
    height: "auto",
    backgroundColor: "blue",
    padding: 30,
    paddingBottom: 90,
    borderRadius: 15,
  },
  text_title: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "900",
  },
  text_content: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "600",
    top: 40,
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

export default CorrectPage;
