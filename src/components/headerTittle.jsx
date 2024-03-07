import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function headerTittle() {
  const navigation = useNavigation();

  const routeChart = () => {
    navigation.navigate("Home");
  };

  return (
    <TouchableOpacity onPress={routeChart}>
      <Text style={styles.text}>Food-App</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default headerTittle;
