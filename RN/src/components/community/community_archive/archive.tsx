import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import CommonStyle from "../../common/common_style";
import CommunityArchiveStyle from "./archive_style";
import Axios from "axios";
import baseURL from "../../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CommunityCard from "./communityCard";

interface CommunityData {
  contents: string;
  date: string;
  id: number;
  tag: string;
  title: string;
  user_nickname: string;
}
const CommunityArchive = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>("");
  const [communityList, setCommunityList] = useState<CommunityData[]>();

  useEffect(() => {
    fetchCommunityArchive();
  }, []);

  const fetchCommunityArchive = async () => {
    try {
      const token = await AsyncStorage.getItem("user_Token");
      Axios.get(baseURL + "/community", {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        setCommunityList(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnPress = (CommunityNum: number) => {
    navigation.navigate("CommunityDetail", {
      CommunityNum: CommunityNum,
    });
  };

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
      <View style={CommunityArchiveStyle.content_container}>
        <ScrollView style={CommunityArchiveStyle.content_container}>
          {communityList?.map(({ contents, date, id, user_nickname }) => (
            <TouchableOpacity key={id} onPress={() => handleOnPress(id)}>
              <CommunityCard
                contents={contents}
                date={date}
                user_nickname={user_nickname}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={CommonStyle.btnText_exit}>소통하기 나가기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CommunityArchive;
