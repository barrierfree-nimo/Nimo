import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar
} from "react-native";
import CommonStyle from "../../common/common_style";
import CommunityWriteStyle from "./write_style";
import Axios from "axios";
import baseURL from "../../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";
import ExitBtn from "../../common/exit_btn";

const CommunityWrite = ({ navigation }: any) => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [tag, setTag] = useState<string>("일반");
  const [isTitle, setIsTitle] = useState<boolean>(true);
  const [isContent, setIsContent] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "일반", value: "일반" },
    { label: "질문", value: "질문" },
    { label: "정보", value: "정보" },
  ]);

  const handleEnroll = async () => {
    checkIsEmpty();
    if (isTitle && isContent) {
      const token = await AsyncStorage.getItem("user_Token");
      try {
        await Axios.post(
          baseURL + "/community/post",
          {
            title: title,
            contents: contents,
            tag: tag,
          },
          {
            headers: { accessToken: `${token}` },
          }
        )
          .then((res) => {
            if (res.status === 201) {
              navigation.navigate("CommunityMain");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const checkIsEmpty = () => {
    title === "" ? setIsTitle(false) : setIsTitle(true);
    contents === "" ? setIsContent(false) : setIsContent(true);
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#00284E" />
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.text_header}>소통하기</Text>
      </View>
      <View style={CommunityWriteStyle.container_tag}>
        <Text style={CommunityWriteStyle.title_text}>분류 *</Text>

        <DropDownPicker
          open={open}
          value={tag}
          items={items}
          setOpen={setOpen}
          setValue={setTag}
          setItems={setItems}
          placeholder="일반/질문/정보"
          modalProps={{
            animationType: "fade",
          }}
          containerStyle={{ width: 150, height: 40 }}
          modalTitle="분류를 선택해주세요."
          style={CommunityWriteStyle.tag_input}
        />
      </View>
      <View style={CommunityWriteStyle.container_title}>
        <Text style={CommunityWriteStyle.title_text}>제목 *</Text>
        <TextInput
          value={title}
          onChangeText={(title) => setTitle(title)}
          style={[
            CommunityWriteStyle.title_input,
            !isTitle && { borderColor: "red" },
          ]}
          placeholder="제목을 입력하세요"
        />
      </View>
      <View style={CommunityWriteStyle.container_content}>
        <Text style={CommunityWriteStyle.title_text}>본문 *</Text>
        <TextInput
          value={contents}
          onChangeText={(contents) => setContents(contents)}
          multiline={true}
          style={[
            CommunityWriteStyle.content_input,
            !isContent && { borderColor: "red" },
          ]}
          placeholder="내용을 입력하세요"
        />
      </View>
      <View style={CommunityWriteStyle.btn_wrapper}>
        <TouchableOpacity
          onPress={() => handleEnroll()}
          style={CommunityWriteStyle.btn}
        >
          <Text style={CommunityWriteStyle.btn_text}>글 등록하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CommunityMain")}
          style={CommunityWriteStyle.btn}
        >
          <Text style={CommunityWriteStyle.btn_text}>글 취소하기</Text>
        </TouchableOpacity>
      </View>

      <ExitBtn navigation={navigation} content={"소통하기 나가기"} />
    </SafeAreaView>
  );
};

export default CommunityWrite;
