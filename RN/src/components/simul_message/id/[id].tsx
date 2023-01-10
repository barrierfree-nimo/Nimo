import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import CommonStyle from "../../common/common_style";
import SpeechBubble from "../../simul_common/speech_bubble";
import SimulMainStyle from "../../simul_main/simul_main_style";
import msgDetailStyle from "./[id]_style";
import Axios from "axios";
import baseURL from "../../baseURL";
import ExitBtn from "../../simul_common/exit_btn";
import NavigateBtn from "../../simul_common/navigate_btn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_WIDTH = Dimensions.get("window").width;

//response 1은 발신자, 2는 수신자, 3은 정답, 4는 오답
const MessageDetail = ({ route, navigation }: any) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [scripts, setScripts] = useState<any[]>();
  const [filteredScripts, setFilteredScripts] = useState<any[]>();
  const [commentary, setCommentary] = useState<string>();
  const [correct, setCorrect] = useState<string>();
  const [wrong, setWrong] = useState<string>();
  const [visibleScripts, setVisibleScripts] = useState<any[]>([]);
  const [visibleNum, setVisibleNum] = useState<number>(0);
  const [showChoice, setShowChoice] = useState<boolean>(false);

  useEffect(() => {
    fetchSimulMsgDetail();
  }, []);

  const fetchSimulMsgDetail = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      Axios.get(baseURL + `/simulation/msg/${route.params.simulNum}`, {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        setScripts(res.data.scripts);
        setCommentary(res.data.commentary);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let arr = [];
    if (scripts) {
      setVisibleScripts([...(visibleScripts || []), scripts[0]]);
      setVisibleNum(0);
      for (let i = 0; i < scripts?.length; i++) {
        const text = scripts[i][0];
        const responseType = scripts[i][1];
        if (responseType === 1 || responseType === 2) {
          arr.push(scripts[i]);
        } else if (responseType === 3) {
          setCorrect(text);
        } else if (responseType === 4) {
          setWrong(text);
        }
      }
      setFilteredScripts(arr);
    }
  }, [scripts]);

  const addScript = () => {
    setVisibleNum((prev) => prev + 1);
  };

  useEffect(() => {
    if (filteredScripts) {
      visibleNum === filteredScripts.length
        ? setShowChoice(true)
        : setVisibleScripts([...visibleScripts, filteredScripts[visibleNum]]);
    }
  }, [visibleNum]);

  const handleClickCorrect = (isCorrect: boolean) => {
    navigation.navigate("CorrectPage", {
      commentary: commentary,
      type: "msg",
      simulNum: route.params.simulNum,
      correct: isCorrect,
    });
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Image
        source={require("../../../assets/icons/simul_message/message_bg.png")}
        style={SimulMainStyle.img_galaxy}
      />
      {/* 폰 화면 */}
      <View style={msgDetailStyle.phone_div}>
        <View style={msgDetailStyle.phone_detail_div}>
          {/* 헤더 */}
          <View style={msgDetailStyle.header}>
            <Image
              source={require("../../../assets/icons/simul_message/ic_profile.png")}
              style={msgDetailStyle.img_profile}
            />
            <View>
              <Text style={msgDetailStyle.text_title}>지인 사칭형 피싱</Text>
            </View>
            <View style={msgDetailStyle.lineStyle} />
          </View>
          {/* 대화창 */}
          <TouchableOpacity
            style={msgDetailStyle.text_container}
            onPress={() => addScript()}
          >
            <Text style={msgDetailStyle.press_msg_text}>
              화면을 클릭하시면 메세지가 나옵니다
            </Text>
            <ScrollView
              ref={scrollViewRef}
              onContentSizeChange={() =>
                scrollViewRef.current &&
                scrollViewRef.current.scrollToEnd({ animated: true })
              }
              style={msgDetailStyle.scroll}
              persistentScrollbar={true}
            >
              {visibleScripts?.map((data) => (
                <View
                  style={[
                    {
                      left:
                        data[1] === 1 ? SCREEN_WIDTH / 30 : SCREEN_WIDTH / 4,
                    },
                  ]}
                >
                  <SpeechBubble
                    bubbleColor={data[1] === 1 ? "#f2f2f2" : "#00284E"}
                    bubbleDirection={data[1] === 1 ? "left" : "right"}
                    textColor={data[1] === 1 ? "#000000" : "#ffffff"}
                    textContent={data[0]}
                  />
                </View>
              ))}
              <View
                style={[
                  msgDetailStyle.choice_box,
                  showChoice ? { display: "flex" } : { display: "none" },
                ]}
              >
                <Text style={msgDetailStyle.text_notice_select}>
                  대응 방법을 선택해주세요
                </Text>
                <TouchableOpacity
                  onPress={() => handleClickCorrect(true)}
                  style={msgDetailStyle.choice_box_child}
                >
                  <Text style={msgDetailStyle.text_choice}>{correct}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleClickCorrect(false)}
                  style={msgDetailStyle.choice_box_child}
                >
                  <Text style={msgDetailStyle.text_choice}>{wrong}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </TouchableOpacity>
        </View>
        <NavigateBtn navigation={navigation} />
      </View>
      <ExitBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default MessageDetail;
