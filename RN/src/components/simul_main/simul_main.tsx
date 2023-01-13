import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import CommonStyle from "../common/common_style";
import ExitBtn from "../common/exit_btn";
import SimulMainStyle from "./simul_main_style";
import Axios from "axios";
import baseURL from "../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

const SimulMain = ({ navigation }: any) => {
  const [type, setType] = useState<string>("");
  const [num, setNum] = useState<number>();
  const [title, setTitle] = useState<string>("");
  const [red, setRed] = useState<string[]>();
  const isFocused = useIsFocused();

  useEffect(() => {
    return () => {
      fetchSimulMain();
    };
  }, [isFocused]);

  useEffect(() => {
    fetchSimulMain();
  }, []);

  const fetchSimulMain = async () => {
    try {
      const token = await AsyncStorage.getItem("user_Token");
      Axios.get(baseURL + "/simulation", {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        setTimeout(() => setType(res.data.type), 2000);
        setNum(res.data.num);
        setTitle(res.data.title);
        setRed(res.data.red);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const isInRed = (appType: string) => {
    if (red?.includes(appType)) return true;
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Image
        source={require("../../assets/icons/simul_main/galaxy.png")}
        style={SimulMainStyle.img_galaxy}
      />
      <View style={SimulMainStyle.phone_div}>
        <View style={SimulMainStyle.phone_push_div}>
          {type === "sns" && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SnsDetail", {
                  simulNum: num,
                  title: title,
                })
              }
            >
              <Image
                source={require("../../assets/icons/simul_main/sns_push.png")}
                style={SimulMainStyle.img_push}
              />
            </TouchableOpacity>
          )}
          {type === "msg" && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MessageDetail", {
                  simulNum: num,
                  title: title,
                })
              }
            >
              <Image
                source={require("../../assets/icons/simul_main/message_push.png")}
                style={SimulMainStyle.img_push}
              />
            </TouchableOpacity>
          )}
          {type === "voice" && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("VoiceDetail", {
                  simulNum: num,
                })
              }
            >
              <Image
                source={require("../../assets/icons/simul_main/call_push.png")}
                style={SimulMainStyle.img_push}
              />
            </TouchableOpacity>
          )}
        </View>

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

          <TouchableOpacity onPress={() => navigation.navigate("SnsSimul")}>
            {type === "sns" || isInRed("sns") ? (
              <Image
                source={require(`../../assets/icons/simul_main/sns_red.png`)}
                style={SimulMainStyle.img_app_icon}
              />
            ) : (
              <Image
                source={require(`../../assets/icons/simul_main/sns_default.png`)}
                style={SimulMainStyle.img_app_icon}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={SimulMainStyle.phone_bottom_div}>
          <TouchableOpacity onPress={() => navigation.navigate("VoiceSimul")}>
            {type === "voice" || isInRed("voice") ? (
              <Image
                source={require(`../../assets/icons/simul_main/call_red.png`)}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            ) : (
              <Image
                source={require("../../assets/icons/simul_main/call_default.png")}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/icons/simul_main/app_container.png")}
              style={SimulMainStyle.img_bottom_app_icon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("MessageSimul")}>
            {type === "msg" || isInRed("msg") ? (
              <Image
                source={require(`../../assets/icons/simul_main/message_red.png`)}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            ) : (
              <Image
                source={require("../../assets/icons/simul_main/message_default.png")}
                style={SimulMainStyle.img_bottom_app_icon}
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={SimulMainStyle.text_notice}>체험하려는 어플이나 알림을 클릭해주세요</Text>
      </View>
      <ExitBtn navigation={navigation} content={"피싱 체험 나가기"} />
    </SafeAreaView>
  );
};

export default SimulMain;
