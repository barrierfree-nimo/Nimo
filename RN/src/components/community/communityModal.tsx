import React, { useState } from "react";

import Modal from "react-native-modal";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const CommunityModal = (props: any) => {
  const { modalVisible, setModalVisible, setSelected, canUD } = props;

  return (
    <SafeAreaView>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              setSelected("user-report");
              setModalVisible(false);
            }}
          >
            <Text>사용자 신고</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected("post-report");
              setModalVisible(false);
            }}
          >
            <Text>게시물/댓글 신고</Text>
          </TouchableOpacity>
          {canUD && (
            <TouchableOpacity
              onPress={() => {
                setSelected("modify");
                setModalVisible(false);
              }}
            >
              <Text>수정</Text>
            </TouchableOpacity>
          )}
          {canUD && (
            <TouchableOpacity
              onPress={() => {
                setSelected("delete");
                setModalVisible(false);
              }}
            >
              <Text>수정</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text>취소</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CommunityModal;
