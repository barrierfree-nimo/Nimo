import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;

export interface MessageCardProps {
  title: string;
  done: string;
  isCustom: string;
}

const MessageCard = (props: MessageCardProps) => {
  const { title, done, isCustom } = props;

  return (
    <View>
      <View style={styles.card_container}>
        <View style={styles.card_container_child}>
          <Image
            source={require("../../assets/icons/simul_message/ic_profile.png")}
            style={styles.img_profile}
          />
          <View>
            <Text style={styles.text_title_phoneNum}>010-1234-5678</Text>
            <Text style={styles.text_title}>{title}</Text>
          </View>
          {isCustom === "true" && (
            <View>
              <Image
                source={require("../../assets/icons/simul_common/star.png")}
                style={styles.img_star}
              />
            </View>
          )}
        </View>

        <View style={styles.card_container_child_checkbox}>
          {done === "true" ? (
            <Image
              source={require("../../assets/icons/simul_message/checkbox_true.png")}
              style={styles.img_checkbox}
            />
          ) : (
            <Image
              source={require("../../assets/icons/simul_message/checkbox_false.png")}
              style={styles.img_checkbox}
            />
          )}
        </View>
      </View>
      <View style={styles.lineStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    position: "relative",
    flexDirection: "row",
    width: SCREEN_WIDTH - 100,
  },
  card_container_child: {
    flexDirection: "row",
    flex: 8,
  },
  card_container_child_checkbox: {
    position: "absolute",
    right: 10,
    marginTop: 20,
  },
  img_profile: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  img_star: {
    width: 25,
    height: 25,
  },
  img_checkbox: {
    position: "absolute",
    width: 30,
    height: 30,
  },
  text_title: {
    width: SCREEN_WIDTH / 2,
    color: "#000000",
    fontSize: 20,
    fontWeight: "700",
    flexWrap: "wrap",
  },
  text_title_phoneNum: {
    color: "#a3a3a3",
    fontSize: 16,
    fontWeight: "500",
  },
  text_content: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "400",
  },
  lineStyle: {
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginBottom: 20,
  },
});

export default MessageCard;
