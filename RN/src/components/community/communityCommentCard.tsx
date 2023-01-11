import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import baseURL from "../baseURL";

const SCREEN_WIDTH = Dimensions.get("window").width;

export interface CommunityCardProps {
  postId?: number;
  commentId: number;
  contents: string;
  createdAt: string;
  updatedAt: string;
  user_nickname: string;
  selectedProps: string;
  commentModify: boolean;
  setSelectedProps: (selectedProps: string) => void;
  setCommentModify: (modify: string) => void;
  setFocusedType: (focusedType: string) => void;
  setPostName: (postName: string) => void;
  setCommentId: (postId: number) => void;
}

const CommunityCommentCard = (props: CommunityCardProps) => {
  const {
    postId,
    commentId,
    contents,
    createdAt,
    updatedAt,
    user_nickname,
    commentModify,
    selectedProps,
    setSelectedProps,
    setCommentModify,
    setFocusedType,
    setPostName,
    setCommentId,
  } = props;
  const [userTime, setUserTime] = useState<string | number>("");
  const [newComment, setNewComment] = useState<string>(contents);
  const [render, setRender] = useState<string>("");

  useEffect(() => {
    render === "cancel" && setCommentModify("false"),
      setSelectedProps(""),
      setFocusedType(""),
      setCommentId(-1),
      setRender(""),
      setNewComment(contents);

    render === "apply" && setCommentModify("true"),
      setSelectedProps(""),
      setFocusedType(""),
      setCommentId(-1),
      setRender(""),
      setNewComment(newComment);
  }, [render]);

  useEffect(() => {
    let timeString;
    const now = new Date();
    const then = new Date(updatedAt);
    const diffMSec = now.getTime() - then.getTime() + 32400000;
    const diffMin = Math.floor(diffMSec / (60 * 1000));
    if (diffMin < 1) {
      timeString = "방금 전";
    } else if (1 <= diffMin && diffMin < 60) {
      timeString = `${diffMin}분 전`;
    } else if (diffMin >= 60 && diffMin < 60 * 24) {
      timeString = `${Math.floor(diffMin / 60)}시간 전`;
    } else {
      timeString = updatedAt.substring(0, 10);
    }
    createdAt === updatedAt
      ? setUserTime(timeString)
      : setUserTime(timeString + " (수정됨)");
  }, [updatedAt]);

  const fetchCommentPatch = async () => {
    const token = await AsyncStorage.getItem("user_Token");
    try {
      await Axios.patch(
        baseURL + `/community/comment/${commentId}`,
        {
          post_id: postId,
          contents: newComment,
        },
        {
          headers: { accessToken: `${token}` },
        }
      )
        .then((res) => {
          if (res.status === 201) {
            setRender("apply");
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
    <>
      <View style={styles.card_container}>
        <View style={styles.card_header}>
          <Image
            source={require("../../assets/icons/community/ic_profile.png")}
            style={styles.img_profile}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.text_nickname}>{user_nickname}</Text>
            <Text style={styles.text_time}>{userTime}</Text>
          </View>

          <TouchableOpacity
            style={styles.modal_btn}
            onPress={() => {
              setFocusedType("comment");
              setCommentId(commentId);
              setPostName(user_nickname);
            }}
          >
            <Text style={styles.modal_btn_text}>수정 / 신고</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contents_wrapper}>
        {render === "" && commentModify && selectedProps === "modify" ? (
          <>
            <TextInput
              value={newComment}
              onChangeText={(comment) => setNewComment(comment)}
              style={styles.text_input}
              placeholder="댓글을 수정해주세요"
            />
            <View style={styles.btn_wrapper}>
              <TouchableOpacity
                style={styles.btn_div}
                onPress={() => fetchCommentPatch()}
              >
                <Text style={styles.btn_text}>등록</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btn_div, { marginLeft: 20 }]}
                onPress={() => setRender("cancel")}
              >
                <Text style={styles.btn_text}>취소</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text style={styles.text_contents}>{contents}</Text>
        )}
      </View>
      <View style={styles.lineStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  card_container: {
    flexDirection: "row",
    width: SCREEN_WIDTH - 80,
  },
  card_header: {
    flexDirection: "row",
    flex: 2,
    position: "relative",
  },
  img_profile: {
    width: 30,
    height: 30,
    marginRight: 8,
    marginTop: 5,
  },
  text_nickname: {
    color: "#000000",
    fontSize: 23,
    fontWeight: "700",
  },
  text_time: {
    color: "#878787",
    fontSize: 16,
    fontWeight: "300",
  },
  modal_btn: {
    float: "right",
    position: "absolute",
    width: "auto",
    right: 0,
    borderWidth: 1,
    borderColor: "#C3C3C3",
    justifyContent: "center",
    paddingHorizontal: 4,
    borderRadius: 5,
  },
  modal_btn_text: {
    color: "#C3C3C3",
    fontSize: 13,
    fontWeight: "400",
  },
  text_contents: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "400",
  },
  text_input: {
    backgroundColor: "#E6E6E6",
    padding: 10,
    borderRadius: 5,
    color: "#000000",
    fontSize: 18,
    fontWeight: "400",
    flex: 5,
  },
  contents_wrapper: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 10,
  },
  lineStyle: {
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginBottom: 20,
  },
  btn_wrapper: {
    flex: 2,
    flexDirection: "row",
    width: SCREEN_WIDTH - 120,
    justifyContent: "space-around",
    paddingTop: 10,
    paddingLeft: "60%",
  },
  btn_div: {
    width: 40,
    height: 30,
    backgroundColor: "#00284E",
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CommunityCommentCard;
