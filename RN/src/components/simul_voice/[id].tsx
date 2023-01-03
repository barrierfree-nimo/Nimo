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
  ToastAndroid
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../baseURL";
import { Sound } from 'expo-av/build/Audio';

const VoiceDetail = ({route, navigation} : any) => {
  const [ ok, setOk ] = useState(false);
  const [ data, setData ] = useState<any[]>();
  const [ scripts, setScripts ] = useState<any[]>([]);
  const [ options, setOptions ] = useState<any[]>([]);
  const [ commentary, setCommentary ] = useState('');

  const start = async () => {
    setOk(true);
  }

  //const scripts = ["안녕하세요", "고객님", "행복은행입니다"]

  useEffect(() => {
    fetchScripts()
  }, [])

  const fetchScripts = async () => {
    const token = await AsyncStorage.getItem('user_Token')

    if(token != null) {
      try {
        Axios.get(`http://172.30.1.85:5000`+ `/simulation/voice/${route.params.simulNum}`, {
          headers: {
            'accessToken': `${token}`
          }
        }).then((res) => {
          setData(res.data.scripts)
          setCommentary(String(res.data.commentary))
        });
      } catch(err) {
        console.log(err);
      }
    }
  } 

  useEffect(() => {
    setScriptItem()
  }, [data])

  const setScriptItem = async () => {
    let temp_scripts = []
    let temp_options = []

    if(data) {
      for(let i=0 ; i<data.length ; i++) {
        const contents = String(data[i]['contents'])
        const response = Number(data[i]['response'])

        const url = String(data[i]['url'])
        
        if(response == 1 || response == 2) temp_scripts.push( [contents, response, url] )
        else temp_options.push( [contents, response] )
      }
      setScripts(temp_scripts)
      setOptions(temp_options)
    }
  }



  const play = async () => {
    const sound = new Audio.Sound();
    await sound.loadAsync({
        uri: 'https://firebasestorage.googleapis.com/v0/b/phishing-vaccine.appspot.com/o/voice%2F1%2F1.mp3?alt=media&token=3697b50e-9da3-4ee5-9a00-6b8d8590d832'
    })
    await sound.playAsync()

  }


  const handleClickCorrect = (response: number) => {
    const isCorrect = (response === 3) ? true : false
    navigation.navigate("CorrectPageVoice", {
      commentary: commentary,
      correct: isCorrect,
    });
  };


  return (
    <SafeAreaView style={styles.container_voice_simul}>
      <View style={CommonStyle.container_contents}>
        <Image
          source={require("../../assets/icons/simul_voice/voice_bg_purple.png")}
          style={styles.img_galaxy}         
        />

        { ok === false ? (
          <View style={styles.container_phone}>
            <Image 
              source={require("../../assets/icons/simul_voice/voice_profile.png")}
              style={styles.img_profile}
            />
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
            <TouchableOpacity onPress={() => play()}><Text>play</Text></TouchableOpacity>
            <ScrollView 
              style={styles.container_bubble_voice}>
                
              {scripts?.map((item) => (
                <View key={item} style={[
                  {
                    left: item[1] === 1 ? SCREEN_WIDTH / 30 : SCREEN_WIDTH / 4,
                  }]}>
                  <SpeechBubble 
                    bubbleColor={item[1] === 1 ?"#a7c8fc" : "#f2f2f2"}
                    bubbleDirection={item[1]  === 1 ? "left" : "right"}
                    textColor="#000000"
                    textContent={item[0]} />
                </View>
              ))}

              <View style={styles.container_option}>
                {options?.map((item) => (
                    <TouchableOpacity onPress={() => handleClickCorrect(item[1])}  key={item} style={styles.btn_option}>
                      <Text style={styles.text_option}>{item[0]}</Text>
                    </TouchableOpacity>
                ))}
              </View>
              
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
  img_profile: {
    marginTop: 80,
    width: 90,
    height: 90,
  },
  text_phoneNum: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "500",
    color: '#FFFFFF', 
  },  
  text_callTime: {
    marginTop: 10,
    fontSize: 17,
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
  container_bubble_voice: {
    width: SCREEN_WIDTH,
    marginTop: 20,
    marginBottom: 120,
    paddingTop: 10,
    paddingHorizontal: 40,
    alignContent: 'center',
  },  
  container_option: {
    width: SCREEN_WIDTH - 80,
    marginVertical: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
  btn_option: {
    width: SCREEN_WIDTH - 100,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10
  },
  text_option: {
    fontSize: 18,
    fontWeight: '500'
  }
});

export default VoiceDetail; 