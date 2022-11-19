import React from "react";
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
  content: string;
  check: boolean;
}

const MessageCard = (props: MessageCardProps) => {
  const { title, content, check } = props;
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.card_container}>
          <Image
            source={require("../../assets/icons/simul_message/ic_profile.png")}
            style={styles.img_profile}
          />
          <View style={styles.text_container}>
            <Text style={styles.text_title}>{title}</Text>
            <Text style={styles.text_content}>{content}</Text>
          </View>
          {check === true ? (
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
      </TouchableOpacity>
      <View style={styles.lineStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    flexDirection: "row",
    width: SCREEN_WIDTH - 80,
  },
  text_container: {
    flexDirection: "column",
  },
  img_profile: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  img_checkbox: {
    position: "absolute",
    width: 30,
    height: 30,
    marginLeft: SCREEN_WIDTH - 120,
    marginTop: 10,
  },
  text_title: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "700",
  },
  text_content: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "400",
  },
  lineStyle: {
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    marginBottom: 30,
  },
});

export default MessageCard;
