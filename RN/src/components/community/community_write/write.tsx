import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CommonStyle from "../../common/common_style";
import CommunityWriteStyle from "./write_style";
import Axios from "axios";
import baseURL from "../../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";

const CommunityWrite = ({ navigation }: any) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tag, setTag] = useState<string>("일반");
  const [isTitle, setIsTitle] = useState<boolean>(false);
  const [isContent, setIsContent] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "일반", value: "일반" },
    { label: "질문", value: "질문" },
    { label: "정보", value: "정보" },
  ]);

  const handleEnroll = async () => {
    checkIsEmpty();
    if (title !== "" && content !== "") {
      const token = await AsyncStorage.getItem("user_Token");
      try {
        await Axios.post(
          baseURL + "/community/write",
          {
            title: title,
            contents: content,
            tag: "일반",
          },
          {
            headers: { accessToken: `${token}` },
          }
        )
          .then((res) => {
            if (res.status == 200) {
              navigation.navigate("CommunityArchive");
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
    content === "" ? setIsContent(false) : setIsContent(true);
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
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
          listMode="MODAL"
          modalProps={{
            animationType: "fade",
          }}
          modalTitle="분류를 선택해주세요."
          style={CommunityWriteStyle.tag_input}
        />
      </View>
      <View style={CommunityWriteStyle.container_title}>
        <Text style={CommunityWriteStyle.title_text}>제목 *</Text>
        <TextInput
          value={title}
          onChangeText={(title) => setTitle(title)}
          style={CommunityWriteStyle.title_input}
          placeholder="제목"
        />
      </View>
      <View style={CommunityWriteStyle.container_content}>
        <Text style={CommunityWriteStyle.title_text}>본문 *</Text>
        <TextInput
          value={content}
          onChangeText={(content) => setContent(content)}
          multiline={true}
          style={CommunityWriteStyle.content_input}
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
          onPress={() => navigation.navigate("Community")}
          style={CommunityWriteStyle.btn}
        >
          <Text style={CommunityWriteStyle.btn_text}>글 취소하기</Text>
        </TouchableOpacity>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={CommonStyle.btnText_exit}>소통하기 나가기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CommunityWrite;
