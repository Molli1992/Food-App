import React from "react";
import { TextInput, StyleSheet } from "react-native";

function PrimaryInput(props) {
  return (
    <TextInput
      style={[styles.Input, { width: props.Width }]}
      onChangeText={props.OnChange}
      placeholder={props.PlaceHolder}
      value={props.Value}
      secureTextEntry={props.Password}
    />
  );
}

const styles = StyleSheet.create({
  Input: {
    backgroundColor: "#ffffff",
    height: 40,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default PrimaryInput;
