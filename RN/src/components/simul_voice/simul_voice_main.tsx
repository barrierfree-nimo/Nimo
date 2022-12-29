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
import NavigateBtn from '../simul_common/navigate_btn';
import {
  InterruptionModeAndroid,
  Audio,
  ResizeMode,
  Video
} from "expo-av";

const VoiceSimulMain = ({navigation} : any) => {
  const [ ok, setOk ] = useState(false);
  //const [sound, setSound] = useState<Audio.Sound|null>(null)

  const start = async () => {
    setOk(true);
  }

  const scripts = ["안녕하세요", "고객님", "행복은행입니다"]

  const play = async () => {
    const sound = new Audio.Sound()

    await sound.loadAsync({
        uri: 'https://firebasestorage.googleapis.com/v0/b/phishing-vaccine.appspot.com/o/voice%2F1%2F1.mp3?alt=media&token=3697b50e-9da3-4ee5-9a00-6b8d8590d832'
    })

    await sound.playAsync()
  }

  useEffect(() => {
    play()
  })

  

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
            <View style={styles.container_btn_call}>
              <TouchableOpacity onPress={() => start()}>
                <Image source={require("../../assets/icons/simul_voice/ic_call.png")}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require("../../assets/icons/simul_voice/ic_call_red.png")}/>
              </TouchableOpacity>
            </View>
            
          </View>
        ) : (
          <View style={styles.container_phone}>
            <Text style={styles.text_phoneNum}>02-XXXX-XXXX</Text>
            <Text style={styles.text_callTime}>00:24</Text>
            <ScrollView style={styles.container_bubble_voice}>
              {scripts.map((item) => (
                <View key={item} style={styles.bubble_voice}>
                  <SpeechBubble 
                  bubbleColor="#FFFFFF"
                  bubbleDirection="left"
                  textColor="#000000"
                  textContent={item} />
                </View>
                
              ))}
            </ScrollView>
          </View>
        ) }        

        <NavigateBtn navigation={navigation} />
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
  container_btn_call: {
    width: SCREEN_WIDTH,
    flexDirection:'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    marginTop: 200
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