import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import baseURL from "../baseURL";
import CommonStyle from "../common/common_style";
import SimulMainStyle from "../simul_main/simul_main_style";
import SimulVoiceStyle from "./simul_voice_style";
import NavigateBtn from "../simul_common/navigate_btn";
import MessageCard from "./messageCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface VoiceContent {
  simulNum: number;
  title: string;
  commentary: string;
  done: boolean;
}

//   "simulNum": 1,
//   "title": "지인 사칭형 - 핸드폰 수리",
//   "commentary": "이렇게 지인을 사칭하며 악성 링크의 클릭을 유도하는 문자는 메신저 피싱의 전형적인 수법입니다! 주의하세요!"
//   "done" : true

const VoiceSimul = ({ navigation }: any) => {
  const [simulList, setSimulList] = useState<VoiceContent[]>([]);

  useEffect(() => {
    fetchSimulVoice();
  }, []);

  const fetchSimulVoice = async () => {
    try {
      const token = await AsyncStorage.getItem('user_Token')
      Axios.get(baseURL + "/simulation/voice", {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        setSimulList(res.data);
        console.log(res.data)
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
      <Image
        source={require("../../assets/icons/simul_voice/voice_bg_white.png")}
        style={SimulMainStyle.img_galaxy}
      />
      {/* 스마트폰 */}
      <View style={SimulVoiceStyle.phone_div}>
        <View style={SimulVoiceStyle.voice_div}>
          <Text style={SimulVoiceStyle.text_title}>최근 통화</Text>
          <ScrollView>
            
            <View style={SimulVoiceStyle.msg_card_div}>
              {simulList?.map(({ simulNum, title, commentary, done }) => (
                <TouchableOpacity key={simulNum} onPress={() => handleOnPress(simulNum)}>
                  <MessageCard
                    key={simulNum}
                    simulNum={simulNum}
                    title={title}
                    commentary={commentary}
                    done={done}
                    navigation={navigation}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          
        </View>

        {/* 이동버튼 */}
        <NavigateBtn navigation={navigation} />
      </View>

      {/* 체험나가기 버튼 */}
      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <View>
            <Text style={CommonStyle.exit_btn_text}>체험 나가기</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default VoiceSimul;
