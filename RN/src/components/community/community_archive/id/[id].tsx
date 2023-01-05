import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../../baseURL";
import CommonStyle from "../../../common/common_style";
import communityDetailStyle from "./[id]_style";
import CommunityCard from "../communityCard";

interface PostContent {
  id: number;
  user_nickname: string;
  title: string;
  contents: string;
  tag: string;
  date: string;
}

const CommunityDetail = ({ route, navigation }: any) => {
  const [postContent, setPostContent] = useState<PostContent>();
  const [userTime, setUserTime] = useState<string | number>("");
  const [comment, setComment] = useState<any[]>([]);

  useEffect(() => {
    fetchCommunityDetail();
  }, []);

  const fetchCommunityDetail = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      Axios.get(baseURL + `/community/${route.params.CommunityNum}`, {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        setPostContent(res.data.post);
        setComment(res.data.comment);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (postContent?.date) {
      const now = new Date();
      const then = new Date(postContent.date);
      const diffMSec = now.getTime() - then.getTime();
      const diffMin = Math.floor(diffMSec / (60 * 1000));
      if (diffMin < 60) {
        setUserTime(`${diffMin}분 전`);
      } else if (diffMin >= 60 && diffMin < 60 * 24) {
        setUserTime(`${diffMin / 60}시간 전`);
      } else {
        setUserTime(postContent.date.substring(0, 10));
      }
    }
  }, [postContent, postContent?.date]);

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={communityDetailStyle.community_container}>
        <Text style={communityDetailStyle.title_text}>
          글제목 : {postContent?.title}
        </Text>
        <Text style={communityDetailStyle.time_text}>{userTime}</Text>
        <View style={communityDetailStyle.content_container}>
          <Text style={communityDetailStyle.content_text}>
            {postContent?.contents}
          </Text>
        </View>
        <View style={communityDetailStyle.comment_container}>
          <Text style={communityDetailStyle.comment_title}>댓글 목록</Text>
          <View style={communityDetailStyle.lineStyle} />
          <View>
            {comment.length === 0 ? (
              <Text style={communityDetailStyle.comment_text}>
                해당 게시물에 댓글이 없습니다. 첫번째 댓글이 되어주세요.
              </Text>
            ) : (
              <View>
                {comment.map(({ post_id, contents }) => (
                  <CommunityCard
                    key={post_id}
                    contents={contents}
                    date=""
                    user_nickname="{user_nickname}"
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </View>

      <View style={CommonStyle.container_exit}>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Text style={CommonStyle.btnText_exit}>소통하기 나가기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CommunityDetail;
