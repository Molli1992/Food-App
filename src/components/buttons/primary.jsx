import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function PrimaryButton(props) {
  return (
    <TouchableOpacity
      style={[styles.Button, { width: props.Width }]}
      onPress={props.OnPress}
    >
      <Text style={styles.TextButton}>{props.Text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#1a73e8",
    width: "70%",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 5,
  },
  TextButton: { textAlign: "center", color: "#ffffff", fontWeight: "bold" },
});

export default PrimaryButton;
