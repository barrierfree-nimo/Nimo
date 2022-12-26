import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import baseURL from "../../baseURL";
import CommonStyle from "../../common/common_style";
import ExitBtn from "../../simul_common/exit_btn";
import NavigateBtn from "../../simul_common/navigate_btn";
import MessageCard from "../messageCard";
import SimulMsgStyle from "./simul_message_style";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface MsgContent {
  simulNum: number;
  title: string;
  commentary: string;
  check: boolean;
}

//   "simulNum": 1,
//   "title": "지인 사칭형 - 핸드폰 수리",
//   "commentary": "이렇게 지인을 사칭하며 악성 링크의 클릭을 유도하는 문자는 메신저 피싱의 전형적인 수법입니다! 주의하세요!"

const MessageSimul = ({ navigation }: any) => {
  const [simulList, setSimulList] = useState<MsgContent[]>([]);

  useEffect(() => {
    fetchSimulMsg();
  }, []);

  const fetchSimulMsg = async () => {
    try {
      const token = await AsyncStorage.getItem('user_Token')
      Axios.get(baseURL + "/simulation/msg", {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        setSimulList(res.data.simul);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnPress = (simulNum: number) => {
    navigation.navigate("MessageDetail", {
      simulNum: simulNum,
    });
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Image
        source={require("../../../assets/icons/simul_message/message_bg.png")}
        style={SimulMsgStyle.img_bg}
      />

      {/* 스마트폰 */}
      <View style={SimulMsgStyle.phone_div}>
        <View style={SimulMsgStyle.message_div}>
          <Text style={SimulMsgStyle.text_title}>메세지</Text>
          <View style={SimulMsgStyle.msg_card_div}>
            {simulList?.map(({ simulNum, title, commentary, check }) => (
              <TouchableOpacity onPress={() => handleOnPress(simulNum)}>
                <MessageCard
                  key={simulNum}
                  simulNum={simulNum}
                  title={title}
                  commentary={commentary}
                  check={check}
                  navigation={navigation}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 이동버튼 */}
        <NavigateBtn navigation={navigation} />
      </View>
      {/* 체험나가기 버튼 */}
      <ExitBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default MessageSimul;
