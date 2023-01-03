import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const RegisterStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH - 30,
    alignContent: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  container_input: {
    flex: 1,
    alignContent: 'center',
  },
  container_item: {
    marginTop: 30
  },
  container_item_input: {
    flexDirection: 'row'
  },
  title_item: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 15,
    color: '#00284E',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInput_item: {
    width: SCREEN_WIDTH - 140,
    height: 60,
    marginTop: 10,
    marginLeft: 15,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 20,
  },
  textInput_item_pw: {
    width: SCREEN_WIDTH - 60,
    height: 60,
    marginTop: 10,
    marginLeft: 15,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    fontSize: 20,
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
  container_btn: {
    alignItems: 'center',
  },
  btn_register: {
    width: SCREEN_WIDTH - 60,
    height: 60,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#00284E',
  },
  btnText_register: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: "bold"
  },
})

export default RegisterStyle;