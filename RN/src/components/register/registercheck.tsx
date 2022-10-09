import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../common/common_style";
import RegisterCheckStyle from "./registercheck_style";

const RegisterCheck = ({navigation}: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={RegisterCheckStyle.container_notice}>
        <Text style={RegisterCheckStyle.notice_title}>실감나는 체험을 위해{"\n"}회원님의 정보를 입력해주세요</Text>

        <View>
          <Text style={RegisterCheckStyle.notice_content1}># 맞춤형 체험 제공 가능</Text>
          <Text style={RegisterCheckStyle.notice_content1}># 지능형 범죄 예방 가능</Text>
        </View>

        <View>
          <Text style={RegisterCheckStyle.notice_content2}>입력하신 정보를 바탕으로 {"\n"}맞춤형 문제가 제공될 예정입니다.</Text>
        </View>

      </View>

      <View style={RegisterCheckStyle.container_btn}>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterInfo")} style={RegisterCheckStyle.btn_registerCheck}>
          <Text style={RegisterCheckStyle.btnText_registerCheck}>정보 입력하기</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Main")} style={RegisterCheckStyle.btn_registerCheck}>
          <Text style={RegisterCheckStyle.btnText_registerCheck}>건너뛰기</Text>
        </TouchableOpacity>
      </View>

    
    </SafeAreaView>


  )
}


export default RegisterCheck;