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
import CommonStyle from "../common/common_style";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SimulMain = ({ navigation }: any) => {
  const [push, setPush] = useState<string>("message");
  const [messageType, setMessageType] = useState<string>("red");
  const [snsType, setSnsType] = useState<string>("red");
  const [callType, setCallType] = useState<string>("red");

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Image
        source={require("../../assets/icons/simul_main/galaxy.png")}
        style={styles.img_galaxy}
      />
      {/* 스마트폰 */}
      <View style={styles.phone_div}>
        {/* 앱 푸시 바 */}
        <View style={styles.phone_push_div}>
          {push === "sns" && (
            <TouchableOpacity
              onPress={() => navigation.navigate("MessageSimul")}
            >
              <Image
                source={require("../../assets/icons/simul_main/sns_push.png")}
                style={styles.img_push}
              />
            </TouchableOpacity>
          )}
          {push === "message" && (
            <TouchableOpacity
              onPress={() => navigation.navigate("MessageSimul")}
            >
              <Image
                source={require("../../assets/icons/simul_main/message_push.png")}
                style={styles.img_push}
              />
            </TouchableOpacity>
          )}
          {push === "call" && (
            <TouchableOpacity>
              <Image
                source={require("../../assets/icons/simul_main/call_push.png")}
                style={styles.img_push}
              />
            </TouchableOpacity>
          )}
        </View>
        {/*  앱 바탕 */}
        <View style={styles.phone_app_div}>
          <>
            <Image
              source={require("../../assets/icons/simul_main/ic_app1.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app2.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app3.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app4.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app5.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app6.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app7.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app8.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app9.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app10.png")}
              style={styles.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app11.png")}
              style={styles.img_app_icon}
            />
          </>
          {/*  SNS */}
          <TouchableOpacity>
            {push === "sns" && snsType === "star" && (
              <Image
                source={require(`../../assets/icons/simul_main/sns_star.png`)}
                style={styles.img_app_icon}
              />
            )}
            {push === "sns" && snsType === "red" && (
              <Image
                source={require(`../../assets/icons/simul_main/sns_red.png`)}
                style={styles.img_app_icon}
              />
            )}
            {push !== "sns" && (
              <Image
                source={require(`../../assets/icons/simul_main/sns_default.png`)}
                style={styles.img_app_icon}
              />
            )}
          </TouchableOpacity>
        </View>
        {/*  앱 하단바 */}
        <View style={styles.phone_bottom_div}>
          {/*  MSG */}
          <TouchableOpacity onPress={() => navigation.navigate("MessageSimul")}>
            {push === "message" && messageType === "star" && (
              <Image
                source={require(`../../assets/icons/simul_main/message_star.png`)}
                style={styles.img_bottom_app_icon}
              />
            )}
            {push === "message" && messageType === "red" && (
              <Image
                source={require(`../../assets/icons/simul_main/message_red.png`)}
                style={styles.img_bottom_app_icon}
              />
            )}
            {push !== "message" && (
              <Image
                source={require("../../assets/icons/simul_main/message_default.png")}
                style={styles.img_bottom_app_icon}
              />
            )}
          </TouchableOpacity>

          {/*  앱 서랍장 */}
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/simul_main/app_container.png")}
              style={styles.img_bottom_app_icon}
            />
          </TouchableOpacity>

          {/*  CALL */}
          <TouchableOpacity onPress={() => {navigation.navigate("VoiceSimulMain")}}>
            {push === "call" && callType === "star" && (
              <Image
                source={require(`../../assets/icons/simul_main/call_star.png`)}
                style={styles.img_bottom_app_icon}
              />
            )}
            {push === "call" && callType === "red" && (
              <Image
                source={require(`../../assets/icons/simul_main/call_red.png`)}
                style={styles.img_bottom_app_icon}
              />
            )}
            {push !== "call" && (
              <Image
                source={require("../../assets/icons/simul_main/call_default.png")}
                style={styles.img_bottom_app_icon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* 이동버튼 */}
      <View style={styles.exit_div}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <View style={styles.exit_btn}>
            <Text style={styles.exit_btn_text}>체험 나가기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img_galaxy: {
    position: "absolute",
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT - 100,
    marginTop: 20,
    resizeMode: "stretch",
  },
  phone_div: {
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT - 100,
    justifyContent: "center",
    alignItems: "center",
  },
  img_push: {
    width: SCREEN_WIDTH - 100,
    height: SCREEN_WIDTH / 6,
    marginTop: 20,
    resizeMode: "stretch",
  },
  phone_push_div: {
    flex: 2,
    // backgroundColor: "yellow",
    width: SCREEN_WIDTH - 80,
    justifyContent: "center",
    alignItems: "center",
  },
  phone_app_div: {
    flex: 5,
    width: SCREEN_WIDTH - 80,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "blue",
    flexWrap: "wrap",
  },
  img_app_icon: {
    width: SCREEN_WIDTH / 6,
    height: SCREEN_WIDTH / 6,
    marginTop: 20,
  },
  phone_bottom_div: {
    flex: 2,
    width: SCREEN_WIDTH - 80,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img_bottom_app_icon: {
    width: SCREEN_WIDTH / 5,
    height: SCREEN_WIDTH / 5,
  },
  exit_div: {
    width: SCREEN_WIDTH - 80,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  exit_btn: {
    width: SCREEN_WIDTH - 150,
    height: 60,
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

export default SimulMain;
