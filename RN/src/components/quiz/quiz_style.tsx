import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const QuizStyle = StyleSheet.create({
  container_question: {
    width: SCREEN_WIDTH - 30,
    alignContent: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text_question: {
    fontSize: 20,
    color: "white"
  },
  container_option: {

  },
  btn_container_option: {
    width: SCREEN_WIDTH - 100,
    height: 50,
    backgroundColor: 'ivory',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  container_navigator: {
    flexDirection: "row"
  },
  btn_text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  btn_container_back: {
    width: SCREEN_WIDTH - 270,
    height: 60,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 20
  },
  btn_container_next: {
    width: SCREEN_WIDTH - 270,
    height: 60,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 20
  },
})

export default QuizStyle;