import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../common/common_style";

const Info = ({navigation}: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.text_header}>정보 얻기</Text>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={CommonStyle.btnText_exit}>정보얻기 나가기</Text></TouchableOpacity>
      </View>

    
    </SafeAreaView>


  )
}


export default Info;