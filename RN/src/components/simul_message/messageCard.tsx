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
  simulNum: number;
  title: string;
  commentary: string;
  check: boolean;
  navigation: any;
}

const MessageCard = (props: MessageCardProps) => {
  const { simulNum, title, commentary, check } = props;

  return (
    <View>
      <View style={styles.card_container}>
        <Image
          source={require("../../assets/icons/simul_message/ic_profile.png")}
          style={styles.img_profile}
        />
        <Text style={styles.text_title}>{title}</Text>
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
      <View style={styles.lineStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    flexDirection: "row",
    width: SCREEN_WIDTH - 80,
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
    marginTop: 20,
  },
  text_title: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "700",
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
