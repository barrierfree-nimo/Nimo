import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import CommonStyle from "../../common/common_style";
import SimulMainStyle from "../../simul_main/simul_main_style";
import SpeechBubble from "../../simul_common/speech_bubble";
import NavigateBtn from "../../simul_common/navigate_btn";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../baseURL";
import ExitBtn from "../../common/exit_btn";

const VoiceDetail = ({ route, navigation }: any) => {
  const [ok, setOk] = useState(false);
  const [data, setData] = useState<any[]>();
  const [scripts, setScripts] = useState<any[]>([]);
  const [visibleScripts, setvisibleScripts] = useState<any[]>();
  const [options, setOptions] = useState<any[]>([]);
  const [commentary, setCommentary] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const nextId = useRef<number>(0);
  const sound = useRef(new Audio.Sound());
  const scrollViewRef = useRef<ScrollView>(null);

  const start = async () => {
    setOk(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = await AsyncStorage.getItem("user_Token");

    if (token != null) {
      try {
        Axios.get(baseURL + `/simulation/voice/${route.params.simulNum}`, {
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
        const contents = String(data[i]["contents"]);
        const response = Number(data[i]["response"]);

        const url = String(data[i]["url"]);

        if (response == 1 || response == 2)
          temp_scripts.push([contents, response, url]);
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

    await sound.current.unloadAsync();
    await sound.current.loadAsync({
      uri: item[2],
    });
    await sound.current.playAsync();

    setvisibleScripts([...(visibleScripts || []), item]);
    nextId.current += 1;
  };

  const handleClickCorrect = async (response: number) => {
    const isCorrect = response === 3 ? true : false;
    const token = await AsyncStorage.getItem("user_Token");

    if (token != null) {
      const data = {
        type: "voice",
        simulNum: Number(route.params.simulNum),
      };

      try {
        Axios.post(baseURL + `/simulation/done`, data, {
          headers: { accessToken: `${token}` },
        }).then(() => {
          navigation.navigate("CorrectPageVoice", {
            commentary: commentary,
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
        source={require("../../../assets/icons/simul_voice/voice_bg_purple.png")}
        style={SimulMainStyle.img_galaxy}
      />
      <View style={styles.phone_div}>
        <View style={styles.content_container}>
          {ok === false ? (
            <View style={styles.container_phone}>
              <Text style={styles.text_phoneNum}>010-1234-5678</Text>
              <Image
                source={require("../../../assets/icons/simul_voice/voice_profile.png")}
                style={styles.img_profile}
              />

              <View style={styles.container_btn_call}>
                <TouchableOpacity onPress={() => start()}>
                  <Image
                    source={require("../../../assets/icons/simul_voice/ic_call.png")}
                  />
                  <Text style={styles.text_call}>전화 받기</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require("../../../assets/icons/simul_voice/ic_call_red.png")}
                  />
                  <Text style={styles.text_call}>전화 끊기</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.container_phone}>
              <Text style={styles.text_phoneNum}>010-1234-5678</Text>
              {showOptions === false ? (
                <Text style={styles.text_callTime}>
                  아래 화면을 터치하면 대화가 나옵니다
                </Text>
              ) : (
                <Text></Text>
              )}
              <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() =>
                  scrollViewRef.current?.scrollToEnd({ animated: true })
                }
                style={styles.container_bubble_voice}
                onTouchStart={() => showScriptItem()}
              >
                {visibleScripts?.map((item) => (
                  <View
                    key={item[0]}
                    style={[
                      {
                        left:
                          item[1] === 1 ? SCREEN_WIDTH / 30 : SCREEN_WIDTH / 4,
                      },
                    ]}
                  >
                    <SpeechBubble
                      bubbleColor={item[1] === 1 ? "#a7c8fc" : "#FFFFFF"}
                      bubbleDirection={item[1] === 1 ? "left" : "right"}
                      textColor="#000000"
                      textContent={item[0]}
                    />
                  </View>
                ))}

                {showOptions === false ? (
                  <View style={SimulMainStyle.container_pointer}>
                    <Image
                      source={require("../../../assets/icons/simul_common/pointer.png")}
                      style={SimulMainStyle.img_pointer}
                      resizeMode="contain"
                    /> 
                    <Text style={SimulMainStyle.text_pointer_voice}>터치</Text>
                </View>
                ) : (
                  <View style={styles.container_option}>
                    <Text style={styles.text_notice_select}>
                      대응 방법을 선택해주세요
                    </Text>
                    {options?.map((item) => (
                      <View key={item} style={styles.btn_option}>
                        <TouchableOpacity
                          onPress={() => handleClickCorrect(item[1])}
                        >
                          <Text style={styles.text_option}>{item[0]}</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )}
              </ScrollView>
            </View>
          )}
        </View>

        <NavigateBtn navigation={navigation} />
      </View>
      <ExitBtn navigation={navigation} content={"피싱 체험 나가기"} />
    </SafeAreaView>
  );
};

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  phone_div: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_HEIGHT - 120,
    justifyContent: "center",
    alignItems: "center",
  },
  content_container: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  container_voice_simul: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container_phone: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  img_profile: {
    marginTop: 20,
    height: 90,
  },
  text_phoneNum: {
    marginTop: 90,
    fontSize: 30,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  text_callTime: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  container_btn_call: {
    width: SCREEN_WIDTH,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 60,
    marginTop: 110,
  },
  text_call: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 5,
  },
  container_bubble_voice: {
    width: SCREEN_WIDTH,
    marginTop: 20,
    paddingTop: 10,
    paddingHorizontal: 40,
    alignContent: "center",
  },
  container_option: {
    width: SCREEN_WIDTH - 80,
    marginVertical: 10,
    paddingVertical: 20,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.38)",
    borderRadius: 20,
  },
  text_notice_select: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  btn_option: {
    width: SCREEN_WIDTH - 120,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
  },
  text_option: {
    fontSize: 17,
    fontWeight: "700",
    color: "#565656",
  },
});

export default VoiceDetail;
