import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

function IconChart() {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart);

  const uniqueIds = new Set();

  const uniqueCartItems = cart.filter((item) => {
    if (!uniqueIds.has(item.id)) {
      uniqueIds.add(item.id);
      return true;
    }
    return false;
  });

  const routeChart = () => {
    navigation.navigate("Chart");
  };

  return (
    <View style={styles.bodyIconChart}>
      <TouchableOpacity onPress={routeChart}>
        <View style={styles.container}>
          <Text style={styles.text}>{uniqueCartItems.length}</Text>
          <Icon name="shopping-cart" size={25} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyIconChart: {
    marginRight: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
    overflow: "hidden",
    textAlign: "center",
    width: 25,
  },
});

export default IconChart;
