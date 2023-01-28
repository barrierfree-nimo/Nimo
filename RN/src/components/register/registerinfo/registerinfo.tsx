import React, { useState, useEffect } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import DropDownPicker from "react-native-dropdown-picker";
import CommonStyle from "../../common/common_style";
import RegisterInfoStyle from "./registerInfo_style";

const RegisterInfo = ({navigation}: any) => {
  const [inputs, setInputs] = useState({
    name: "",
    bank: "",
    gender: {
      male: false,
      female: false
    },
    
    offspring: {
      daughter: false,
      son: false
    },

    interest: {
      loan: false,
      investment: false,
      support: false,
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
                  value={inputs.offspring.daughter}
                  onValueChange={(value) => {onChangeOffspring("daughter", value)}}
                  color={inputs.offspring.daughter ? "#FFD542" : undefined}
                />
                <Text style={RegisterInfoStyle.text_checkbox_title}>
                  딸
                </Text>
              </View>
              <View style={RegisterInfoStyle.container_checkbox}>
                <Checkbox
                  style={RegisterInfoStyle.checkbox}
                  value={inputs.offspring.son}
                  onValueChange={(value) => {onChangeOffspring("son", value)}}
                  color={inputs.offspring.son ? "#FFD542" : undefined}
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
                    value={inputs.interest.investment}
                    onValueChange={(value) => {onChangeInterest("investment", value)}}
                    color={inputs.interest.investment ? "#FFD542" : undefined}
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
                    value={inputs.interest.support}
                    onValueChange={(value) => {onChangeInterest("support", value)}}
                    color={inputs.interest.support ? "#FFD542" : undefined}
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
            onPress={() => console.log(inputs)}>
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