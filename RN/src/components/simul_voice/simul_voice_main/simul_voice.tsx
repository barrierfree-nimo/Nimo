import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
  StatusBar
} from "react-native";
import baseURL from "../../baseURL";
import CommonStyle from "../../common/common_style";
import SimulMainStyle from "../../simul_main/simul_main_style";
import SimulVoiceStyle from "./simul_voice_style";
import NavigateBtn from "../../simul_common/navigate_btn";
import MessageCard from ".././messageCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ExitBtn from "../../common/exit_btn";

interface VoiceContent {
  simulNum: number;
  title: string;
  commentary: string;
  done: string;
}

const VoiceSimul = ({ navigation }: any) => {
  const [simulList, setSimulList] = useState<VoiceContent[]>([]);

  useEffect(() => {
    fetchSimulVoice();
  }, []);

  const fetchSimulVoice = async () => {
    try {
      const token = await AsyncStorage.getItem("user_Token");
      Axios.get(baseURL + "/simulation/voice", {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        setSimulList(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnPress = (simulNum: number) => {
    navigation.navigate("VoiceDetail", {
      simulNum: simulNum,
    });
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <Image
        source={require("../../../assets/icons/simul_voice/voice_bg_white.png")}
        style={SimulMainStyle.img_galaxy}
      />
      <View style={SimulVoiceStyle.phone_div}>
        <View style={SimulVoiceStyle.voice_div}>
          <View style={SimulVoiceStyle.voice_div_title}>
            <Text style={SimulVoiceStyle.text_title}>최근 통화</Text>
            <Image
              source={require("../../../assets/icons/simul_voice/ic_phone.png")}
              style={SimulVoiceStyle.ic_phone}
              resizeMode="contain"
            />
          </View>

          <ScrollView>
            <View style={SimulVoiceStyle.msg_card_div}>
              {simulList?.map(({ simulNum, title, commentary, done }) => (
                <TouchableOpacity onPress={() => handleOnPress(simulNum)}>
                  <MessageCard key={simulNum} title={title} done={done} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <NavigateBtn navigation={navigation} />
      </View>
      <ExitBtn navigation={navigation} content={"피싱 체험 나가기"} />
    </SafeAreaView>
  );
};

export default VoiceSimul;
