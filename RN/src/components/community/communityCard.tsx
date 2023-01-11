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
  contents: string;
  createdAt: string;
  updatedAt: string;
  user_nickname: string;
}

const CommunityCard = (props: CommunityCardProps) => {
  const { contents, createdAt, updatedAt, user_nickname } = props;
  const [userTime, setUserTime] = useState<string | number>("");
  const [previewContent, setPreviewContent] = useState<string>("");

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

  useEffect(() => {
    contents.length < 15
      ? setPreviewContent(contents)
      : setPreviewContent(`${contents.slice(0, 15)}...`);
  }, [contents]);

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
        </View>
      </View>
      <View style={styles.contents_wrapper}>
        <Text style={styles.text_contents}>{previewContent}</Text>
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
    marginLeft: SCREEN_WIDTH / 2 + 40,
    borderWidth: 1,
    borderColor: "#C3C3C3",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  modal_btn_text: {
    color: "#C3C3C3",
    fontSize: 13,
    fontWeight: "400",
  },
  text_contents: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "400",
  },
  contents_wrapper: {
    marginTop: 10,
    marginLeft: 40,
    height: 30,
  },
  lineStyle: {
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginBottom: 20,
  },
});

export default CommunityCard;
