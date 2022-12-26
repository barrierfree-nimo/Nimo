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
import MessageCard from "../messageCard";
import SimulMsgStyle from "./simul_message_style";

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
  const [simulList, setSimulList] = useState<MsgContent[]>();

  useEffect(() => {
    fetchSimulMsg();
  }, []);

  const fetchSimulMsg = async () => {
    const token = ``;
    try {
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
  const handleOnPress = () => {
    navigation.navigate("MessageDetail");
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
              <TouchableOpacity onPress={handleOnPress}>
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
        <View style={SimulMsgStyle.navigate_btn_container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={SimulMsgStyle.navigate_btn}
          >
            <Text style={SimulMsgStyle.navigate_btn_text}>이전 화면</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SimulMain")}
            style={SimulMsgStyle.navigate_btn}
          >
            <Text style={SimulMsgStyle.navigate_btn_text}>체험 첫화면</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* 체험나가기 버튼 */}
      <ExitBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default MessageSimul;
