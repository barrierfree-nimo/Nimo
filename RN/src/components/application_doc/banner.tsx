import React from "react";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

interface BannerListProps {
  imgSrc: any;
  imgText: string;
}

interface BannerProps {
  docList: BannerListProps[];
}

const Banner = (props: BannerProps) => {
  const [slideTime, setSlideTime] = useState(1);
  const { docList } = props;

  useEffect(() => {
    const autoTimer = setTimeout(() => setSlideTime(8), 1000);
    return () => clearTimeout(autoTimer);
  }, []);

  return (
    <>
      <Swiper
        autoplay
        showsPagination={true}
        autoplayTimeout={slideTime}
        showsButtons={true}
        activeDotColor={"#00284E"}
        nextButton={
          <>
            <View style={styles.container_move}>
              <Image
                style={styles.img_move}
                resizeMode="contain"
                source={require("../../assets/icons/quiz/ic_quiz_move_next.png")}
              />
              <Text style={styles.buttonText}>다음</Text>
            </View>
          </>
        }
        prevButton={
          <>
            <View style={styles.container_move}>
              <Image
                style={styles.img_move}
                resizeMode="contain"
                source={require("../../assets/icons/quiz/ic_quiz_move_back.png")}
              />
              <Text style={styles.buttonText}>이전</Text>
            </View>
          </>
        }
      >
        {docList.map(({ imgSrc, imgText }, id) => {
          return (
            <>
              <View key={id} style={styles.swiper_div}>
                <Image
                  source={imgSrc}
                  style={styles.img}
                  resizeMode="stretch"
                />
                <View style={styles.text_div}>
                  <Text style={styles.text}>{imgText}</Text>
                </View>
              </View>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

const styles = StyleSheet.create({
  swiper_div: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    borderColor: "#00284E",
    borderWidth: 3,
    alignItems: "center",
    height: "97%",
  },
  img: {
    width: "50%",
    height: "70%",
  },
  text_div: {
    width: "80%",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    lineHeight: 30,
  },
  container_move: {
    paddingHorizontal: 10,
  },
  img_move: {
    width: 50,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
    color: "#00284E",
  },
});

export default Banner;
