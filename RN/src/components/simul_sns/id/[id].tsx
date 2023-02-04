import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import CommonStyle from "../../common/common_style";
import SpeechBubble from "../../simul_common/speech_bubble";
import SimulMainStyle from "../../simul_main/simul_main_style";
import snsDetailStyle from "./[id]_style";
import Axios from "axios";
import baseURL from "../../baseURL";
import ExitBtn from "../../common/exit_btn";
import NavigateBtn from "../../simul_common/navigate_btn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SnsDetail = ({ route, navigation }: any) => {
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

    if (token != null) {
      try {
        Axios.get(baseURL + `/simulation/sns/${route.params.simulNum}`, {
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

  const setScriptItem = async () => {
    let temp_scripts = [];
    let temp_options = [];

    if (data) {
      for (let i = 0; i < data.length; i++) {
        let contents = String(data[i][0]);
        const response = Number(data[i][1]);

        const localName = await AsyncStorage.getItem("name");
        const localBank = await AsyncStorage.getItem("bank");

        if (contents.includes("$name")) {
          localName
            ? (contents = contents.replaceAll("$name", localName))
            : (contents = contents.replaceAll("$name", "홍길동"));
        }

        if (contents.includes("$bank")) {
          localBank
            ? (contents = contents.replaceAll("$name", `${localBank}은행`))
            : (contents = contents.replaceAll("$bank", "국민은행"));
        }

        if (response == 1 || response == 2)
          temp_scripts.push([contents, response]);
        else temp_options.push([contents, response]);
      }
      setScripts(temp_scripts);
      setOptions(temp_options);
    }
  };

  const showScriptItem = async () => {
    if (scripts.length == nextId.current) {
      setShowOptions(true);
      return;
    }

    const item = scripts[nextId.current];

    setVisibleScripts([...(visibleScripts || []), item]);
    nextId.current += 1;
  };

  const handleClickCorrect = async (response: number) => {
    const isCorrect = response === 3 ? true : false;
    const token = await AsyncStorage.getItem("user_Token");

    if (token != null) {
      const data = {
        type: "sns",
        simulNum: Number(route.params.simulNum),
      };

      try {
        Axios.post(baseURL + `/simulation/done`, data, {
          headers: { accessToken: `${token}` },
        }).then(() => {
          navigation.navigate("CorrectPage", {
            commentary: commentary,
            type: "sns",
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
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <Image
        source={require("../../../assets/icons/simul_message/message_bg.png")}
        style={SimulMainStyle.img_galaxy}
      />
      <View style={snsDetailStyle.phone_div}>
        <View style={snsDetailStyle.phone_detail_div}>
          <View style={snsDetailStyle.header}>
            <Image
              source={require("../../../assets/icons/simul_message/ic_profile.png")}
              style={snsDetailStyle.img_profile}
            />
            <View>
              <Text style={snsDetailStyle.text_title}>
                {route.params.title}
              </Text>
              {showOptions === false ? (
                <Text style={snsDetailStyle.press_msg_text}>
                  화면을 터치하면 대화가 나옵니다
                </Text>
              ) : (
                <Text></Text>
              )}
            </View>
            <View style={snsDetailStyle.lineStyle} />
          </View>

          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current &&
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
            style={snsDetailStyle.scroll}
            persistentScrollbar={true}
            onTouchStart={() => showScriptItem()}
          >
            <View style={snsDetailStyle.scroll_div}>
              {visibleScripts?.map((data, index) => (
                <View
                  key={index}
                  style={data[1] === 2 && { left: SCREEN_WIDTH / 4 }}
                >
                  <SpeechBubble
                    bubbleColor={data[1] === 1 ? "#f2f2f2" : "#00284E"}
                    bubbleDirection={data[1] === 1 ? "left" : "right"}
                    textColor={data[1] === 1 ? "#000000" : "#ffffff"}
                    textContent={data[0]}
                  />
                </View>
              ))}
            </View>
            {showOptions === false ? (
              <Text></Text>
            ) : (
              <View style={snsDetailStyle.choice_box}>
                <Text style={snsDetailStyle.text_notice_select}>
                  대응 방법을 선택해주세요
                </Text>
                {options?.map((item) => (
                  <View key={item}>
                    <TouchableOpacity
                      onPress={() => handleClickCorrect(item[1])}
                      style={snsDetailStyle.choice_box_child}
                    >
                      <Text style={snsDetailStyle.text_choice}>{item[0]}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
        <NavigateBtn navigation={navigation} />
      </View>
      <ExitBtn navigation={navigation} content={"피싱 체험 나가기"} />
    </SafeAreaView>
  );
};

export default SnsDetail;
