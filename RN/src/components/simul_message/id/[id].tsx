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
import msgDetailStyle from "./[id]_style";
import Axios from "axios";
import baseURL from "../../baseURL";
import ExitBtn from "../../simul_common/exit_btn";
import NavigateBtn from "../../simul_common/navigate_btn";

const SCREEN_WIDTH = Dimensions.get("window").width;

//response 1은 발신자, 2는 수신자, 3은 정답, 4는 오답
const MessageDetail = ({ route, navigation }: any) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [scripts, setScripts] = useState<any[]>();
  const [filteredScripts, setFilteredScripts] = useState<any[]>();
  const [commentary, setCommentary] = useState<string>();
  const [correct, setCorrect] = useState<string>();
  const [wrong, setWrong] = useState<string>();

  useEffect(() => {
    fetchSimulMsgDetail();
  }, []);

  const fetchSimulMsgDetail = async () => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMiwiaWF0IjoxNjcxOTc5OTAxLCJleHAiOjE2NzIwNjYzMDF9.mLYpE6iwEsNN7zu0GkyYDsaZSno6kVXLhWvtw_pCyxo`;
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

  const handleClickCorrect = (isCorrect: boolean) => {
    navigation.navigate("CorrectPage", {
      commentary: commentary,
      correct: isCorrect,
    });
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <Image
        source={require("../../../assets/icons/simul_message/message_bg.png")}
        style={msgDetailStyle.img_bg}
      />
      {/* 폰 화면 */}
      <View style={msgDetailStyle.phone_div}>
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
        <>
          <View style={msgDetailStyle.text_container}>
            <ScrollView
              ref={scrollViewRef}
              onContentSizeChange={() =>
                scrollViewRef.current &&
                scrollViewRef.current.scrollToEnd({ animated: true })
              }
              style={msgDetailStyle.scroll}
              persistentScrollbar={true}
            >
              {filteredScripts?.map((data) => (
                <View
                  style={[
                    {
                      left:
                        data[1] === 1 ? SCREEN_WIDTH / 15 : SCREEN_WIDTH / 5,
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
              <View style={msgDetailStyle.choice_box}>
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
          </View>
        </>

        {/* 이동버튼 */}
        <NavigateBtn navigation={navigation} />
      </View>
      {/* 체험나가기 버튼 */}
      <ExitBtn navigation={navigation} />
    </SafeAreaView>
  );
};

export default MessageDetail;
