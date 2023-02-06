import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const InfoStyle = StyleSheet.create({
  container_contents: {
    flex: 1,
    width: SCREEN_WIDTH,
    padding: 30,
  },
  container_contents_scroll: {
    flex: 1,
    width: SCREEN_WIDTH,
    paddingTop: 20,
    paddingHorizontal: 15,
    marginBottom: 19
  },
  container_definition: {
    marginHorizontal: 5,
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  img: {
    width: 20,
    height: 60,
    marginHorizontal: 6,
  },
  text_definition_title: {
    color: "#00284E",
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 10,
  },
  text_definition_contents: {
    color: "#878787",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 25,
  },
  container_menu: {
    flex: 4,
    paddingTop: 40,
    alignItems: 'center',
  },
  btn_menu: {
    width: SCREEN_WIDTH - 70,
    marginBottom: 40,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 6,
  },
  btnText_menu: {
    color: '#00284E',
    fontSize: 23,
    fontWeight: 'bold'
  },

  container_precaution: {
    marginBottom: 30,
    marginHorizontal: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  container_precaution_item: {
    marginBottom: 7,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  text_detail_title: {
    color: "#000000",
    fontSize: 23,
    fontWeight: "900",
  },
  text_detail_contents: {
    color: "#0559A8",
    fontSize: 16,
    fontWeight: "900",
    marginTop: 13,
    marginBottom: 5
  },
  text_detail_commentary: {
    color: "#878787",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 25,
  },

  container_help: {
    marginTop: 30,
    marginHorizontal: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  text_help_title_red: {
    marginBottom: 10,
    color: "#D22C2C",
    fontSize: 23,
    fontWeight: "900",
  },
});

export default InfoStyle;