import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native'
import CommonStyle from '../common/common_style'
import QuizStyle from './quiz_style'
import baseURL from '../baseURL';

const Quiz = ({navigation}: any) => {
  const [idData, setIdData] = useState(0);
  const [qTextData, setQTextData] = useState();
  const [aTextData, setATextData] = useState([]);
  const [answerData, setAnswerData] = useState();
  const [showCommentary, setShowCommentary] = useState(false);
  const [quizResult, setQuizResult] = useState('');
  const [commentaryData, setCommentaryData] = useState();

  const fetchQuiz = async () => {
    Axios.get("http://172.30.1.85:5000"+ '/quiz')    // 나중에 baseURL로 변경해야 함
    .then(res => {
      setIdData(Number(res.data[0]['id']))
      setQTextData(res.data[0]['qText'])
      setATextData((res.data[0]['aText']).split(','))
      setAnswerData(res.data[0]['answer'])
      setCommentaryData(res.data[0]['commentary'])
      setShowCommentary(false)
    })
  }

  const check_answer = (answer: String) => {
    setShowCommentary(true)

    if(answer == answerData) {
      setQuizResult("정답입니다!")
    }

    else {
      setQuizResult("오답입니다!")
    }
  }

  const move_back = async () => {
    var backId = idData - 2
    await Axios.get("http://172.30.1.85:5000"+ '/quiz/' + String(backId))
    .then(res => {
      fetchQuiz()
    })
    
  }

  const move_next = async () => {
    await Axios.get("http://172.30.1.85:5000"+ '/quiz/' + String(idData))
    .then(res => {
      fetchQuiz()
    })
    
  }

  useEffect(() => {
    fetchQuiz();
  }, [])

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.title}>피싱 문제 풀기</Text>
      </View>


      <View style={QuizStyle.container_question}>
        <Text style={QuizStyle.text_question}>Q. {qTextData}</Text>
      </View>

      { showCommentary === false ? (
        <View style={QuizStyle.container_option}>
          {aTextData.map((item) => <TouchableOpacity onPress={() => check_answer(item)} style={QuizStyle.btn_container_option}><Text style={QuizStyle.btn_text}>{item}</Text></TouchableOpacity>)}
        </View>
      ) : (
        <View style={QuizStyle.container_commentary}>
          <Text style={QuizStyle.text_quizResult}>{quizResult}</Text>
          <Text style={QuizStyle.text_commentary}>{commentaryData}</Text>
        </View>
      )
      
      }


      <View style={QuizStyle.container_navigator}>
        <TouchableOpacity onPress={move_back} style={QuizStyle.btn_container_back}><Text style={QuizStyle.btn_text}>이전 문제</Text></TouchableOpacity>
        <TouchableOpacity onPress={move_next} style={QuizStyle.btn_container_next}><Text style={QuizStyle.btn_text}>다음 문제</Text></TouchableOpacity>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={CommonStyle.btnText_exit}>문제 나가기</Text></TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default Quiz;