import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SettingStyle = StyleSheet.create({
  container_contents: {
    flex: 1,
    width: SCREEN_WIDTH,
    padding: 30,
  },
  container_info: {
    marginHorizontal: 5,
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  text_title: {
    color: "#00284E",
    fontSize: 19,
    fontWeight: "900",
    marginBottom: 10,
  },
  container_info_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginVertical: 10,
  },
  text_info_title: {
    fontSize: 15,
    fontWeight: "500",
    color: "#707070",
  },
  text_info_value: {
    fontSize: 15,
  },
  container_setting: {
    marginTop: 30,
    alignItems: "center",
  },
  btn_setting: {
    width: SCREEN_WIDTH - 70,
    height: 60,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#00284E",
  },
  title_setting: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  container_modal: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  container_modal_main: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  container_modal_main_options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },
  text_modal_question: {
    fontSize: 16,
    fontWeight: "900",
    color: "#848484",
  },
  text_modal_option: {
    width: 65,
    height: 27,
    fontSize: 14,
    fontWeight: "900",
    backgroundColor: "#848484",
    borderRadius: 20,
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 10,
    marginHorizontal: 20,
    color: "#FFFFFF",
  },
});

export default SettingStyle;