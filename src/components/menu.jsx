import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CardProducts from "./cardProducts";
import foods from "../data/dataFoods";

function Menu() {
  return (
    <View style={styles.bodyMenu}>
      <Text style={styles.text}>Bebidas</Text>
      {foods.length &&
        foods.map((food) => {
          if (food.type === "Bebidas") {
            return <CardProducts Array={food} />;
          } else {
            return null;
          }
        })}

      <Text style={styles.text}>Principales</Text>
      {foods.length &&
        foods.map((food) => {
          if (food.type === "Principales") {
            return <CardProducts Array={food} />;
          } else {
            return null;
          }
        })}

      <Text style={styles.text}>Postres</Text>
      {foods.length &&
        foods.map((food) => {
          if (food.type === "Postres") {
            return <CardProducts Array={food} />;
          } else {
            return null;
          }
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 22,
  },
});

export default Menu;
