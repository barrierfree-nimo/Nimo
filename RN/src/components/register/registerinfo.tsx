import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../common/common_style";

const RegisterInfo = () => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.title}>정보 입력</Text>
      </View>

      <View>
        <TouchableOpacity><Text>개인정보처리방침 확인하기</Text></TouchableOpacity>
      </View>

    
    </SafeAreaView>


  )
}


export default RegisterInfo;