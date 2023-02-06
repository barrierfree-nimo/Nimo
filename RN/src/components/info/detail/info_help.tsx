import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import CommonStyle from "../../common/common_style";
import InfoStyle from "../info_style";
import BackBtn from "../../common/back_btn";

const InfoHelp = ({navigation}: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <View style={CommonStyle.container_header}>
        <View>          
          <Text style={CommonStyle.text_header}>피싱을 당했어요</Text>
        </View>
      </View>

      <ScrollView style={InfoStyle.container_contents_scroll}>
        <View style={InfoStyle.container_help}>
          <Text style={InfoStyle.text_help_title_red}>🚨 신고하기</Text>

          <Text style={InfoStyle.text_detail_contents}># 경찰청 (112), 금융감독원 (1332)</Text>
          <View style={InfoStyle.container_precaution_item}>            
            <Text style={InfoStyle.text_detail_commentary}>피싱으로 인해 금전 피해가 발생한 경우에는 경찰청, 금융감독원에 피해사실을 신고해주세요!</Text>
          </View>

          <Text style={InfoStyle.text_detail_contents}># 금융회사 고객센터</Text>
          <View style={InfoStyle.container_precaution_item}>            
            <Text style={InfoStyle.text_detail_commentary}>피해가 발생한 금융기관 (은행 등) 고객센터에 전화를 걸어 지급정지를 신청해주세요!</Text>
          </View>          
        </View>
      </ScrollView>

      <BackBtn navigation={navigation} content={"뒤로 가기"} />    
    </SafeAreaView>
  )
}

export default InfoHelp;