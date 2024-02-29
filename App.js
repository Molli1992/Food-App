import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Main from "./src/components/Main";
import RepositoryList from "./src/components/RepositoryList";

function App() {
  return (
    <View style={styles.bodyApp}>
      <Main />
      <RepositoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyApp: {
    width: "100%",
    minHeight: "100%",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
  },
});

export default App;
