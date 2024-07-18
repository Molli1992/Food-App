import * as React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

function headerTittle(props) {
  const navigation = useNavigation();
  const route = useRoute();

  const routeChart = () => {
    if (route.name === "Login" || route.name === "Register") {
      return null;
    } else {
      navigation.navigate("Home");
    }
  };
;

  return (
    <View>
      {route.name === "Login" || route.name === "Register" ? (
        <Text style={styles.text}>{props.Title}</Text>
      ) : (
        <TouchableOpacity onPress={routeChart}>
          <Text style={styles.text}>Food-App</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default headerTittle;
