import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import CommonStyle from '../common/common_style'

const Quiz = ({navigation}: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.title}>피싱 퀴즈</Text>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={CommonStyle.btnText_exit}>피싱퀴즈 나가기</Text></TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default Quiz