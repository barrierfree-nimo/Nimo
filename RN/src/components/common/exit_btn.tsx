import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CommonStyle from "../common/common_style";

interface ExitBtnProps {
  content: string;
  navigation: any;
}

const ExitBtn = (props: ExitBtnProps) => {
  const { content, navigation } = props;
  return (
    <TouchableOpacity
      style={CommonStyle.container_exit}
      onPress={() => navigation.navigate("Main")}
    >
      <View>
        <Text style={CommonStyle.exit_btn_text}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExitBtn;
