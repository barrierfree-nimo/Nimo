import React, { useState, useEffect } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput,  TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import CommonStyle from "../../common/common_style";
import RegisterInfoStyle from "./registerInfo_style";

const RegisterInfo = ({navigation}: any) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남");
  const [bank, setBank] = useState("");
  const [showChild, setShowChild] = useState(false);
  const [child, setChild] = useState("해당없음");
  const [childItems, setChildItems] = useState([
    { label: "딸", value: "딸" },
    { label: "아들", value: "아들" },
    { label: "둘 다", value: "둘 다" },
    { label: "해당없음", value: "해당없음" },
  ]);
  const [showJob, setShowJob] = useState(false);
  const [job, setJob] = useState("해당없음");
  const [jobItems, setJobItems] = useState([
    { label: "구직자", value: "구직자" },
    { label: "자영업자", value: "자영업자" },
    { label: "학생", value: "학생" },
    { label: "해당없음", value: "해당없음" },
  ]);

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.text_header}>추가 정보 입력</Text>
      </View>

      <View style={RegisterInfoStyle.container}>
        <View style={RegisterInfoStyle.container_notice}>
          <Text style={RegisterInfoStyle.text_notice}>입력하신 정보를 바탕으로 맞춤형 피싱 체험이</Text>
          <Text style={RegisterInfoStyle.text_notice}>제공됩니다.</Text>
        </View>
        
        <ScrollView style={RegisterInfoStyle.container_info}>

          <View style={RegisterInfoStyle.container_info_row}>
            <Text style={RegisterInfoStyle.text_input_title}>이름 *</Text>
            <TextInput
              value={name}
              style={RegisterInfoStyle.textInput_name}
              onChangeText={(name) => setName(name)}
              placeholder="이름"
            />
          </View>

          <View style={RegisterInfoStyle.container_info_row}>
            <Text style={RegisterInfoStyle.text_input_title}>성별 *</Text>
            <View style={RegisterInfoStyle.container_radio}>
              <View style={RegisterInfoStyle.container_radio_item}>
                <RadioButton
                  value="남"
                  status={gender === "남" ? 'checked' : 'unchecked'}
                  onPress={() => setGender("남")}
                  color="#FFD74B" />
                <Text style={RegisterInfoStyle.text_radio_item}>남</Text>
              </View>
              <View style={RegisterInfoStyle.container_radio_item}>
                <RadioButton
                  value="여"
                  status={gender === "여" ? 'checked' : 'unchecked'}
                  onPress={() => setGender("여")}
                  color="#FFD74B" />
                <Text style={RegisterInfoStyle.text_radio_item}>여</Text>
              </View>
            </View>
          </View>
          
          <View style={RegisterInfoStyle.container_info_col}>
            <Text style={RegisterInfoStyle.text_input_title}>주거래 은행명 *</Text>
            <TextInput
              value={bank}
              style={RegisterInfoStyle.textInput_bank}
              onChangeText={(bank) => setBank(bank)}
              placeholder="은행명을 입력해주세요 (예. 국민)"
            />
          </View>

          <View style={RegisterInfoStyle.container_info_row}>
            <Text style={RegisterInfoStyle.text_input_title}>자녀유무 *</Text>
            <DropDownPicker
              open={showChild}
              value={child}
              items={childItems}
              setOpen={setShowChild}
              setValue={setChild}
              setItems={setChildItems}
              placeholder="자녀유무를 선택해주세요"
              modalProps={{
                animationType: "fade",
              }}
              containerStyle={{ width: 150, height: 40 }}
              style={RegisterInfoStyle.dropdown}
            />
          </View>

          <View style={RegisterInfoStyle.container_info_row}>
            <Text style={RegisterInfoStyle.text_input_title}>직업 *</Text>
            <DropDownPicker
              open={showJob}
              value={job}
              items={jobItems}
              setOpen={setShowJob}
              setValue={setJob}
              setItems={setJobItems}
              placeholder="직업을 선택해주세요"
              modalProps={{
                animationType: "fade",
              }}
              containerStyle={{ width: 150, height: 40 }}
              style={RegisterInfoStyle.dropdown}
            />
          </View>
        </ScrollView>

        <View style={RegisterInfoStyle.container_btn}>
          <TouchableOpacity style={RegisterInfoStyle.btn_fin}>
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