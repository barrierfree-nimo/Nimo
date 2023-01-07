import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CommonStyle from "../common/common_style";

const ExitBtn = ({ navigation }: any) => {
  return (
    <View style={CommonStyle.container_exit}>
    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
      <View>
        <Text style={CommonStyle.exit_btn_text}>피싱 체험 나가기</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default ExitBtn;
