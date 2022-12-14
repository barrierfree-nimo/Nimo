import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../../baseURL";
import CommonStyle from "../../common/common_style";
import communityDetailStyle from "./[id]_style";
import CommunityCommentCard from "../communityCommentCard";
import CommunityModal from "../communityModal";
import { useIsFocused } from "@react-navigation/native";
import ExitBtn from "../../common/exit_btn";

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

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [focusedType, setFocusedType] = useState<string>("");
  const [postName, setPostName] = useState<string>("");
  const [postId, setPostId] = useState<number>(-1);
  const [commentId, setCommentId] = useState<number>(-1);
  const [localName, setLocalName] = useState<string | null>("");
  const [commentModify, setCommentModify] = useState<string>("");
  const [selectedProps, setSelectedProps] = useState<string>("");

  const [postTitle, setPostTitle] = useState<string>("");
  const [postContents, setPostContents] = useState<string>("");
  const [postTag, setPostTag] = useState<string>("");

  useEffect(() => {
    return () => {
      if (commentModify !== "") {
        fetchCommunityDetail();
      }
      setCommentModify("");
    };
  }, [commentModify]);

  const isFocused = useIsFocused();
  useEffect(() => {
    return () => {
      fetchCommunityDetail();
    };
  }, [isFocused]);

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
    let timeString;
    const now = new Date();
    if (postContent) {
      const then = new Date(postContent.updatedAt);
      const diffMSec = now.getTime() - then.getTime() + 32400000;
      const diffMin = Math.floor(diffMSec / (60 * 1000));
      if (diffMin < 1) {
        timeString = "?????? ???";
      } else if (1 <= diffMin && diffMin < 60) {
        timeString = `${diffMin}??? ???`;
      } else if (diffMin >= 60 && diffMin < 60 * 24) {
        timeString = `${Math.floor(diffMin / 60)}?????? ???`;
      } else {
        timeString = postContent.updatedAt.substring(0, 10);
      }
      postContent.createdAt === postContent.updatedAt
        ? setUserTime(timeString)
        : setUserTime(timeString + " (?????????)");
    }
  }, [postContent?.updatedAt]);

  useEffect(() => {
    postContent && setPostId(postContent.id);
  }, [postContent?.id]);

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
        focusedType === "comment" && setSelectedProps("modify");
        focusedType === "post" && setFocusedType("");
        setSelected("");
        break;
      case "delete":
        focusedType === "post" && fetchPostDelete();
        focusedType === "comment" && fetchCommentDelete();
        setSelected("");
        break;
    }
  }, [selected, focusedType]);

  useEffect(() => {
    if (
      postContents &&
      postTag &&
      postTitle &&
      selected === "modify" &&
      focusedType === "post"
    ) {
      navigation.navigate("CommunityPostPatch", {
        postId: postId,
        title: postTitle,
        contents: postContents,
        tag: postTag,
      });
    }
  }, [postTag, postTitle, postContents, selected, focusedType]);

  const fetchCommunityUserReport = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      Axios.get(baseURL + `/admin/user/${postName}`, {
        headers: {
          accessToken: `${token}`,
        },
      }).then(() => {
        navigation.navigate("CommunityMain");
        setSelected("");
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
      }).then(() => {
        navigation.navigate("CommunityMain");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCommunityCommentReport = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    console.log("commentId>>>>", commentId);
    try {
      Axios.get(baseURL + `/admin/comment/${commentId}`, {
        headers: {
          accessToken: `${token}`,
        },
      }).then(() => {
        setSelected("");
        setFocusedType("");
        setCommentModify("comment modify");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPostDelete = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      await Axios.delete(baseURL + `/community/post/${postId}`, {
        headers: { accessToken: `${token}` },
      })
        .then((res) => {
          if (res.status === 204) {
            fetchCommunityDetail();
            navigation.navigate("CommunityMain");
            setSelected("");
            setFocusedType("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCommentDelete = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      Axios.delete(baseURL + `/community/comment/${commentId}`, {
        headers: {
          accessToken: `${token}`,
        },
      }).then((res) => {
        if (res.status === 204) {
          fetchCommunityDetail();
          setSelected("");
          setFocusedType("");
        }
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
      <View style={CommonStyle.container_contents}>
        <View style={communityDetailStyle.community_container}>
          <View style={communityDetailStyle.title_container}>
            <Text style={communityDetailStyle.title_text}>
              {postContent?.title}
            </Text>
            <View style={communityDetailStyle.title_container_sub}>
              <Text style={communityDetailStyle.time_text}>{userTime}</Text>
              <TouchableOpacity
                style={communityDetailStyle.modal_btn}
                onPress={() => {
                  setFocusedType("post");
                  postContent && setPostId(postContent.id);
                  postContent && setPostName(postContent.user_nickname);
                  postContent && setPostTitle(postContent.title);
                  postContent && setPostTag(postContent.tag);
                  postContent && setPostContents(postContent.contents);
                }}
              >
                <Text style={communityDetailStyle.modal_btn_text}>
                  ?????? / ??????
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={communityDetailStyle.content_container}>
            <ScrollView style={communityDetailStyle.content_scroll}>
              <Text style={communityDetailStyle.content_text}>
                {postContent?.contents}
              </Text>
            </ScrollView>
          </View>

          <View style={communityDetailStyle.comment_container}>
            <Text style={communityDetailStyle.comment_title}>?????? ??????</Text>
            <View style={communityDetailStyle.lineStyle} />
            <ScrollView style={communityDetailStyle.comment_scroll}>
              <View>
                {commentModify === "" && comment?.length === 0 ? (
                  <Text style={communityDetailStyle.comment_text}>
                    ?????? ???????????? ????????? ????????????.
                  </Text>
                ) : (
                  <View>
                    {comment?.map(
                      (
                        { user_nickname, createdAt, updatedAt, contents, id },
                        idx
                      ) => (
                        <CommunityCommentCard
                          key={idx}
                          postId={postId}
                          commentId={id}
                          contents={contents}
                          createdAt={createdAt}
                          updatedAt={updatedAt}
                          user_nickname={user_nickname}
                          commentModify={commentId === id}
                          selectedProps={selectedProps}
                          setSelectedProps={setSelectedProps}
                          setCommentModify={setCommentModify}
                          setFocusedType={setFocusedType}
                          setPostName={setPostName}
                          setCommentId={setCommentId}
                        />
                      )
                    )}
                  </View>
                )}
              </View>
            </ScrollView>
          </View>

          <KeyboardAvoidingView
            style={communityDetailStyle.user_comment_container}
          >
            <TextInput
              value={userComment}
              onChangeText={(userComment) => setUserComment(userComment)}
              style={communityDetailStyle.user_comment_input}
              placeholder="????????? ??????????????????"
            />
            <TouchableOpacity
              onPress={() => handleCommentPost()}
              style={communityDetailStyle.user_comment_apply}
            >
              <Text style={communityDetailStyle.user_comment_apply_text}>
                ??????
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
      <ExitBtn navigation={navigation} content={"???????????? ?????????"} />
    </SafeAreaView>
  );
};

export default CommunityDetail;
