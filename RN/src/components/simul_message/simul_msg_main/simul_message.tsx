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
import baseURL from "../../baseURL";
import CommonStyle from "../../common/common_style";
import SimulMainStyle from "../../simul_main/simul_main_style";
import ExitBtn from "../../simul_common/exit_btn";
import NavigateBtn from "../../simul_common/navigate_btn";
import MessageCard from "../messageCard";
import SimulMsgStyle from "./simul_message_style";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface MsgContent {
  simulNum: number;
  title: string;
  commentary: string;
  done: boolean;
}

const MessageSimul = ({ navigation }: any) => {
  const [simulList, setSimulList] = useState<MsgContent[]>([]);

  useEffect(() => {
    fetchSimulMsg();
  }, []);

  const fetchSimulMsg = async () => {
    try {
      const token = await AsyncStorage.getItem("user_Token");
      Axios.get(baseURL + "/simulation/msg", {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        setSimulList(res.data);
        console.log(simulList)
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
        style={SimulMainStyle.img_galaxy}
      />

      {/* 스마트폰 */}
      <View style={SimulMsgStyle.phone_div}>
        <View style={SimulMsgStyle.message_div}>
          <Text style={SimulMsgStyle.text_title}>메세지</Text>
          <ScrollView>
            <View style={SimulMsgStyle.msg_card_div}>
              {simulList?.map(({ simulNum, title, commentary, done }) => (
                <TouchableOpacity onPress={() => handleOnPress(simulNum)}>
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
      <ExitBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default MessageSimul;
