import React from "react";
import {SafeAreaView, TouchableOpacity, View, StyleSheet, Image, Text, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btn_tutorial}>
        <Text style={styles.btnText_tutorial}>어플사용설명서</Text>
      </TouchableOpacity>

      <View style={styles.container_progress}>
        <Text style={styles.title_main}>체험 완료도</Text>
        <View style={styles.container_progress_detail}>
          <Image 
            source={require('../../assets/images/nimo.png')}
            style={styles.img_progress}/>
          <Text style={styles.text_progress}>니모님의 체험 완료도는 {"\n"}45% 입니다</Text>
        </View> 
      </View>

      

      <View style={styles.container_menu}>
        <TouchableOpacity style={styles.btn_menu}><Text style={styles.btnText_menu}>피싱 체험하기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn_menu}><Text style={styles.btnText_menu}>피싱 퀴즈 풀기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn_menu}><Text style={styles.btnText_menu}>소통하기</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn_menu}><Text style={styles.btnText_menu}>정보 얻기</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center'
  },
  btn_tutorial: {
    width: SCREEN_WIDTH,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  btnText_tutorial: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "500"
  },
  title_main: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  container_progress: {
    flex: 1,
    width: SCREEN_WIDTH,
    marginTop: 20,
    padding: 20,
    backgroundColor: 'gray'
  },
  container_progress_detail: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  img_progress: {
    width: 100,
    height: 100,
  },
  text_progress: {
    color: '#FFFFFF',
    fontSize: 23,
    marginLeft: 10
  },
  container_menu: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  btn_menu: {
    width: SCREEN_WIDTH - 70,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'orange',
  },
  btnText_menu: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: "500"
  }
})

export default Main;