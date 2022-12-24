import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import navigation from "../../../navigation";
import SpeechBubble from "../simul_common/speech_bubble";

const SCREEN_WIDTH = Dimensions.get("window").width;

// const simulHistory = {
//   msg_data: {
//     msg_data_list: [
//       { content: "엄마 나 송아야", response: 1 },
//       { content: "다른 연락처네?", response: 2 },
//       {
//         content:
//           "아침에 폰 액정이 깨져서 대리점에 맡겼더니 급할 때 쓰라고 빌려줬어.",
//         response: 1,
//       },
//       {
//         content:
//           "수리될 동안 엄마 전화 연동해서 잠깐 문자 받고 일하려고 하는데 http://malicious.net 클릭해서 들어와줘",
//         response: 1,
//       },
//       {
//         content: "링크를 클릭하시겠습니까?",
//         response: 1,
//       },
//     ],
//   },
// };

const MessageDetail = ({ navigation }: any) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <>
        <Image
          source={require("../../assets/icons/simul_message/message_bg.png")}
          style={styles.img_bg}
        />
        <Image
          source={require("../../assets/icons/simul_message/ic_profile.png")}
          style={styles.img_profile}
        />
        <View>
          <Text style={styles.text_title}>지인 사칭형 피싱</Text>
        </View>
        <View style={styles.lineStyle} />
      </>
      {/* 대화창 */}
      <>
        <View style={styles.text_container}>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current &&
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
          >
            {/* 첫번째 질문 */}
            <View style={[styles.child, { right: -10 }]}>
              <SpeechBubble
                bubbleColor="#f2f2f2"
                bubbleDirection="left"
                textColor="#000000"
                textContent="엄마 나 송아야"
              />
            </View>
            {/* 두번째 대답 */}
            <View
              style={[
                styles.child,
                { left: SCREEN_WIDTH - SCREEN_WIDTH / 1.4 },
              ]}
            >
              <SpeechBubble
                bubbleColor="#00284E"
                bubbleDirection="right"
                textColor="#ffffff"
                textContent="다른 연락처네?"
              />
            </View>
            {/* 세번째 응답 */}
            <View style={[styles.child, { right: -10 }]}>
              <SpeechBubble
                bubbleColor="#f2f2f2"
                bubbleDirection="left"
                textColor="#000000"
                textContent="아침에 폰 액정이 깨져서 대리점에 맡겼어ㅜㅜ"
              />
            </View>
            {/* 세번째 응답 */}
            <View
              style={[
                styles.child,
                { right: -10, marginTop: 30, marginBottom: 110 },
              ]}
            >
              <SpeechBubble
                bubbleColor="#f2f2f2"
                bubbleDirection="left"
                textColor="#000000"
                textContent="수리될 동안 엄마 폰으로 잠깐 문자 받고 일하려고 하는데 http://malicious.net 클릭해서 들어와줘"
              />
            </View>

            {/* 첫번째 대답 */}
            <View
              style={[
                styles.child,
                { left: SCREEN_WIDTH - SCREEN_WIDTH / 1.45 },
              ]}
            >
              <SpeechBubble
                bubbleColor="#00284E"
                bubbleDirection="right"
                textColor="#ffffff"
                textContent="링크를 클릭하시겠습니까?"
              />
              <View style={styles.choice_box}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CorrectPage")}
                >
                  <Text style={styles.text_choice}> 예</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("WrongPage")}
                >
                  <Text style={styles.text_choice}>아니오</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </>

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
    alignItems: "center",
    top: 60,
  },
  img_bg: {
    position: "absolute",
    width: SCREEN_WIDTH - 20,
    height: 720,
    resizeMode: "stretch",
  },
  img_profile: {
    width: 60,
    height: 60,
    marginTop: 50,
  },
  text_title: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 5,
  },
  lineStyle: {
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    width: SCREEN_WIDTH - 80,
  },
  text_container: {
    width: SCREEN_WIDTH - 80,
    height: 450,
    paddingTop: 20,
  },
  child: {
    marginBottom: 20,
  },
  choice_box: {
    flexDirection: "row",
    marginTop: 50,
  },
  text_choice: {
    height: 50,

    marginLeft: 20,
    marginRight: 10,
    padding: 15,

    fontSize: 20,
    fontWeight: "700",
    color: "#000000",

    backgroundColor: "#FFD542",
    borderRadius: 15,
    overflow: "hidden",
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
    padding: 15,

    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FFD542",
    borderRadius: 15,
    overflow: "hidden",
  },
  navigate_btn_text: {
    color: "#000000",
    fontSize: 21,
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

export default MessageDetail;
