import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

// 말풍선 색상, 말풍선 꼬리 위치, 글씨 색상을 props로 받기

export interface SpeechBubbleProps {
  bubbleColor: string;
  bubbleDirection: string;
  textColor: string;
  textContent: string;
}

const SpeechBubble = (props: SpeechBubbleProps) => {
  const { bubbleColor, bubbleDirection, textColor, textContent } = props;
  return (
    <View>
      <View style={styles.talkBubble}>
        <View
          style={[styles.talkBubbleSquare, { backgroundColor: bubbleColor }]}
        >
          <Text style={[styles.talkBubbleMessage, { color: textColor }]}>
            {textContent}
          </Text>
        </View>
        {bubbleDirection === "left" ? (
          <View
            style={[
              styles.talkBubbleTriangle,
              { borderRightColor: bubbleColor, left: -30 },
            ]}
          />
        ) : (
          <View
            style={[
              styles.talkBubbleTriangle,
              { borderLeftColor: bubbleColor, right: -30 },
            ]}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  talkBubble: {
    position: "absolute",
    zIndex: 2,
    flex: 1,
    left: Dimensions.get("window").width / 2 - 180,
    marginTop: 180,
  },
  talkBubbleSquare: {
    width: 200,
    height: "auto",
    borderRadius: 10,
  },
  // talkBubbleTriangle: {
  //   position: "absolute",
  //   bottom: 0,
  //   left: -30,
  //   borderLeftWidth: 20,
  //   borderRightWidth: 20,
  //   borderTopWidth: 20,
  //   borderLeftColor: "transparent",
  //   borderTopColor: "transparent",
  // },
  talkBubbleTriangle: {
    position: "absolute",
    bottom: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
  },
  talkBubbleMessage: {
    margin: 10,
  },
});

export default SpeechBubble;
