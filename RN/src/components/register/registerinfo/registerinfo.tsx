import React, { useState, useEffect } from "react";
import Axios from "axios";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import Checkbox from "expo-checkbox";
import CommonStyle from "../../common/common_style";
import RegisterInfoStyle from "./registerInfo_style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../baseURL";

const RegisterInfo = ({route, navigation}: any) => {
  const [inputs, setInputs] = useState({
    name: "",
    bank: "",
    gender: {
      male: false,
      female: false
    },
    
    child: {
      daughter: false,
      son: false
    },

    interest: {
      loan: false,
      invest: false,
      money: false,
      shopping: false
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

  const onChangechild = (name: string, value: boolean) => {
    setInputs({
      ...inputs,
      child: {
        ...inputs.child,
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

  const setInfo = async (inputs : any) => {
    if(inputs.gender["male"] && inputs.gender["female"]) {
      showToast("성별은 하나만 선택해주세요")
      return;
    }

    let custom = "";

    const name = String(inputs.name);
    if(name != "") {
      await AsyncStorage.setItem("name", name);
      custom += "name,";
    }

    const bank = String(inputs.bank);
    if(bank != "") {
      await AsyncStorage.setItem("bank", bank);
      custom += "bank,";
    }

    let gender = "";
    for(let item in inputs.gender) {
      if(inputs.gender[item]) {
        gender = String(item);
        await AsyncStorage.setItem("gender", gender);
        custom += "gender,";
      }
    }    

    let child = "";
    for(let item in inputs.child) {
      if(inputs.child[item]) {
        child += String(item) + ",";
      }
    }
    if(child != "") {
      await AsyncStorage.setItem("child", child);
      custom += "child,";
    }

    let interest = [];
    for(let item in inputs.interest) {
      if(inputs.interest[item]) {
        interest.push(String(item));
      }
    }
    if(interest.length > 0) {
      let interest_str = "";
      for(let i=0 ; i<interest.length ; i++) {
        interest_str += String(interest[i]) + ",";
        custom += String(interest[i]) + ",";
      }
      await AsyncStorage.setItem("interest", interest_str);
    }
    
    Axios.post(baseURL + "/user/info", {
        id: route.params.id,
        custom: custom
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
                  value={inputs.gender.male}
                  onValueChange={(value) => {onChangeGender("male", value)}}
                  color={inputs.gender.male ? "#FFD542" : undefined}
                />
                <Text style={RegisterInfoStyle.text_checkbox_title}>
                  남
                </Text>
              </View>
              <View style={RegisterInfoStyle.container_checkbox}>
                <Checkbox
                  style={RegisterInfoStyle.checkbox}
                  value={inputs.gender.female}
                  onValueChange={(value) => {onChangeGender("female", value)}}
                  color={inputs.gender.female ? "#FFD542" : undefined}
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
                  value={inputs.child.daughter}
                  onValueChange={(value) => {onChangechild("daughter", value)}}
                  color={inputs.child.daughter ? "#FFD542" : undefined}
                />
                <Text style={RegisterInfoStyle.text_checkbox_title}>
                  딸
                </Text>
              </View>
              <View style={RegisterInfoStyle.container_checkbox}>
                <Checkbox
                  style={RegisterInfoStyle.checkbox}
                  value={inputs.child.son}
                  onValueChange={(value) => {onChangechild("son", value)}}
                  color={inputs.child.son ? "#FFD542" : undefined}
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
                    value={inputs.interest.loan}
                    onValueChange={(value) => {onChangeInterest("loan", value)}}
                    color={inputs.interest.loan ? "#FFD542" : undefined}
                  />
                  <Text style={RegisterInfoStyle.text_checkbox_title}>
                    대출
                  </Text>
                </View>
                <View style={RegisterInfoStyle.container_checkbox_interest}>
                  <Checkbox
                    style={RegisterInfoStyle.checkbox}
                    value={inputs.interest.invest}
                    onValueChange={(value) => {onChangeInterest("invest", value)}}
                    color={inputs.interest.invest ? "#FFD542" : undefined}
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
                    value={inputs.interest.money}
                    onValueChange={(value) => {onChangeInterest("money", value)}}
                    color={inputs.interest.money ? "#FFD542" : undefined}
                  />
                  <Text style={RegisterInfoStyle.text_checkbox_title}>
                    지원금
                  </Text>
                </View>
                <View style={RegisterInfoStyle.container_checkbox_interest}>
                  <Checkbox
                    style={RegisterInfoStyle.checkbox}
                    value={inputs.interest.shopping}
                    onValueChange={(value) => {onChangeInterest("shopping", value)}}
                    color={inputs.interest.shopping ? "#FFD542" : undefined}
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