import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../common/common_style";

const Community = ({navigation}: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.title}>소통하기</Text>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={CommonStyle.btnText_exit}>소통하기 나가기</Text></TouchableOpacity>
      </View>

    
    </SafeAreaView>


  )
}


export default Community;