import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  ToastAndroid
} from "react-native";
import CommonStyle from "../common/common_style";
import QuizStyle from "./quiz_style";
import baseURL from "../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Quiz = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [idData, setIdData] = useState(0);
  const [qTextData, setQTextData] = useState();
  const [aTextData, setATextData] = useState([]);
  const [answerData, setAnswerData] = useState();
  const [showCommentary, setShowCommentary] = useState(false);
  const [quizResult, setQuizResult] = useState("");
  const [commentaryData, setCommentaryData] = useState();

  useEffect(() => {
    fetchQuiz()
  }, []);

  const showToast = () => {
    ToastAndroid.show('더이상 불러올 문제가 없습니다.', ToastAndroid.SHORT)
  }

  const fetchQuiz = async () => {
    try {
      const token = await AsyncStorage.getItem('user_Token')

      if(token != null) {
        //console.log("QUIZ TOKEN : " + token)
        
        try {
          Axios.get(baseURL + "/quiz", {
            headers: {
              'accessToken': `${token}`
            }
          }).then((res) => {
            if(res.status == 200) {
              //console.log(res.data)
              setIdData(Number(res.data[0]["id"]));
              setQTextData(res.data[0]["qText"]);
              setATextData(res.data[0]["aText"].split(","));
              setAnswerData(res.data[0]["answer"]);
              setCommentaryData(res.data[0]["commentary"]);
              setShowCommentary(false);
            }
          });
        } catch(err) {
          console.log(err)
        }
      } 
    } catch(e) {
      console.log(e)
    }

    setIsLoading(false)    
  };

  const check_answer = (answer: String) => {
    setShowCommentary(true);

    if (answer == answerData) {
      setQuizResult("정답입니다!");
    } else {
      setQuizResult("오답입니다!");
    }
  };

  const move_back = async () => {
    var backId = idData - 2;
    const token = await AsyncStorage.getItem('user_Token')

    if(token != null) {
      await Axios.get(baseURL + "/quiz/" + String(backId), {
        headers: { 'accessToken': `${token}` }
      }).then((res) => {
          fetchQuiz();
        });
    }
  };

  const move_next = async () => {
    const token = await AsyncStorage.getItem('user_Token')

    if(token != null) {
      await Axios.get(baseURL + "/quiz/" + String(idData), {
        headers: { 'accessToken': `${token}` }
      }).then((res) => {
          fetchQuiz();
        });
    }
  };

  

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.text_header}>피싱 문제 풀기</Text>
      </View>

      <View style={QuizStyle.container_question}>
        <Text style={QuizStyle.text_question_num}>문제 {idData}.</Text> 
        <Text style={QuizStyle.text_question}>{qTextData}</Text>
      </View>

      {showCommentary === false ? (
        <View style={QuizStyle.container_option}>
          {aTextData.map((item) => (
            <TouchableOpacity key={item}
              onPress={() => check_answer(item)}
              style={QuizStyle.btn_container_option}
            >
              <Text style={QuizStyle.btn_text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={QuizStyle.container_commentary}>
          <Text style={QuizStyle.text_quizResult}>{quizResult}</Text>
          <Text style={QuizStyle.text_commentary}>{commentaryData}</Text>
        </View>
      )}

      <View style={QuizStyle.container_navigator}>
        <TouchableOpacity
          onPress={move_back}
          style={QuizStyle.btn_container_back}>
            <Image source={require("../../assets/icons/quiz/ic_quiz_move_back.png")} />
            <Text style={QuizStyle.btn_move_text}>이전 문제</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={move_next}
          style={QuizStyle.btn_container_next}>
            <Image source={require("../../assets/icons/quiz/ic_quiz_move_next.png")} />
            <Text style={QuizStyle.btn_move_text}>다음 문제</Text>
        </TouchableOpacity>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={CommonStyle.btnText_exit}>피싱 문제 나가기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
