import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CommonStyle from "../common/common_style";

const NavigateBtn = ({ navigation }: any) => {
  return (
    <View style={CommonStyle.navigate_btn_container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={CommonStyle.navigate_btn}
      >
        <Text style={CommonStyle.navigate_btn_text}>이전 화면</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("SimulMain")}
        style={CommonStyle.navigate_btn}
      >
        <Text style={CommonStyle.navigate_btn_text}>체험 첫화면</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigateBtn;
