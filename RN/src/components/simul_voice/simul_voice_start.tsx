import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import CommonStyle from "../common/common_style";

const VoiceSimulStart = ({navigation} : any) => {
  

  return (
    <SafeAreaView style={styles.container_voice_simul}>
      <View style={CommonStyle.container_contents}>
        <Image
          source={require("../../assets/icons/simul_voice/voice_bg.png")}
          style={styles.img_galaxy}         
        />

        <View style={styles.container_phone}>
          <Text style={styles.text_phoneNum}>010-XXXX-XXXX</Text>
          <TouchableOpacity style={styles.btn_call}>
            <Image source={require("../../assets/icons/simul_voice/ic_call.png")}/>
            <Text style={styles.text_btn_call_swipe}>{`	〉〉`}</Text>
            <Text style={styles.text_btn_call}>전화받기</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={CommonStyle.btnText_exit}>체험 나가기</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )



};

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

const styles = StyleSheet.create({
  container_voice_simul: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#00284E'
  },  
  img_galaxy: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  container_phone: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  text_phoneNum: {
    marginTop: 130,
    marginBottom: 150,
    fontSize: 35,
    fontWeight: "500",
    color: '#FFFFFF', 
  },
  btn_call: {
    display: "flex",
    flexDirection: "row",
    width: SCREEN_WIDTH - 130,
    marginTop: 70,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "rgba( 255, 255, 255, 0.55 )",
  },
  text_btn_call_swipe: {
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: '#FFFFFF', 
  },
  text_btn_call: {
    flex: 1,
    paddingRight: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: '#FFFFFF', 
    textAlign: "right"
  }
  
});

export default VoiceSimulStart; 

