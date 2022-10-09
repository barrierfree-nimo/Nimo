import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const RegisterStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH - 30,
    alignContent: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  container_item: {
    flex: 1,
    marginTop: 30
  },
  container_item_input: {
    flexDirection: 'row'
  },
  title_item: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInput_item: {
    width: SCREEN_WIDTH - 140,
    height: 50,
    marginTop: 10,
    marginLeft: 15,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: 'orange',
    fontSize: 20,
  },
  btn_overlapping: {
    width: 80,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'gray',
  },
  container_btn: {
    flex: 1.5,
    alignItems: 'center',
  },
  btn_register: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    marginTop: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'coral',
  },
  btnText_register: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "500"
  },
})

export default RegisterStyle;