import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

export interface SpeechBubbleProps {
  bubbleColor: string;
  bubbleDirection: string;
  textColor: string;
  textContent: string;
}

const SpeechBubble = (props: SpeechBubbleProps) => {
  const { bubbleColor, bubbleDirection, textColor, textContent } = props;
  return (
    <View
      style={[
        styles.position,
        {
          justifyContent:
            bubbleDirection === "right" ? "flex-start" : "flex-end",
        },
      ]}
    >
      <View style={styles.talkBubble}>
        <View
          style={[styles.talkBubbleSquare, { backgroundColor: bubbleColor }]}
        >
          <Text
            style={[
              styles.talkBubbleMessage,
              {
                color: textColor,
                textAlign: bubbleDirection === "right" ? "right" : "left",
              },
            ]}
          >
            {textContent}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  position: {
    height: "auto",
    paddingBottom: 10,
  },
  talkBubble: {
    zIndex: 2,
    flex: 1,
  },
  talkBubbleSquare: {
    width: "auto",
    maxWidth: 200,
    height: "auto",
    borderRadius: 12,
  },
  talkBubbleMessage: {
    margin: 10,
    fontSize: 20,
  },
});

export default SpeechBubble;
