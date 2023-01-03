import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CommonStyle from "../../common/common_style";
import CommunityArchiveStyle from "./archive_style";

const CommunityArchive = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>("");

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.text_header}>소통하기</Text>
      </View>
      <View style={CommunityArchiveStyle.search_container}>
        <TextInput
          value={search}
          onChangeText={(search) => setSearch(search)}
          style={CommunityArchiveStyle.search_input}
          placeholder="찾으시는 단어를 입력해주세요"
        />
        <TouchableOpacity style={CommunityArchiveStyle.search_btn}>
          <Text style={CommunityArchiveStyle.search_text}>검색</Text>
        </TouchableOpacity>
      </View>
      <View style={CommunityArchiveStyle.content_container}></View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={CommonStyle.btnText_exit}>소통하기 나가기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CommunityArchive;
