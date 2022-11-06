import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native'
import CommonStyle from '../common/common_style'
import QuizStyle from './quiz_style'
import baseURL from '../baseURL';

const Quiz = ({navigation}: any) => {
  const [quizData, setQuizData] = useState([]);

  const fetchQuiz = async () => {
    Axios.get("http://172.30.1.85:5000"+ '/quiz')    // 나중에 baseURL로 변경해야 함
    .then(res => {
      setQuizData(res.data[0])
      console.log(quizData)
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
        <Text style={QuizStyle.text_question}>Q. {quizData['qText']}</Text>
      </View>

      <View style={QuizStyle.container_option}>
        <TouchableOpacity><Text style={QuizStyle.btn_text}>{quizData['aText']}</Text></TouchableOpacity>
      </View>

      <View style={QuizStyle.container_navigator}>
        <TouchableOpacity style={QuizStyle.btn_container_back}><Text style={QuizStyle.btn_text}>이전 문제</Text></TouchableOpacity>
        <TouchableOpacity style={QuizStyle.btn_container_next}><Text style={QuizStyle.btn_text}>다음 문제</Text></TouchableOpacity>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={CommonStyle.btnText_exit}>문제 나가기</Text></TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default Quiz;