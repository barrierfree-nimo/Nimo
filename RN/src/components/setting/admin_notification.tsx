import React, {useState, useEffect} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CommonStyle from "../common/common_style";
import BackBtn from '../common/back_btn';
import Axios from "axios";
import baseURL from "../baseURL";

const SCREEN_WIDTH = Dimensions.get("window").width;

const AdminNotification = ({ navigation }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const showToast = (notice : string) => {
    ToastAndroid.show(notice, ToastAndroid.SHORT);
  };

  const sendNotification = async () => {
    if(title == "") {
      showToast("제목을 입력해주세요");
      return;
    }

    if(content == "") {
      showToast("내용을 입력해주세요");
      return;
    }

    const token = await AsyncStorage.getItem("user_Token");
    console.log(token)
    
    try {
      await Axios.post(baseURL + "/notification/send", 
        { 
          title: title, 
          content: content 
        },
        { 
          headers: { accessToken: `${token}`} 
        }
      ).then((res) => {
        if(res.status == 200) {
          showToast(res.data["msg"]);
        }
        else {
          showToast(res.data["msg"]);
        }
      })

    } catch(error) {
      console.log(error)
    }

  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.text_header}>알림 보내기</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={(title) => setTitle(title)}
          placeholder="Title"
        />

        <TextInput
          style={styles.textInput}
          value={content}
          onChangeText={(content) => setContent(content)}
          placeholder="Contents"
        />

        <TouchableOpacity 
          style={styles.btn} 
          onPress={() => sendNotification()}
        >
          <Text style={styles.text_btn}>알림 전송하기</Text>
        </TouchableOpacity>
      </View>

      <BackBtn navigation={navigation} content={"뒤로 가기"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: 'center'
  },
  textInput: {
    width: SCREEN_WIDTH - 80,
    height: 60,
    marginBottom: 30,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 18,
  },
  text_btn: {
    alignSelf: "center",
    fontSize: 27,
    fontWeight: "200",
    color: "#FFFFFF"
  },
  btn: {
    width: SCREEN_WIDTH - 80,
    height: 70,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#00284E',
  }
});

export default AdminNotification;
