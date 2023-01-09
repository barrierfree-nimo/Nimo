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
            <Text style={styles.button_arrow_text}>{">"}</Text>
            <Text style={styles.buttonText}>다음</Text>
          </>
        }
        prevButton={
          <>
            <Text style={styles.button_arrow_text}>{"<"}</Text>
            <Text style={styles.buttonText}>이전</Text>
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
    backgroundColor: "#D2ECFA",
    padding: 20,
    borderRadius: 15,
    margin: 10,
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
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "600",
    color: "#00284E",
  },
  button_arrow_text: {
    fontSize: 60,
    fontWeight: "700",
    color: "#00284E",
  },
});

export default Banner;
