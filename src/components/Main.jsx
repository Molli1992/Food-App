import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Main() {
  return (
    <View style={styles.bodyMain}>
      <Text style={styles.text}>Portafolio Felipe Blaksley</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyMain: {
    marginBottom: 20,
    marginTop: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Main;
