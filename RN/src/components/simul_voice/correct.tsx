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
import SimulMainStyle from "../simul_main/simul_main_style";

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
        style={SimulMainStyle.img_galaxy}
      />
      <View style={[styles.color_box, { backgroundColor: isCorrect ? "rgba(151, 174, 255, 0.7)" : "rgba(255, 151, 151, 0.55)"}]}>
        <Image source={require('../../assets/images/main_progress.png')} style={{width: 20, height: 60}} />
        <Text style={[styles.text_title, { color: isCorrect ? "blue" : "#AF0000" }]}>{titleText}</Text>
        <Text style={styles.text_content}>{commentary}</Text> 
      </View>

      {/* 이동버튼 */}
      <NavigateBtn navigation={navigation} />

      {/* 체험나가기 버튼 */}
      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={CommonStyle.btnText_exit}>체험 나가기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  color_box: {
    alignItems: "center",
    justifyContent: "center",
    top: 120,
    width: SCREEN_WIDTH - 100,
    height: "auto",
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 50,
    borderRadius: 15,
  },
  text_title: {
    fontSize: 38,
    fontWeight: "900",
  },
  text_content: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "100",
    top: 20,
    lineHeight: 30
  },
});

export default CorrectPageVoice;
