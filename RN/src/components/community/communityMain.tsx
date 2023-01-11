import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import CommonStyle from "../common/common_style";
import Axios from "axios";
import baseURL from "../baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CommunityCard from "./communityCard";
import CommunityMainStyle from "./communityMain_style";
import { useIsFocused } from "@react-navigation/native";
import ExitBtn from "../common/exit_btn";

interface CommunityData {
  contents: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  tag: string;
  title: string;
  user_nickname: string;
}

const CommunityMain = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>("");
  const [communityList, setCommunityList] = useState<CommunityData[]>([]);
  const [filteredList, setFilteredList] = useState<CommunityData[]>([]);
  const [isExist, setIsExsist] = useState<boolean>(true);
  const [index, setIndex] = useState<string>("일반");

  const isFocused = useIsFocused();
  useEffect(() => {
    return () => {
      fetchCommunityArchive();
    };
  }, [isFocused]);

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

  const handleSearch = async () => {
    search === "" ? fetchCommunityArchive() : fetchCommunitySearch();
  };

  const fetchCommunitySearch = async () => {
    try {
      const token = await AsyncStorage.getItem("user_Token");
      Axios.get(baseURL + `/community/keyword/${search}`, {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        res.data.msg ? setIsExsist(false) : setIsExsist(true),
          setCommunityList(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const temp = Object.values(communityList).filter(
      (value) => value.tag === index
    );
    setFilteredList(temp);
  }, [communityList, index]);

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={CommonStyle.container_header}>
        <Text style={CommonStyle.text_header}>소통하기</Text>
      </View>
      <View style={CommunityMainStyle.search_container}>
        <TextInput
          value={search}
          onChangeText={(search) => setSearch(search)}
          style={CommunityMainStyle.search_input}
          placeholder="찾으시는 단어를 입력해주세요"
        />
        <TouchableOpacity
          onPress={() => handleSearch()}
          style={CommunityMainStyle.search_btn}
        >
          <Text style={CommunityMainStyle.search_text}>검색</Text>
        </TouchableOpacity>
      </View>
      <View style={CommunityMainStyle.index_container}>
        <TouchableOpacity
          style={[
            CommunityMainStyle.index_box,
            { marginRight: 20 },
            index === "일반"
              ? { backgroundColor: "#00284E" }
              : { backgroundColor: "#FFFFFF" },
          ]}
          onPress={() => setIndex("일반")}
        >
          <Text
            style={[
              CommunityMainStyle.index_text,
              index === "일반" ? { color: "#FFFFFF" } : { color: "#00284E" },
            ]}
          >
            일반
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            CommunityMainStyle.index_box,
            { marginRight: 20 },
            index === "질문"
              ? { backgroundColor: "#00284E" }
              : { backgroundColor: "#FFFFFF" },
          ]}
          onPress={() => setIndex("질문")}
        >
          <Text
            style={[
              CommunityMainStyle.index_text,
              index === "질문" ? { color: "#FFFFFF" } : { color: "#00284E" },
            ]}
          >
            질문
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            CommunityMainStyle.index_box,
            index === "정보"
              ? { backgroundColor: "#00284E" }
              : { backgroundColor: "#FFFFFF" },
          ]}
          onPress={() => setIndex("정보")}
        >
          <Text
            style={[
              CommunityMainStyle.index_text,
              index === "정보" ? { color: "#FFFFFF" } : { color: "#00284E" },
            ]}
          >
            정보
          </Text>
        </TouchableOpacity>
      </View>
      <View style={CommunityMainStyle.content_container}>
        <ScrollView>
          {isExist ? (
            <View>
              {filteredList?.map(
                (
                  { contents, createdAt, updatedAt, id, user_nickname },
                  idx
                ) => (
                  <TouchableOpacity key={idx} onPress={() => handleOnPress(id)}>
                    <CommunityCard
                      contents={contents}
                      createdAt={createdAt}
                      updatedAt={updatedAt}
                      user_nickname={user_nickname}
                    />
                  </TouchableOpacity>
                )
              )}
            </View>
          ) : (
            <Text style={CommunityMainStyle.exist_text}>
              관련 글이 존재하지 않습니다.
            </Text>
          )}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={CommunityMainStyle.write_container}
        onPress={() => navigation.navigate("CommunityWrite")}
      >
        <Text style={CommunityMainStyle.write_text}>글 작성하기</Text>
      </TouchableOpacity>
      <ExitBtn navigation={navigation} content={"소통하기 나가기"} />
    </SafeAreaView>
  );
};

export default CommunityMain;
