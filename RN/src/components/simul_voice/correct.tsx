import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
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
      <View style={styles.phone_div}>
        <View style={styles.content_container}>
          <View style={styles.color_box}>
            <Image
              source={require("../../assets/images/main_progress.png")}
              style={styles.img}
            />
            <Text
              style={[
                styles.text_title,
                { color: isCorrect ? "blue" : "#AF0000" },
              ]}
            >
              {titleText}
            </Text>
            <Text style={styles.text_content}>{commentary}</Text>
          </View>
        </View>
        <NavigateBtn navigation={navigation} />
      </View>
      <ExitBtn navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  phone_div: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 120,
    justifyContent: "center",
    alignItems: "center",
  },
  content_container: {
    height: "80%",
  },
  color_box: {
    width: SCREEN_WIDTH - 100,
    alignItems: "center",
    justifyContent: "center",

    marginTop: 50,
    padding: 30,
    paddingBottom: 50,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.26)",
  },
  img: {
    alignSelf: "center",
    width: 15,
    height: 50,
    marginBottom: 5,
  },
  text_title: {
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "900",
  },
  text_content: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "600",
    top: 20,
    lineHeight: 30,
  },
});

export default CorrectPageVoice;
