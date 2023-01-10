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
  const [data, setData] = useState<any[]>();
  const [scripts, setScripts] = useState<any[]>([]);
  const [visibleScripts, setVisibleScripts] = useState<any[]>();
  const [options, setOptions] = useState<any[]>([]);
  const [commentary, setCommentary] = useState<string>("");
  const [showOptions, setShowOptions] = useState(false);
  const nextId = useRef<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = await AsyncStorage.getItem("user_Token");

    if(token != null) {
      try {
        Axios.get(baseURL + `/simulation/msg/${route.params.simulNum}`, {
          headers: {
            accessToken: `${token}`,
          },
        }).then((res) => {
          setData(res.data.scripts);
          setCommentary(String(res.data.commentary));
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setScriptItem();
  }, [data]);

  // Data to [Scripts or Options]
  const setScriptItem = async () => {
    let temp_scripts = [];
    let temp_options = [];

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const contents = String(data[i][0]);
        const response = Number(data[i][1]);

        if (response == 1 || response == 2)
          temp_scripts.push([contents, response]);
        else temp_options.push([contents, response]);
      }
      setScripts(temp_scripts);
      setOptions(temp_options);
    }
  };

  // 화면 터치 시 말풍선 보이게
  const showScriptItem = async () => {
    if (scripts.length == nextId.current) {
      setShowOptions(true);
      return;
    }

    const item = scripts[nextId.current];

    setVisibleScripts([...(visibleScripts || []), item]);
    nextId.current += 1;
  };

  // 대응방법 선택 시 >> 완료 처리
  const handleClickCorrect = async (response: number) => {
    const isCorrect = response === 3 ? true : false;
    const token = await AsyncStorage.getItem("user_Token");

    if (token != null) {
      const data = {
        type: "msg",
        simulNum: Number(route.params.simulNum),
      };

      try {
        Axios.post(baseURL + `/simulation/done`, data, {
          headers: { accessToken: `${token}` },
        }).then(() => {
          navigation.navigate("CorrectPage", {
            commentary: commentary,
            type: "msg",
            simulNum: route.params.simulNum,
            correct: isCorrect,
          });
        });
      } catch (err) {
        console.log(err);
      }
    }
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
              <Text style={msgDetailStyle.text_title}>{route.params.title}</Text>
              {showOptions === false ? (
                <Text style={msgDetailStyle.press_msg_text}>화면을 터치하면 대화가 나옵니다</Text>
              ) : (
                <Text></Text>
              )}
            </View>
            <View style={msgDetailStyle.lineStyle} />
          </View>

          {/* 대화창 */}
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current &&
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
            style={msgDetailStyle.scroll}
            persistentScrollbar={true}
            onTouchStart={() => showScriptItem()}
          >
            {visibleScripts?.map((data) => (
              <View
                key={data[0]}
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
            {showOptions === false ? (
              <Text></Text>
            ) : (
              <View style={msgDetailStyle.choice_box}>
                <Text style={msgDetailStyle.text_notice_select}>
                  대응 방법을 선택해주세요
                </Text>
                {options?.map((item) => (
                  <View key={item}>
                    <TouchableOpacity
                      onPress={() => handleClickCorrect(item[1])}
                      style={msgDetailStyle.choice_box_child}>
                      <Text style={msgDetailStyle.text_choice}>{item[0]}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
        <NavigateBtn navigation={navigation} />
      </View>
      <ExitBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default MessageDetail;
