import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import CommonStyle from "../common/common_style";
import Banner from "../application_doc/banner";
import AppDocStyle from "../application_doc/appDoc_style";
import ExitBtn from "../common/exit_btn";

const AppDoc = ({ navigation }: any) => {
  const [docIndex, setDocIndex] = useState<string>("simul");
  const simulDoc = [
    {
      imgSrc: require("../../assets/images/banner/1.png"),
      imgText:
        "해당 부분을 누르면 보이스피싱, 스미싱을 실감나게 체험할 수 있어요",
    },
    {
      imgSrc: require("../../assets/images/banner/simul1.png"),
      imgText:
        "앱을 누르면 체험 목록으로, 상단의 알림을 클릭하면 체험으로 바로 이동해요",
    },
    {
      imgSrc: require("../../assets/images/banner/simul2.png"),
      imgText: "해당 부분을 누르면 체험이 시작됩니다.",
    },
    {
      imgSrc: require("../../assets/images/banner/simul3.png"),
      imgText: "오른쪽 체크박스로 학습 완료 여부를 알 수 있어요",
    },
    {
      imgSrc: require("../../assets/images/banner/simul4.png"),
      imgText: "하단의 이동버튼으로 화면을 이동할 수 있어요",
    },
    {
      imgSrc: require("../../assets/images/banner/simul5.png"),
      imgText:
        "보이스피싱 체험은 좌측의 전화받기 버튼을 클릭하면 체험을 시작할 수 있어요",
    },
    {
      imgSrc: require("../../assets/images/banner/simul6.png"),
      imgText:
        "화면을 터치하면 대화가 나타나요. 마지막에는 대응 방법을 선택할 수 있어요",
    },
  ];

  const quizDoc = [
    {
      imgSrc: require("../../assets/images/banner/2.png"),
      imgText: "클릭하면 피싱 정보를 퀴즈의 형태로 학습할 수 있어요",
    },
    {
      imgSrc: require("../../assets/images/banner/quiz1.png"),
      imgText:
        "화살표를 통해 이전 또는 다음 문제로 이동이 가능하고, 답을 선택하면 정답이 나옵니다",
    },
  ];

  const communityDoc = [
    {
      imgSrc: require("../../assets/images/banner/3.png"),
      imgText:
        "클릭하면 다른 사람들과 실시간으로 소통하며 피싱정보를 공유할 수 있어요",
    },
    {
      imgSrc: require("../../assets/images/banner/community1.png"),
      imgText: "각 분류를 누르면 종류별로 게시판 글을 확인할 수 있어요",
    },
    {
      imgSrc: require("../../assets/images/banner/community2.png"),
      imgText: "하단의 글 작성하기 버튼을 통해 게시판에 글을 쓸 수 있어요",
    },
    {
      imgSrc: require("../../assets/images/banner/community3.png"),
      imgText:
        "분류를 선택하고, 제목과 내용을 모두 작성한 후 작성 완료 버튼을 누르면 글 작성이 완료됩니다",
    },
  ];

  const handlePress = (index: string) => {
    setDocIndex(index);
  };

  return (
    <SafeAreaView style={CommonStyle.container}>
      <View style={AppDocStyle.index_container}>
        <TouchableOpacity
          style={[
            AppDocStyle.index_box,
            { marginRight: 20 },
            docIndex === "simul"
              ? { backgroundColor: "#D2ECFA" }
              : { backgroundColor: "#E8E8E8" },
          ]}
          onPress={() => setDocIndex("simul")}
        >
          <Text style={AppDocStyle.index_text}>체험</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            AppDocStyle.index_box,
            { marginRight: 20 },
            docIndex === "quiz"
              ? { backgroundColor: "#D2ECFA" }
              : { backgroundColor: "#E8E8E8" },
          ]}
          onPress={() => setDocIndex("quiz")}
        >
          <Text style={AppDocStyle.index_text}>퀴즈</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            AppDocStyle.index_box,
            docIndex === "community"
              ? { backgroundColor: "#D2ECFA" }
              : { backgroundColor: "#E8E8E8" },
          ]}
          onPress={() => setDocIndex("community")}
        >
          <Text style={AppDocStyle.index_text}>소통</Text>
        </TouchableOpacity>
      </View>
      <View style={AppDocStyle.banner_wrapper}>
        <View
          style={
            docIndex === "simul" ? { display: "flex" } : { display: "none" }
          }
        >
          <Banner docList={simulDoc} />
        </View>
        <View
          style={
            docIndex === "quiz" ? { display: "flex" } : { display: "none" }
          }
        >
          <Banner docList={quizDoc} />
        </View>
        <View
          style={
            docIndex === "community" ? { display: "flex" } : { display: "none" }
          }
        >
          <Banner docList={communityDoc} />
        </View>
      </View>
      <ExitBtn navigation={navigation} content={"사용설명서 나가기"} />
    </SafeAreaView>
  );
};

export default AppDoc;
