import React, { useState, useEffect } from "react";
import Axios from "axios";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import Checkbox from "expo-checkbox";
import CommonStyle from "../../common/common_style";
import RegisterInfoStyle from "./registerInfo_style";
import baseURL from "../../baseURL";

const RegisterInfo = ({route, navigation}: any) => {
  const [inputs, setInputs] = useState({
    name: "",
    bank: "",
    gender: {
      남: false,
      여: false
    },
    
    offspring: {
      딸: false,
      아들: false
    },

    interest: {
      대출: false,
      투자: false,
      지원금: false,
      쇼핑: false
    }
  })

  const onChangeTextInputs = (name: string, value: string) => {
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onChangeGender = (name: string, value: boolean) => {
    setInputs({
      ...inputs,
      gender: {
        ...inputs.gender,
        [name] : value
      }
    })
  }

  const onChangeOffspring = (name: string, value: boolean) => {
    setInputs({
      ...inputs,
      offspring: {
        ...inputs.offspring,
        [name] : value
      }
    })
  }

  const onChangeInterest = (name: string, value: boolean) => {
    setInputs({
      ...inputs,
      interest: {
        ...inputs.interest,
        [name] : value
      }
    })
  }

  const showToast = (notice: string) => {
    ToastAndroid.show(notice, ToastAndroid.SHORT);
  };

  const setInfo = (inputs : any) => {
    const name = String(inputs.name);
    const bank = String(inputs.bank);
    let info = name + "," + bank + ",";

    for(let item in inputs.gender) {
      if(inputs.gender[item]) info += String(item) + ",";
    }

    if(info.includes("남") && info.includes("여")) {
      showToast("성별은 하나만 선택해주세요")
      return;
    }

    for(let item in inputs.offspring) {
      if(inputs.offspring[item]) info += String(item) + ",";
    }

    for(let item in inputs.interest) {
      if(inputs.interest[item]) info += String(item) + ",";
    }
    
    Axios.post(baseURL + "/user/info", {
        id: route.params.id,
        custom: info
      })
        .then((res) => {
          if(res.status == 200) {
            showToast("정보 입력이 완료되었습니다.");
          } else {
            showToast("정보 입력 과정에서 문제가 발생했습니다.");
          }
          navigation.navigate("Login");
        })
        .catch((err) => console.log(err));
  }

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.text_header}>추가 정보 입력</Text>
      </View>

      <View style={RegisterInfoStyle.container}>
        <View style={RegisterInfoStyle.container_notice}>
          <Text style={RegisterInfoStyle.text_notice}>입력하신 정보를 바탕으로 맞춤형 피싱 체험이 제공됩니다. 제공을 원하시는 항목에 답해주세요</Text>
        </View>
        
        <ScrollView style={RegisterInfoStyle.container_info}>

          <View style={RegisterInfoStyle.container_info_row}>
            <Text style={RegisterInfoStyle.text_input_title}>이름</Text>
            <TextInput
              value={inputs.name}
              style={RegisterInfoStyle.textInput_name}
              onChangeText={(value) => {onChangeTextInputs("name", value)}}
              placeholder="이름"
            />
          </View>
          
          <View style={RegisterInfoStyle.container_info_row}>
            <Text style={RegisterInfoStyle.text_input_title}>주거래 은행</Text>
            <TextInput
              value={inputs.bank}
              style={RegisterInfoStyle.textInput_bank}
              onChangeText={(value) => {onChangeTextInputs("bank", value)}}
              placeholder="은행명 (예. 국민)"
            />
          </View>

          <View style={RegisterInfoStyle.container_info_row}>
            <Text style={RegisterInfoStyle.text_input_title}>성별</Text>
            <View style={RegisterInfoStyle.container_checkbox_row}>
              <View style={RegisterInfoStyle.container_checkbox}>
                <Checkbox
                  style={RegisterInfoStyle.checkbox}
                  value={inputs.gender.남}
                  onValueChange={(value) => {onChangeGender("남", value)}}
                  color={inputs.gender.남 ? "#FFD542" : undefined}
                />
                <Text style={RegisterInfoStyle.text_checkbox_title}>
                  남
                </Text>
              </View>
              <View style={RegisterInfoStyle.container_checkbox}>
                <Checkbox
                  style={RegisterInfoStyle.checkbox}
                  value={inputs.gender.여}
                  onValueChange={(value) => {onChangeGender("여", value)}}
                  color={inputs.gender.여 ? "#FFD542" : undefined}
                />
                <Text style={RegisterInfoStyle.text_checkbox_title}>
                  여
                </Text>
              </View>
            </View>
          </View>
          
          <View style={RegisterInfoStyle.container_info_row}>
            <Text style={RegisterInfoStyle.text_input_title}>자녀유무</Text>
            <View style={RegisterInfoStyle.container_checkbox_row}>
              <View style={RegisterInfoStyle.container_checkbox}>
                <Checkbox
                  style={RegisterInfoStyle.checkbox}
                  value={inputs.offspring.딸}
                  onValueChange={(value) => {onChangeOffspring("딸", value)}}
                  color={inputs.offspring.딸 ? "#FFD542" : undefined}
                />
                <Text style={RegisterInfoStyle.text_checkbox_title}>
                  딸
                </Text>
              </View>
              <View style={RegisterInfoStyle.container_checkbox}>
                <Checkbox
                  style={RegisterInfoStyle.checkbox}
                  value={inputs.offspring.아들}
                  onValueChange={(value) => {onChangeOffspring("아들", value)}}
                  color={inputs.offspring.아들 ? "#FFD542" : undefined}
                />
                <Text style={RegisterInfoStyle.text_checkbox_title}>
                  아들
                </Text>
              </View>
            </View>
          </View>

          <View style={RegisterInfoStyle.container_info_col}>
            <Text style={RegisterInfoStyle.text_input_title}>관심사</Text>
            <View style={RegisterInfoStyle.container_checkbox_interest_main}>
              <View style={RegisterInfoStyle.container_checkbox_interest_sub}>
                <View style={RegisterInfoStyle.container_checkbox_interest}>
                  <Checkbox
                    style={RegisterInfoStyle.checkbox}
                    value={inputs.interest.대출}
                    onValueChange={(value) => {onChangeInterest("대출", value)}}
                    color={inputs.interest.대출 ? "#FFD542" : undefined}
                  />
                  <Text style={RegisterInfoStyle.text_checkbox_title}>
                    대출
                  </Text>
                </View>
                <View style={RegisterInfoStyle.container_checkbox_interest}>
                  <Checkbox
                    style={RegisterInfoStyle.checkbox}
                    value={inputs.interest.투자}
                    onValueChange={(value) => {onChangeInterest("투자", value)}}
                    color={inputs.interest.투자 ? "#FFD542" : undefined}
                  />
                  <Text style={RegisterInfoStyle.text_checkbox_title}>
                    투자
                  </Text>
                </View>
              </View>
              <View style={RegisterInfoStyle.container_checkbox_interest_sub}>
                <View style={RegisterInfoStyle.container_checkbox_interest}>
                  <Checkbox
                    style={RegisterInfoStyle.checkbox}
                    value={inputs.interest.지원금}
                    onValueChange={(value) => {onChangeInterest("지원금", value)}}
                    color={inputs.interest.지원금 ? "#FFD542" : undefined}
                  />
                  <Text style={RegisterInfoStyle.text_checkbox_title}>
                    지원금
                  </Text>
                </View>
                <View style={RegisterInfoStyle.container_checkbox_interest}>
                  <Checkbox
                    style={RegisterInfoStyle.checkbox}
                    value={inputs.interest.쇼핑}
                    onValueChange={(value) => {onChangeInterest("쇼핑", value)}}
                    color={inputs.interest.쇼핑 ? "#FFD542" : undefined}
                  />
                  <Text style={RegisterInfoStyle.text_checkbox_title}>
                    온라인 쇼핑
                  </Text>
                </View>
              </View>
            </View>
          </View>
          
          
        </ScrollView>

        <View style={RegisterInfoStyle.container_btn}>
          <TouchableOpacity style={RegisterInfoStyle.btn_fin}
            onPress={() => setInfo(inputs)}>
            <Text style={RegisterInfoStyle.text_btn_fin}>입력 완료</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate("Login")}
            style={RegisterInfoStyle.btn_skip}>
            <Text style={RegisterInfoStyle.text_btn_skip}>건너뛰기 {">"}</Text>
          </TouchableOpacity>
        </View>
      </View>

    
    </SafeAreaView>


  )
}


export default RegisterInfo;