import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const QuizStyle = StyleSheet.create({
  container_question: {
    width: SCREEN_WIDTH - 30,
    alignContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  text_question_num: {
    fontSize: 25,
    color: "#969595",
    fontWeight: "700"
  },
  text_question: {
    fontSize: 22,
    color: "#00284E",
    fontWeight: "700"
  },
  container_option: {
    
  },
  container_commentary: {
    backgroundColor: '#E9E9E9',
    marginVertical: 5,
    marginHorizontal: 27,
    paddingVertical: 30,
    paddingHorizontal: 27,
    borderRadius: 15,
    alignItems: 'center'
  },
  text_quizResult: {
    marginBottom: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: "coral"
  },
  text_commentary: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 25,
  },
  btn_container_option: {
    width: SCREEN_WIDTH - 100,
    paddingVertical: 12,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  container_navigator: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000"
  },
  btn_container_back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 20
  },
  btn_container_next: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 20
  },
  btn_move_text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#00284E"
  },
})

export default QuizStyle;