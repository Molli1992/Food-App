import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CardProducts from "./cardProducts";
import foods from "../data/dataFoods";

function Menu() {
  return (
    <View style={styles.bodyMenu}>
      <View style={styles.containerButtonsSearch}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>Bebidas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>Principales</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>Postres</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.textMenu}>Bebidas</Text>
        {foods.length !== 0 &&
          foods.map((food) => {
            if (food.type === "Bebidas") return <CardProducts Array={food} />;
          })}
      </View>

      <View>
        <Text style={styles.textMenu}>Principales</Text>
        {foods.length !== 0 &&
          foods.map((food) => {
            if (food.type === "Principales") return <CardProducts Array={food} />;
          })}
      </View>

      <View>
        <Text style={styles.textMenu}>Postres</Text>
        {foods.length !== 0 &&
          foods.map((food) => {
            if (food.type === "Postres") return <CardProducts Array={food} />;
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyMenu: {
    width: "100%",
  },
  containerButtonsSearch: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    gap: 15,
  },
  touchable: {
    backgroundColor: "#0B7988",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  textMenu: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 22,
  },
});

export default Menu;
