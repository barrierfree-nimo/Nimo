import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

export interface CommunityCardProps {
  postId: number;
  contents: string;
  createdAt: string;
  updatedAt: string;
  user_nickname: string;
  isId: boolean;
  setFocusedType?: (focusedType: string) => void;
  setPostName?: (postName: string) => void;
  setPostId?: (postId: number) => void;
}

const CommunityCommentCard = (props: CommunityCardProps) => {
  const {
    postId,
    contents,
    createdAt,
    updatedAt,
    user_nickname,
    setFocusedType,
    setPostName,
    setPostId,
  } = props;
  const [userTime, setUserTime] = useState<string | number>("");

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
      : setUserTime(timeString + "(수정됨)");
  }, [updatedAt]);

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
              setFocusedType && setFocusedType("comment");
              setPostId && setPostId(postId);
              setPostName && setPostName(user_nickname);
            }}
          >
            <Text style={styles.modal_btn_text}>수정 / 신고</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contents_wrapper}>
        <Text style={styles.text_contents}>{contents}</Text>
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
  contents_wrapper: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 20,
  },
  lineStyle: {
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginBottom: 20,
  },
});

export default CommunityCommentCard;
