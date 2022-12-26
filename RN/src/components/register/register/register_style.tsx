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
  container_item: {
    // flex: 1,
    marginTop: 30
  },
  container_item_input: {
    flexDirection: 'row'
  },
  title_item: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 15,
    color: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
    fontSize: 20,
  },
  textInput_item_pw: {
    width: SCREEN_WIDTH - 60,
    height: 60,
    marginTop: 10,
    marginLeft: 15,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
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
    height: 65,
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'coral',
  },
  btnText_register: {
    color: '#000000',
    fontSize: 27,
    fontWeight: "bold"
  },
})

export default RegisterStyle;