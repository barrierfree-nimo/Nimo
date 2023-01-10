import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const CommunityModal = (props: any) => {
  const { modalVisible, setModalVisible, setSelected, canUD, setFocusedType } =
    props;

  return (
    <SafeAreaView>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View>
          <View style={[styles.report_box, { backgroundColor: "lightgray" }]}>
            <Text style={styles.report_text}>메뉴</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSelected("user-report");
              setModalVisible(false);
              setFocusedType("");
            }}
            style={styles.report_box}
          >
            <Text style={styles.report_text}>사용자 신고</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected("post-report");
              setModalVisible(false);
              setFocusedType("");
            }}
            style={styles.report_box}
          >
            <Text style={styles.report_text}>게시물/댓글 신고</Text>
          </TouchableOpacity>
          {canUD === true && (
            <TouchableOpacity
              onPress={() => {
                setSelected("modify");
                setModalVisible(false);
                setFocusedType("");
              }}
              style={styles.report_box}
            >
              <Text style={styles.report_text}>수정</Text>
            </TouchableOpacity>
          )}
          {canUD === true && (
            <TouchableOpacity
              onPress={() => {
                setSelected("delete");
                setModalVisible(false);
                setFocusedType("");
              }}
              style={styles.report_box}
            >
              <Text style={styles.report_text}>삭제</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              setFocusedType("");
            }}
            style={[styles.report_box, { backgroundColor: "lightgray" }]}
          >
            <Text style={styles.report_text}>취소</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  report_box: {
    width: SCREEN_WIDTH - 80,
    height: SCREEN_WIDTH / 6,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
  },
  report_text: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default CommunityModal;
