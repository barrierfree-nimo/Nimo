import React from "react";
import { useState } from "react";
import Axios from "axios";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ToastAndroid,
  Linking,
  StatusBar
} from "react-native";
import Checkbox from "expo-checkbox";
import CommonStyle from "../../common/common_style";
import RegisterStyle from "./register_style";
import baseURL from "../../baseURL";

const Register = ({ navigation }: any) => {
  const [userId, setUserId] = useState("");
  const [userIdOk, setUserIdOk] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameOk, setNicknameOk] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [passwordOk, setPasswordOk] = useState(false);
  const [terms1Ok, setTerms1Ok] = useState(false);
  const [terms2Ok, setTerms2Ok] = useState(false);
  const terms1URL = "https://sugary-cuticle-b44.notion.site/ef5867bd9c6a4696bb6b3eecca1bc266";
  const terms2URL = "https://sugary-cuticle-b44.notion.site/e8163ea69f81486aa5f8f1fa8857cb27";


  const checkUserId = async () => {
    try {
      if (userId.length < 5) {
        showToast("5자 이상의 아이디를 설정해주세요.");
        return;
      }

      await Axios.get(baseURL + `/user/userid/${userId}`).then((res) => {
        if (res.status == 200) setUserIdOk(true);
        else {
          setUserIdOk(false);
          showToast("이미 존재하는 아이디입니다.");
        }
      });
    } catch (err) {
      setNicknameOk(false);
      showToast("이미 존재하는 아이디입니다.");
    }
  };

  const checkNickname = async () => {
    try {
      if (nickname.length < 2) {
        showToast("3자 이상의 닉네임을 설정해주세요.");
        return;
      }

      await Axios.get(baseURL + `/user/nickname/${nickname}`).then((res) => {
        if (res.status == 200) setNicknameOk(true);
        else {
          setNicknameOk(false);
          showToast("이미 존재하는 닉네임입니다.");
        }
      });
    } catch (err) {
      setNicknameOk(false);
      showToast("이미 존재하는 닉네임입니다.");
    }
  };

  const checkPassword = (passwordAgain: string) => {
    if (password == passwordAgain) setPasswordOk(true);
    else setPasswordOk(false);
  };

  const showToast = (notice: string) => {
    ToastAndroid.show(notice, ToastAndroid.SHORT);
  };

  const addUser = () => {

    navigation.navigate("RegisterCheck");

    // if(userId == "") {
    //   showToast("아이디를 입력해주세요");
    //   return;
    // }

    // if(nickname == "") {
    //   showToast("닉네임을 입력해주세요");
    //   return;
    // }

    // if (password.length < 8) {
    //   showToast("8자 이상의 비밀번호를 설정해주세요.");
    //   return;
    // }

    // if (!passwordOk) {
    //   showToast("비밀번호를 다시 확인해주세요");
    //   return;
    // }

    // if(!(terms1Ok && terms2Ok)) {
    //   showToast("모든 약관에 동의하셔야 가입이 가능합니다.");
    //   return;
    // }

    // if (userIdOk && nicknameOk && passwordOk && terms1Ok && terms2Ok) {
    //   Axios.post(baseURL + "/user/join", {
    //     user_id: userId,
    //     nickname: nickname,
    //     password: password,
    //   })
    //     .then((res) => {
    //       showToast("회원가입이 완료되었습니다.");
    //       navigation.navigate("RegisterCheck");
    //     })
    //     .catch((err) => console.log(err));
    // } else if (!userId) {
    //   showToast("아이디 중복 여부를 확인해주세요.");
    // } else if (!nicknameOk) {
    //   showToast("닉네임 중복 여부를 확인해주세요.");
    // } else if (!passwordOk) {
    //   showToast("비밀번호를 다시 확인해주세요");
    // } else {
    //   showToast("이용약관에 동의하셔야 가입이 가능합니다.");
    // }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={CommonStyle.container}>
        <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
        <View style={CommonStyle.container_header}>
          <Text style={CommonStyle.text_header}>회원가입</Text>
        </View>

        <ScrollView style={RegisterStyle.container}>
          <View style={RegisterStyle.container_input}>
            <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>아이디</Text>
              <View style={RegisterStyle.container_item_input}>
                <TextInput
                  value={userId}
                  onChangeText={(userId) => {
                    setUserId(userId), setUserIdOk(false);
                  }}
                  style={RegisterStyle.textInput_item_id}
                  placeholder="아이디"
                />
                <TouchableOpacity
                  style={RegisterStyle.btn_overlapping}
                  onPress={() => checkUserId()}>
                  <Text style={RegisterStyle.btnText_overlapping}>
                    중복확인
                  </Text>
                </TouchableOpacity>
              </View>
              {userIdOk === false ? (
                <View></View>
              ) : (
                <Text style={RegisterStyle.text_notice}>
                  * 사용 가능한 아이디입니다.
                </Text>
              )}
            </View>

            <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>닉네임</Text>
              <View style={RegisterStyle.container_item_input}>
                <TextInput
                  value={nickname}
                  onChangeText={(nickname) => {
                    setNickname(nickname), setNicknameOk(false);
                  }}
                  style={RegisterStyle.textInput_item_id}
                  placeholder="닉네임"
                />
                <TouchableOpacity
                  style={RegisterStyle.btn_overlapping}
                  onPress={() => checkNickname()}>
                  <Text style={RegisterStyle.btnText_overlapping}>
                    중복확인
                  </Text>
                </TouchableOpacity>
              </View>
              {nicknameOk === false ? (
                <View></View>
              ) : (
                <Text style={RegisterStyle.text_notice}>
                  * 사용 가능한 닉네임입니다.
                </Text>
              )}
            </View>

            <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>비밀번호</Text>
              <View style={RegisterStyle.container_item_input}>
                <TextInput
                  value={password}
                  onChangeText={(password) => setPassword(password)}
                  secureTextEntry={true}
                  style={RegisterStyle.textInput_item}
                  placeholder="비밀번호"
                />
              </View>
            </View>

            <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>비밀번호 확인</Text>
              <View style={RegisterStyle.container_item_input}>
                <TextInput
                  value={passwordAgain}
                  onChangeText={(passwordAgain) => {
                    setPasswordAgain(passwordAgain);
                    checkPassword(passwordAgain);
                  }}
                  style={RegisterStyle.textInput_item}
                  secureTextEntry={true}
                  placeholder="비밀번호를 한번 더 입력해주세요"
                />
              </View>
              {passwordOk === false ? (
                <View></View>
              ) : (
                <Text style={RegisterStyle.text_notice}>
                  * 비밀번호 확인이 완료되었습니다.
                </Text>
              )}
            </View>

            <View style={RegisterStyle.container_item}>
              <Text style={RegisterStyle.title_item}>약관 동의</Text>
              <View style={RegisterStyle.container_checkbox}>
                <Checkbox
                  style={RegisterStyle.checkbox}
                  value={terms1Ok}
                  onValueChange={(terms1Ok) => setTerms1Ok(terms1Ok)}
                  color={terms1Ok ? "#FFD542" : undefined}
                />
                <Text style={RegisterStyle.text_checkbox_title}>
                  (필수) 이용약관 동의{" "}
                </Text>
                <TouchableOpacity
                  style={RegisterStyle.btn_checkbox_link}
                  onPress={() => Linking.openURL(terms1URL)}
                >
                  <Text style={RegisterStyle.text_checkbox_link}>보기</Text>
                </TouchableOpacity>
              </View>

              <View style={RegisterStyle.container_checkbox}>
                <Checkbox
                  style={RegisterStyle.checkbox}
                  value={terms2Ok}
                  onValueChange={(terms2Ok) => setTerms2Ok(terms2Ok)}
                  color={terms2Ok ? "#FFD542" : undefined}
                />
                <Text style={RegisterStyle.text_checkbox_title}>
                  (필수) 개인정보처리방침 동의{" "}
                </Text>
                <TouchableOpacity
                  style={RegisterStyle.btn_checkbox_link}
                  onPress={() => Linking.openURL(terms2URL)}
                >
                  <Text style={RegisterStyle.text_checkbox_link}>보기</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={RegisterStyle.container_btn}>
            <TouchableOpacity
              onPress={() => {
                addUser();
              }}
              style={RegisterStyle.btn_register}
            >
              <Text style={RegisterStyle.btnText_register}>
                회원가입 완료하기
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Register;
