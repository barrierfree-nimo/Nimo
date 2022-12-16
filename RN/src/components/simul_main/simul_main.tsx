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

      {/*  앱 바탕 */}
      <View style={styles.app_div}>
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

      {/*  앱 서랍장 */}
      <TouchableOpacity>
        <Image
          source={require("../../assets/icons/simul_main/app_container.png")}
          style={[styles.img_app_icon, { top: 600, right: -40 }]}
        />
      </TouchableOpacity>

      {/*  MSG */}
      <TouchableOpacity onPress={() => navigation.navigate("MessageSimul")}>
        {push === "message" && messageType === "star" && (
          <Image
            source={require(`../../assets/icons/simul_main/message_star.png`)}
            style={[styles.img_app_icon, { top: 580, left: 65 }]}
          />
        )}
        {push === "message" && messageType === "red" && (
          <Image
            source={require(`../../assets/icons/simul_main/message_red.png`)}
            style={[styles.img_app_icon, { top: 580, left: 65 }]}
          />
        )}
        {push !== "message" && (
          <Image
            source={require("../../assets/icons/simul_main/message_default.png")}
            style={[styles.img_app_icon, { top: 600, left: 85 }]}
          />
        )}
      </TouchableOpacity>

      {/*  CALL */}
      <TouchableOpacity>
        {push === "call" && callType === "star" && (
          <Image
            source={require(`../../assets/icons/simul_main/call_star.png`)}
            style={[styles.img_app_icon, { top: 580, right: 75 }]}
          />
        )}
        {push === "call" && callType === "red" && (
          <Image
            source={require(`../../assets/icons/simul_main/call_red.png`)}
            style={[styles.img_app_icon, { top: 580, right: 75 }]}
          />
        )}
        {push !== "call" && (
          <Image
            source={require("../../assets/icons/simul_main/call_default.png")}
            style={[styles.img_app_icon, { top: 600, right: 80 }]}
          />
        )}
      </TouchableOpacity>

      <View>
        {push === "sns" && (
          <TouchableOpacity onPress={() => navigation.navigate("MessageSimul")}>
            <Image
              source={require("../../assets/icons/simul_main/sns_push.png")}
              style={styles.img_push}
            />
          </TouchableOpacity>
        )}
        {push === "message" && (
          <TouchableOpacity onPress={() => navigation.navigate("MessageSimul")}>
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
      {/* 이동버튼 */}
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
  img_galaxy: {
    position: "absolute",
    width: SCREEN_WIDTH - 20,
    height: SCREEN_HEIGHT - 100,
    marginTop: 20,
    resizeMode: "stretch",
  },
  app_div: {
    width: SCREEN_WIDTH - 80,
    height: SCREEN_HEIGHT - 400,
    marginTop: 120,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  img_app_icon: {
    width: SCREEN_WIDTH / 6,
    height: SCREEN_WIDTH / 6,
  },
  img_push: {
    position: "absolute",
    top: 60,
    left: -160,
    width: SCREEN_WIDTH - 100,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
  },
  exit_btn: {
    position: "absolute",
    width: SCREEN_WIDTH - 150,
    height: 60,

    alignItems: "center",
    justifyContent: "center",
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

export default SimulMain;
