import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";
import CommonStyle from "../common/common_style";
import ExitBtn from "./exit_btn";
import NavigateBtn from "./navigate_btn";
import SimulMainStyle from "../simul_main/simul_main_style";
import Axios from "axios";
import baseURL from "../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const CorrectPage = ({ route, navigation }: any) => {
  const [commentary, setCommentary] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [titleText, setTitleText] = useState<string>("");

  const postDone = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      await Axios.post(
        baseURL + "/simulation/done",
        {
          type: route.params.type,
          simulNum: route.params.simulNum,
        },
        {
          headers: { accessToken: `${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCommentary(route.params.commentary);
    setIsCorrect(route.params.correct);
    postDone();
  }, []);

  useEffect(() => {
    isCorrect ? setTitleText("정답입니다!") : setTitleText("오답입니다!");
  }, [isCorrect]);

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Image
        source={require("../../assets/icons/simul_message/message_bg.png")}
        style={SimulMainStyle.img_galaxy}
      />
      <View style={styles.phone_div}>
        <View style={styles.content_container}>
          <View
            style={
              styles.color_box
            }
          >
            <Image
              source={require("../../assets/icons/simul_common/ic_correct.png")}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={[
              styles.text_title,
              { color: isCorrect ? "blue" : "red" },
            ]}>{titleText}</Text>
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
    justifyContent: 'center'
  },
  color_box: {
    width: SCREEN_WIDTH - 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    padding: 30,
    paddingBottom: 50,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  img: {
    height: 60,
    marginBottom: 10,
  },
  text_title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "900",
  },
  text_content: {
    color: "gray",
    fontSize: 19,
    fontWeight: "600",
    top: 20,
    lineHeight: 30,
  },
});

export default CorrectPage;
