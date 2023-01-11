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
import ExitBtn from "../../common/exit_btn";
import NavigateBtn from "../../simul_common/navigate_btn";
import MessageCard from "../../simul_message/messageCard";
import SimulSnsStyle from "./simul_sns_style";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface MsgContent {
  simulNum: number;
  title: string;
  commentary: string;
  done: string;
}

const SnsSimul = ({ navigation }: any) => {
  const [simulList, setSimulList] = useState<MsgContent[]>([]);

  useEffect(() => {
    fetchSimulMsg();
  }, []);

  const fetchSimulMsg = async () => {
    try {
      const token = await AsyncStorage.getItem("user_Token");
      Axios.get(baseURL + "/simulation/sns", {
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

  const handleOnPress = (simulNum: number, title: string) => {
    navigation.navigate("SnsDetail", {
      simulNum: simulNum,
      title: title,
    });
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Image
        source={require("../../../assets/icons/simul_sns/sns_bg_white.png")}
        style={SimulMainStyle.img_galaxy}
      />

      <View style={SimulSnsStyle.phone_div}>
        <View style={SimulSnsStyle.sns_div}>
          <View style={SimulSnsStyle.sns_div_title}>
            <Image
              source={require("../../../assets/icons/simul_sns/ic_sns.png")}
              style={SimulSnsStyle.ic_sns}
              resizeMode="contain"
            />
            <Text style={SimulSnsStyle.text_title}>Talk</Text>
          </View>

          <ScrollView>
            <View style={SimulSnsStyle.msg_card_div}>
              {simulList?.map(({ simulNum, title, commentary, done }) => (
                <TouchableOpacity
                  onPress={() => handleOnPress(simulNum, title)}
                >
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

export default SnsSimul;
