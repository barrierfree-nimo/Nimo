import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../../common/common_style";
import CommunityMainStyle from "./community_style";

const Community = ({ navigation }: any) => {
  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.title}>소통하기</Text>
      </View>
      <View style={CommunityMainStyle.choice_box_wrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CommunityWrite")}
          style={CommunityMainStyle.choice_box}
        >
          <Text style={CommunityMainStyle.choice_box_text}>글쓰기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CommunityArchive")}
          style={CommunityMainStyle.choice_box}
        >
          <Text style={CommunityMainStyle.choice_box_text}>글보기</Text>
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

export default Community;
