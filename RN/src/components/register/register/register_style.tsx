import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const RegisterStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignContent: 'center',
    marginTop: 5,
    marginHorizontal: 20,
  },
  container_input: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  container_item: {
    marginTop: 25
  },
  container_item_input: {
    flexDirection: 'row'
  },
  title_item: {
    justifyContent: 'center',
    alignContent: 'center',
    color: '#00284E',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInput_item: {
    width: SCREEN_WIDTH - 140,
    height: 60,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 20,
  },
  textInput_item_pw: {
    width: SCREEN_WIDTH - 60,
    height: 60,
    marginTop: 10,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 20,
  },
  text_notice: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 10,
    color: "#23BF15"
  },
  btn_overlapping: {
    width: 80,
    height: 60,
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'gray',
  },
  btnText_overlapping: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: "bold"
  },
  container_checkbox: {
    width: SCREEN_WIDTH - 80,
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 15,
  },
  checkbox: {
    width: 25,
    height: 25
  },
  text_checkbox_title: {
    textAlign: 'center',
    textAlignVertical: "center",
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "500"
  },
  btn_checkbox_link: {
    justifyContent: 'center',
  },
  text_checkbox_link: {
    textAlign: 'center',
    textAlignVertical: "center",
    color: '#A6A6A6',
    marginLeft: 7,
    fontSize: 15,
    fontWeight: "500"
  },
  container_btn: {
    alignItems: 'center',
  },
  btn_register: {
    width: SCREEN_WIDTH - 60,
    height: 60,
    marginTop: 25,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#00284E',
  },
  btnText_register: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: "bold"
  },
})

export default RegisterStyle;