import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import CommonStyle from "../../common/common_style";
import InfoStyle from "../info_style";
import BackBtn from "../../common/back_btn";

const InfoPrecaution = ({navigation}: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <View style={CommonStyle.container_header}>
        <View>          
          <Text style={CommonStyle.text_header}>피싱 예방법</Text>
        </View>
      </View>

      <ScrollView style={InfoStyle.container_contents_scroll}>
        <View style={InfoStyle.container_precaution}>
          <Text style={InfoStyle.text_detail_title}>🗣  보이스 피싱</Text>

          <Text style={InfoStyle.text_detail_contents}># 정부기관이 개인정보 요구?</Text>
          <View style={InfoStyle.container_precaution_item}>            
            <Text style={InfoStyle.text_detail_commentary}>검찰, 금융감독원 등의 공공기관은 절대로 전화를 통해 개인정보를 요구하지 않습니다!</Text>
          </View>

          <Text style={InfoStyle.text_detail_contents}># 통장, 체크카드 양도 요구?</Text>
          <View style={InfoStyle.container_precaution_item}>            
            <Text style={InfoStyle.text_detail_commentary}>범죄에 악용될 수 있으므로 통장과 체크카드는 절대 타인에게 양도하면 안됩니다!</Text>
          </View>          
        </View>

        <View style={InfoStyle.container_precaution}>
          <Text style={InfoStyle.text_detail_title}>✉️  메신저 피싱</Text>

          <Text style={InfoStyle.text_detail_contents}># 문자 속 흥미로운 링크?</Text>
          <View style={InfoStyle.container_precaution_item}>            
            <Text style={InfoStyle.text_detail_commentary}>문자를 통해 출처가 불분명한 링크를 클릭하는 경우 민감한 개인정보가 유출될 가능성이 있습니다!</Text>
          </View>

          <Text style={InfoStyle.text_detail_contents}># 급하게 돈이 필요한 지인?</Text>
          <View style={InfoStyle.container_precaution_item}>            
            <Text style={InfoStyle.text_detail_commentary}>지인이나 자녀를 사칭한 문자로 다급하게 금융정보나 이체를 요구하는 경우 피싱을 의심해야 합니다. 반드시 본인에게 전화를 걸어 사실을 확인하세요!</Text>
          </View>         
        </View>
      </ScrollView>

      <BackBtn navigation={navigation} content={"뒤로 가기"} />    
    </SafeAreaView>
  )
}

export default InfoPrecaution;