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
  simulNum: number;
  title: string;
  commentary: string;
  done: string;
  navigation: any;
}

const MessageCard = (props: MessageCardProps) => {
  const { simulNum, title, commentary, done } = props;
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

        {/*/ 체험 제목 자동 줄바꿈 하니까 체크박스가 안보이는 문제 있음 */}
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
    flexDirection: "row",
    width: SCREEN_WIDTH - 80,
  },
  card_container_child: {
    flexDirection: "row",
    flex: 2,
  },
  card_container_child_checkbox: {
    //backgroundColor: 'blue',
    flex: 1,
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
