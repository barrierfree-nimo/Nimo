import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
interface CommunityModalProps {
  modalVisible: boolean;
  canUD: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  setSelected: (selected: string) => void;
  setFocusedType: (focusedType: string) => void;
}

const CommunityModal = (props: CommunityModalProps) => {
  const { modalVisible, canUD, setModalVisible, setSelected, setFocusedType } =
    props;
  // const [delModalVisible, setDelModalVisible] = useState<string>("");

  return (
    <SafeAreaView>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View>
          <View style={[styles.report_box, { backgroundColor: "#00284E" }]}>
            <Text style={styles.report_text_white}>메뉴</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSelected("user-report");
              setModalVisible(false);
            }}
            style={styles.report_box}
          >
            <Text style={styles.report_text}>사용자 신고</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected("post-report");
              setModalVisible(false);
            }}
            style={styles.report_box}
          >
            <Text style={styles.report_text}>게시물 / 댓글 신고</Text>
          </TouchableOpacity>
          {canUD === true && (
            <TouchableOpacity
              onPress={() => {
                setSelected("modify");
                setModalVisible(false);
              }}
              style={styles.report_box}
            >
              <Text style={styles.report_text}>수정</Text>
            </TouchableOpacity>
          )}
          {canUD === true && (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                setSelected("delete");
                // setDelModalVisible("true");
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
              setSelected("");
            }}
            style={[styles.report_box, { backgroundColor: "#00284E" }]}
          >
            <Text style={styles.report_text_white}>취소</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* {delModalVisible === "true" && (
        <Modal
          isVisible={delModalVisible === "true"}
          useNativeDriver={true}
          hideModalContentWhileAnimating={true}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.del_div}>
            <View style={styles.del_confirm_div}>
              <Text style={styles.report_text}>삭제하시겠습니까?</Text>
            </View>
            <View style={styles.del_row_div}>
              <TouchableOpacity
                onPress={() => {
                  setSelected("delete");
                  setDelModalVisible("false");
                }}
                style={[
                  styles.del_each,
                  { borderRightWidth: 4, borderColor: "black" },
                ]}
              >
                <Text style={styles.report_text}>예</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setDelModalVisible("false");
                }}
                style={styles.del_each}
              >
                <Text style={styles.report_text}>아니오</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )} */}
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
    borderWidth: 1,
    borderRadius: 5,
  },
  report_text_white: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  report_text: {
    fontSize: 20,
    fontWeight: "600",
  },
  // del_div: {
  //   width: SCREEN_WIDTH - 80,
  //   height: SCREEN_WIDTH / 3,
  //   backgroundColor: "white",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderColor: "black",
  //   borderWidth: 2,
  // },
  // del_confirm_div: {
  //   width: "100%",
  //   flex: 3,
  //   backgroundColor: "white",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderColor: "black",
  //   borderWidth: 3,
  // },
  // del_row_div: {
  //   width: "100%",
  //   flexDirection: "row",

  //   backgroundColor: "white",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  //   borderColor: "black",
  //   borderWidth: 3,
  // },
  // del_each: {
  //   width: "50%",
  //   borderColor: "black",
  //   alignItems: "center",
  // },
});

export default CommunityModal;
