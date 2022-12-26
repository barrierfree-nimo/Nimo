import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width

const QuizStyle = StyleSheet.create({
  container_question: {
    width: SCREEN_WIDTH - 30,
    alignContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  text_question: {
    fontSize: 23,
    color: "white"
  },
  container_option: {
    
  },
  container_commentary: {
    backgroundColor: 'ivory',
    marginVertical: 5,
    marginHorizontal: 20,
    paddingVertical: 40,
    paddingHorizontal: 27,
    borderRadius: 15,
    alignItems: 'center'
  },
  text_quizResult: {
    marginBottom: 10,
    fontSize: 38,
    fontWeight: 'bold',
    color: "coral"
    
  },
  text_commentary: {
    fontSize: 20
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
    backgroundColor: '#FFD542',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 20
  },
  btn_container_next: {
    width: SCREEN_WIDTH - 270,
    height: 60,
    backgroundColor: '#0BCD74',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 20
  },
})

export default QuizStyle;