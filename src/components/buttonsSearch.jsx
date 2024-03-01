import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import foods from "../data/dataFoods";
import FoodList from "./foodList";

function ButtonsSearch() {
  const [filter, setFilter] = useState([]);

  const filterPrincipales = () => {
    let filteredFoods = foods.filter((food) => {
      const searchStr = "principales";
      return food.type.toLowerCase().includes(searchStr);
    });

    setFilter(filteredFoods);
  };

  const filterBebidas = () => {
    let filteredFoods = foods.filter((food) => {
      const searchStr = "bebidas";
      return food.type.toLowerCase().includes(searchStr);
    });

    setFilter(filteredFoods);
  };

  const filterPostres = () => {
    let filteredFoods = foods.filter((food) => {
      const searchStr = "postres";
      return food.type.toLowerCase().includes(searchStr);
    });

    setFilter(filteredFoods);
  };

  const filterClean = () => {
    setFilter([]);
  };
  return (
    <View style={styles.bodyButtonsSearch}>
      <View style={styles.containerButtonsSearch}>
        <TouchableOpacity style={styles.touchable} onPress={filterPrincipales}>
          <Text style={styles.text}>Principales</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={filterBebidas}>
          <Text style={styles.text}>Bebidas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={filterPostres}>
          <Text style={styles.text}>Postres</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={filterClean}>
          <Text style={styles.text}>Clean</Text>
        </TouchableOpacity>
      </View>

      {filter.length ? <FoodList Array={filter} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  bodyButtonsSearch: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
});

export default ButtonsSearch;
