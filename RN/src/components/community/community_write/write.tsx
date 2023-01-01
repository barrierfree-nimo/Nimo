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

const CommunityWrite = ({ navigation }: any) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleEnroll = () => {
    console.log("post text", title, content);
    console.log("완료 text 띄우고");
    navigation.navigate("Community");
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.title}>소통하기</Text>
      </View>
      <TextInput
        value={title}
        onChangeText={(title) => setTitle(title)}
        style={CommunityWriteStyle.title_input}
        placeholder="제목"
      />
      <TextInput
        value={content}
        onChangeText={(content) => setContent(content)}
        style={CommunityWriteStyle.content_input}
        placeholder="내용을 입력하세요"
      />
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
