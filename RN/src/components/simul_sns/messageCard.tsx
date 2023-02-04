import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;

export interface MessageCardProps {
  title: string;
  done: string;
}

const MessageCard = (props: MessageCardProps) => {
  const { title, done } = props;
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    done === "false" ? setCheck(false) : setCheck(true);
  }, [done]);

  return (
    <View>
      <View style={styles.card_container}>
        <View style={styles.card_container_child}>
          <Image
            source={require("../../assets/icons/simul_message/ic_profile.png")}
            style={styles.img_profile}
          />
          <Text style={styles.text_title}>{title}</Text>
        </View>

        <View style={styles.card_container_child_checkbox}>
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
