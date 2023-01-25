import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const RegisterInfoStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: "center",
  },
  container_notice: {
    width: "100%",
    justifyContent: "center",
    paddingVertical: 17,
  },
  text_notice: {
    fontSize: 18,
    textAlign: "left",
    lineHeight: 27
  },
  container_info: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10
    //borderWidth: 1
  },
  container_info_row: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  container_info_col: {
    marginVertical: 10,
  },
  text_input_title: {
    marginRight: 20,
    paddingVertical: 15,
    textAlign: "left",
    textAlignVertical: "center",
    color: '#00284E',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput_name: {
    width: SCREEN_WIDTH - 170,
    paddingVertical: 15,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 20,
  },
  textInput_bank: {
    width: "100%",
    paddingVertical: 15,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 20,
  },
  container_radio: {
    flexDirection: "row",
    alignItems: "center",
  },
  container_radio_item: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20
  },
  text_radio_item: {
    fontSize: 20,
    color: "#000000"
  },
  dropdown: {
    width: 150,
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    backgroundColor: "#E6E6E6",
    fontSize: 24,
  },
  container_btn: {
    justifyContent: 'center',
    alignItems: "center"
  },
  btn_fin: {
    width: SCREEN_WIDTH - 60,
    paddingVertical: 15,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#00284E',
  },
  text_btn_fin: {
    fontSize: 20,
    fontWeight: "900",
    color: "#FFFFFF"
  },
  btn_skip: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    marginBottom: 10,
    alignItems: "center",
  },
  text_btn_skip: {
    fontSize: 17,
    fontWeight: "500",
    color: '#00284E'
  }
});

export default RegisterInfoStyle;