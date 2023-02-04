import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CommonStyle from "./common_style";

interface ExitBtnProps {
  content: string;
  navigation: any;
}

const BackBtn = (props: ExitBtnProps) => {
  const { content, navigation } = props;
  return (
    <TouchableOpacity
      style={CommonStyle.container_exit}
      onPress={() => navigation.goBack()}
    >
      <View>
        <Text style={CommonStyle.exit_btn_text}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BackBtn;
