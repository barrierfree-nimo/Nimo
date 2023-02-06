import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import CommonStyle from "../common/common_style";
import InfoStyle from "./info_style";

const Info = ({navigation}: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <View style={CommonStyle.container_header}>
        <View>
          
          <Text style={CommonStyle.text_header}>정보 얻기</Text>
        </View>
        
      </View>

      <View style={InfoStyle.container_contents}>
        <View style={InfoStyle.container_definition}>
          <Text style={InfoStyle.text_definition_title}>💡 피싱이란 ?</Text>
          <Text style={InfoStyle.text_definition_contents}>피싱은 '개인정보'를 '낚는다'는 뜻을 가진 합성어입니다. 주로 전화, 문자, 메신저 등을 통해 피해자의 개인정보나 금융정보를 탈취하는 수법을 이용합니다.</Text>
        </View>

        <View style={InfoStyle.container_menu}>
          <TouchableOpacity
            onPress={() => navigation.navigate("InfoPrecaution")}
            style={InfoStyle.btn_menu}
          >
            <Text style={InfoStyle.btnText_menu}>피싱 예방법 알아보기</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => navigation.navigate("InfoHelp")}
            style={InfoStyle.btn_menu}
          >
            <Text style={InfoStyle.btnText_menu}>피싱을 당했어요</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={CommonStyle.btnText_exit}>정보얻기 나가기</Text></TouchableOpacity>
      </View>

    
    </SafeAreaView>


  )
}


export default Info;