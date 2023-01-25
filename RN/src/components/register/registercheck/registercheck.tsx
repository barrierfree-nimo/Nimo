import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../../common/common_style";
import RegisterCheckStyle from "./registercheck_style";

const RegisterCheck = ({navigation}: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={RegisterCheckStyle.container}>
        <View style={RegisterCheckStyle.container_notice}>
          <View style={RegisterCheckStyle.container_title}>
            <View style={RegisterCheckStyle.container_title_row}>
              <Text style={RegisterCheckStyle.title_yellow}>회원가입</Text>
              <Text style={RegisterCheckStyle.title_blue}>이</Text>          
            </View>
            <Text style={RegisterCheckStyle.title_blue}>완료되었습니다</Text>
          </View>
          

          <View style={RegisterCheckStyle.container_contents}>
            <Text style={RegisterCheckStyle.text_contents}>추가정보를 입력하시면</Text>
            <Text style={RegisterCheckStyle.text_contents}>맞춤형 피싱 체험이 제공됩니다</Text>
          </View>
        </View>

        <View style={RegisterCheckStyle.container_btn}>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterInfo")} style={RegisterCheckStyle.btn_yes}>
            <Text style={RegisterCheckStyle.btn_text_yes}>추가정보 입력하기</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")} style={RegisterCheckStyle.btn_no}>
            <Text style={RegisterCheckStyle.btn_text_no}>괜찮아요</Text>
          </TouchableOpacity>
        </View>
      </View>
          
    </SafeAreaView>
  )
}


export default RegisterCheck;