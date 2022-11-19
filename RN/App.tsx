import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import Main from "./src/components/main/main";
import Login from "./src/components/login/login";
import SimulMain from "./src/components/simul_main/simul_main";
import MessageSimul from "./src/components/simul_message/simul_message";
import MessageDetail from "./src/components/simul_message/[id]";
import CorrectPage from "./src/components/simul_message/correct";
import WrongPage from "./src/components/simul_message/wrong";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Login /> */}
      {/* <Main /> */}
      <SimulMain />
      {/* <MessageSimul /> */}
      {/* <MessageDetail /> */}
      {/* <CorrectPage /> */}
      {/* <WrongPage /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00284E",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 50,
  },
});

export default App;
