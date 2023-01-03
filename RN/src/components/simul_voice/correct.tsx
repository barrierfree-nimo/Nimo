import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";
import CommonStyle from "../common/common_style";
import ExitBtn from "../simul_common/exit_btn";
import NavigateBtn from "../simul_common/navigate_btn";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CorrectPageVoice = ({ route, navigation }: any) => {
  const [commentary, setCommentary] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [titleText, setTitleText] = useState<string>("");

  useEffect(() => {
    setCommentary(route.params.commentary);
    setIsCorrect(route.params.correct);
  }, []);

  useEffect(() => {
    isCorrect ? setTitleText("정답입니다!") : setTitleText("오답입니다!");
  }, [isCorrect]);

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Image
        source={require("../../assets/icons/simul_voice/voice_bg_purple.png")}
        style={styles.img_bg}
      />
      <View
        style={[
          styles.color_box,
          { backgroundColor: isCorrect ? "blue" : "red" },
        ]}
      >
        <Text style={styles.text_title}>{titleText}</Text>
        <Text style={styles.text_content}>{commentary}</Text>
      </View>

      {/* 이동버튼 */}
      <NavigateBtn navigation={navigation} />

      {/* 체험나가기 버튼 */}
      <ExitBtn navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img_bg: {
    position: "absolute",
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT - 100,
    marginTop: 20,
    resizeMode: "stretch",
  },
  color_box: {
    alignItems: "center",
    justifyContent: "center",
    top: 100,
    width: SCREEN_WIDTH - 100,
    height: "auto",
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
  exit_div: {
    position: "absolute",
    top: SCREEN_HEIGHT - 60,
    width: SCREEN_WIDTH - 80,
    alignItems: "center",
    justifyContent: "center",
  },
  exit_btn: {
    width: SCREEN_WIDTH - 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4D4D",
    borderRadius: 15,
    overflow: "hidden",
  },
  exit_btn_text: {
    fontSize: 30,
    fontWeight: "800",
  },
});

export default CorrectPageVoice;
