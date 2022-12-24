import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import CommonStyle from '../common/common_style';
import SpeechBubble from '../simul_common/speech_bubble';
import { Audio } from 'expo-av';

const VoiceSimulMain = ({navigation} : any) => {
  const [ ok, setOk ] = useState(false);
  const [sound, setSound] = useState();

  const start = async () => {
    setOk(true);
  }

  const scripts = ["안녕하세요", "고객님", "행복은행입니다"]

  // async function playSound() {
  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync( require('../../assets/voices/test01.mp3') );
  //   setSound(sound);

  //   console.log("Playing Sound");
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //   ? () => {
  //     console.log('Unloading Sound');
  //     sound.unloadAsync()
  //   }
  //   :undefined;
  // }, [sound])

  return (
    <SafeAreaView style={styles.container_voice_simul}>
      <View style={CommonStyle.container_contents}>
        <Image
          source={require("../../assets/icons/simul_voice/voice_bg.png")}
          style={styles.img_galaxy}         
        />

        { ok === false ? (
          <View style={styles.container_phone}>
            <Text style={styles.text_phoneNum}>02-XXXX-XXXX</Text>
            <TouchableOpacity onPress={() => start()} style={styles.btn_call}>
              <Image source={require("../../assets/icons/simul_voice/ic_call.png")}/>
              <Text style={styles.text_btn_call_swipe}>{`	〉〉`}</Text>
              <Text style={styles.text_btn_call}>전화받기</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.container_phone}>
            <Text style={styles.text_phoneNum}>02-XXXX-XXXX</Text>
            <Text style={styles.text_callTime}>00:24</Text>
            <ScrollView style={styles.container_bubble_voice}>
              {scripts.map((item) => (
                <View style={styles.bubble_voice}>
                  <SpeechBubble 
                  bubbleColor="#f5ee64"
                  bubbleDirection="left"
                  textColor="#000000"
                  textContent={item} />
                </View>
                
              ))}
            </ScrollView>
          </View>
        ) }        
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
    flex: 1,
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
    fontSize: 35,
    fontWeight: "500",
    color: '#FFFFFF', 
  },  
  btn_call: {
    display: "flex",
    flexDirection: "row",
    width: SCREEN_WIDTH - 130,
    marginTop: 250,
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
  },
  text_callTime: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "500",
    color: '#FFFFFF', 
  },
  container_bubble_voice: {
    width: SCREEN_WIDTH,
    marginTop: 15,
    paddingHorizontal: 40,
    alignContent: 'center',
  },  
  bubble_voice: {
    padding: 15
  }
});

export default VoiceSimulMain; 