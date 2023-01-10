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
import CommunityModal from "../communityModal";

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
  // 모달
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [focusedType, setFocusedType] = useState<string>("");
  const [postName, setPostName] = useState<string>("");
  const [postId, setPostId] = useState<number>(-1);
  const [localName, setLocalName] = useState<string | null>("");

  const getLocalName = async () => {
    const local_nickname = await AsyncStorage.getItem("user_nickname");
    await setLocalName(local_nickname);
  };

  useEffect(() => {
    postContent?.createdAt === postContent?.updatedAt
      ? setIsUpdated(true)
      : setIsUpdated(true);
  }, [postContent?.createdAt, postContent?.updatedAt]);

  useEffect(() => {
    fetchCommunityDetail();
    getLocalName();
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
      const then = new Date(postContent?.updatedAt);

      const diffMSec = now.getTime() - then.getTime() + 32400000;
      const diffMin = Math.floor(diffMSec / (60 * 1000));
      if (diffMin < 60) {
        setUserTime(`${diffMin}분 전`);
      } else if (diffMin >= 60 && diffMin < 60 * 24) {
        setUserTime(`${Math.floor(diffMin / 60)}시간 전`);
      } else {
        setUserTime(postContent?.updatedAt.substring(0, 10));
      }
    }
  }, [postContent?.updatedAt]);

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

  useEffect(() => {
    if (focusedType === "comment" || focusedType === "post") {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [focusedType]);

  useEffect(() => {
    switch (selected) {
      case "user-report":
        fetchCommunityUserReport();
        break;
      case "post-report":
        focusedType === "post" && fetchCommunityPostReport();
        focusedType === "comment" && fetchCommunityCommentReport();
        break;
      case "modify":
        // 수정 >>  댓글이면 -> input으로 바꾸고, 글이면 write로 보내줌(변동 없는지도 확인)
        break;
      case "delete":
        // 삭제 >>  댓글인지 post인지 구분해서 post의 id 삭제 api
        break;
    }
  }, [selected]);

  const fetchCommunityUserReport = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      Axios.get(baseURL + `/admin/user/${postName}`, {
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

  const fetchCommunityPostReport = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      Axios.get(baseURL + `/admin/post/${postId}`, {
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

  const fetchCommunityCommentReport = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      Axios.get(baseURL + `/admin/comment/${postId}`, {
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

  return (
    <SafeAreaView style={CommonStyle.container}>
      <CommunityModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setSelected={setSelected}
        setFocusedType={setFocusedType}
        canUD={postName === localName}
      />
      <View style={communityDetailStyle.community_container}>
        <Text style={communityDetailStyle.title_text}>
          글제목 : {postContent?.title}
        </Text>
        <Text style={communityDetailStyle.time_text}>{userTime}</Text>
        <TouchableOpacity
          style={communityDetailStyle.modal_btn}
          onPress={() => {
            setFocusedType("post");
            postContent && setPostId(postContent.id);
            postContent && setPostName(postContent.user_nickname);
          }}
        >
          <Text style={communityDetailStyle.modal_btn_text}>수정/신고</Text>
        </TouchableOpacity>
        <View style={communityDetailStyle.content_container}>
          <Text style={communityDetailStyle.content_text}>
            {postContent?.contents}
          </Text>
        </View>
        <ScrollView style={communityDetailStyle.comment_container}>
          <Text style={communityDetailStyle.comment_title}>댓글 목록</Text>
          <View style={communityDetailStyle.lineStyle} />
          <View>
            {!comment || comment.length === 0 ? (
              <Text style={communityDetailStyle.comment_text}>
                해당 게시물에 댓글이 없습니다. 첫번째 댓글이 되어주세요.
              </Text>
            ) : (
              <View>
                {comment.map(
                  (
                    { user_nickname, createdAt, updatedAt, contents, id },
                    idx
                  ) => (
                    <CommunityCard
                      key={idx}
                      postId={id}
                      contents={contents}
                      createdAt={createdAt}
                      updatedAt={updatedAt}
                      user_nickname={user_nickname}
                      isId={true}
                      setFocusedType={setFocusedType}
                      setPostName={setPostName}
                      setPostId={setPostId}
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
