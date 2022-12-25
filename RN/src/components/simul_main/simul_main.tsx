import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import CommonStyle from "../common/common_style";
import SimulMainStyle from "./simul_main_style";

const SimulMain = ({ navigation }: any) => {
  const [push, setPush] = useState<string>("message");
  const [messageType, setMessageType] = useState<string>("red");
  const [snsType, setSnsType] = useState<string>("red");
  const [callType, setCallType] = useState<string>("red");

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Image
        source={require("../../assets/icons/simul_main/galaxy.png")}
        style={SimulMainStyle.img_galaxy}
      />
      {/* 스마트폰 */}
      <View style={SimulMainStyle.phone_div}>
        {/* 앱 푸시 바 */}
        <View style={SimulMainStyle.phone_push_div}>
          {push === "sns" && (
            <TouchableOpacity
              onPress={() => navigation.navigate("MessageSimul")}
            >
              <Image
                source={require("../../assets/icons/simul_main/sns_push.png")}
                style={SimulMainStyle.img_push}
              />
            </TouchableOpacity>
          )}
          {push === "message" && (
            <TouchableOpacity
              onPress={() => navigation.navigate("MessageSimul")}
            >
              <Image
                source={require("../../assets/icons/simul_main/message_push.png")}
                style={SimulMainStyle.img_push}
              />
            </TouchableOpacity>
          )}
          {push === "call" && (
            <TouchableOpacity>
              <Image
                source={require("../../assets/icons/simul_main/call_push.png")}
                style={SimulMainStyle.img_push}
              />
            </TouchableOpacity>
          )}
        </View>
        {/*  앱 바탕 */}
        <View style={SimulMainStyle.phone_app_div}>
          <>
            <Image
              source={require("../../assets/icons/simul_main/ic_app1.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app2.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app3.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app4.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app5.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app6.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app7.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app8.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app9.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app10.png")}
              style={SimulMainStyle.img_app_icon}
            />
            <Image
              source={require("../../assets/icons/simul_main/ic_app11.png")}
              style={SimulMainStyle.img_app_icon}
            />
          </>
          {/*  SNS */}
          <TouchableOpacity>
            {push === "sns" && snsType === "star" && (
              <Image
                source={require(`../../assets/icons/simul_main/sns_star.png`)}
                style={SimulMainStyle.img_app_icon}
              />
            )}
            {push === "sns" && snsType === "red" && (
              <Image
                source={require(`../../assets/icons/simul_main/sns_red.png`)}
                style={SimulMainStyle.img_app_icon}
              />
            )}
            {push !== "sns" && (
              <Image
                source={require(`../../assets/icons/simul_main/sns_default.png`)}
                style={SimulMainStyle.img_app_icon}
              />
            )}
          </TouchableOpacity>
        </View>
        {/*  앱 하단바 */}
        <View style={SimulMainStyle.phone_bottom_div}>
          {/*  MSG */}
          <TouchableOpacity onPress={() => navigation.navigate("MessageSimul")}>
            {push === "message" && messageType === "star" && (
              <Image
                source={require(`../../assets/icons/simul_main/message_star.png`)}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            )}
            {push === "message" && messageType === "red" && (
              <Image
                source={require(`../../assets/icons/simul_main/message_red.png`)}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            )}
            {push !== "message" && (
              <Image
                source={require("../../assets/icons/simul_main/message_default.png")}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            )}
          </TouchableOpacity>

          {/*  앱 서랍장 */}
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/simul_main/app_container.png")}
              style={SimulMainStyle.img_bottom_app_icon}
            />
          </TouchableOpacity>

          {/*  CALL */}
          <TouchableOpacity onPress={() => {navigation.navigate("VoiceSimulMain")}}>
            {push === "call" && callType === "star" && (
              <Image
                source={require(`../../assets/icons/simul_main/call_star.png`)}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            )}
            {push === "call" && callType === "red" && (
              <Image
                source={require(`../../assets/icons/simul_main/call_red.png`)}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            )}
            {push !== "call" && (
              <Image
                source={require("../../assets/icons/simul_main/call_default.png")}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* 이동버튼 */}
      <View style={SimulMainStyle.exit_div}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <View style={SimulMainStyle.exit_btn}>
            <Text style={SimulMainStyle.exit_btn_text}>체험 나가기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SimulMain;
