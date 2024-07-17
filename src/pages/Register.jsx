import React from "react";
import { View, StyleSheet, Image, TextInput, Text } from "react-native";

function Register() {
  return (
    <View style={styles.body}>
      <Text>Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default Register;
