import React from "react";
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import CommonStyle from "../common/common_style";
import MainStyle from "./main_style";

const Main = ({ navigation }: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar />
      <TouchableOpacity style={MainStyle.btn_tutorial}>
        <Text style={MainStyle.btnText_tutorial}>어플사용설명서</Text>
      </TouchableOpacity>

      <View style={MainStyle.container_progress}>
        <Text style={MainStyle.title_main}>체험 완료도</Text>
        <View style={MainStyle.container_progress_detail}>
          <Image
            source={require("../../assets/images/nimo.png")}
            style={MainStyle.img_progress}
          />
          <Text style={MainStyle.text_progress}>
            니모님의 체험 완료도는 {"\n"}45% 입니다
          </Text>
        </View>
      </View>

      <View style={MainStyle.container_menu}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SimulMain")}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>피싱 체험하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Quiz")}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>피싱 퀴즈 풀기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Community")}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>소통하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Info")}
          style={MainStyle.btn_menu}
        >
          <Text style={MainStyle.btnText_menu}>정보 얻기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
