import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../baseURL";
import CommonStyle from "../../common/common_style";
import communityDetailStyle from "./[id]_style";
import CommunityCard from "../communityCard";

interface PostContent {
  id: number;
  user_nickname: string;
  title: string;
  contents: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

const CommunityDetail = ({ route, navigation }: any) => {
  const [postContent, setPostContent] = useState<PostContent>();
  const [userTime, setUserTime] = useState<string | number>("");
  const [comment, setComment] = useState<any[]>([]);
  const [userComment, setUserComment] = useState<string>("");
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  useEffect(() => {
    postContent?.createdAt === postContent?.updatedAt
      ? setIsUpdated(true)
      : setIsUpdated(true);
  }, [postContent?.createdAt, postContent?.updatedAt]);

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
    const now = new Date();
    if (postContent?.updatedAt) {
      let lastUpdatedDate = postContent?.updatedAt;
      isUpdated
        ? (lastUpdatedDate = postContent?.createdAt)
        : (lastUpdatedDate = postContent?.updatedAt);
      const then = new Date(lastUpdatedDate);

      const diffMSec = now.getTime() - then.getTime();
      const diffMin = Math.floor(diffMSec / (60 * 1000));
      if (diffMin < 60) {
        setUserTime(`${diffMin}분 전`);
      } else if (diffMin >= 60 && diffMin < 60 * 24) {
        setUserTime(`${Math.floor(diffMin / 60)}시간 전`);
      } else {
        setUserTime(lastUpdatedDate.substring(0, 10));
      }
    }
  }, [isUpdated]);

  const handleCommentPost = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      await Axios.post(
        baseURL + "/community/comment",
        {
          post_id: postContent?.id,
          contents: userComment,
        },
        {
          headers: { accessToken: `${token}` },
        }
      )
        .then((res) => {
          if (res.status == 200) {
            fetchCommunityDetail();
            setUserComment("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

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
        <ScrollView style={communityDetailStyle.comment_container}>
          <Text style={communityDetailStyle.comment_title}>댓글 목록</Text>
          <View style={communityDetailStyle.lineStyle} />
          <View>
            {comment.length === 0 ? (
              <Text style={communityDetailStyle.comment_text}>
                해당 게시물에 댓글이 없습니다. 첫번째 댓글이 되어주세요.
              </Text>
            ) : (
              <View>
                {comment.map(
                  ({ user_id, createdAt, updatedAt, contents }, id) => (
                    <CommunityCard
                      key={id}
                      contents={contents}
                      createdAt={createdAt}
                      updatedAt={updatedAt}
                      user_nickname={user_id}
                    />
                  )
                )}
              </View>
            )}
          </View>
        </ScrollView>
      </View>

      <View style={communityDetailStyle.user_comment_container}>
        <TextInput
          value={userComment}
          onChangeText={(userComment) => setUserComment(userComment)}
          style={communityDetailStyle.user_comment_input}
          placeholder="댓글을 입력해주세요"
        />
        <TouchableOpacity
          onPress={() => handleCommentPost()}
          style={communityDetailStyle.user_comment_apply}
        >
          <Text style={communityDetailStyle.user_comment_apply_text}>등록</Text>
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

export default CommunityDetail;
