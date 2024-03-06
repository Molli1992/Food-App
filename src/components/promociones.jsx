import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import foods from "../data/dataFoods";
import FlatList from "./flatList";

function Promociones() {
  const [filterFood, setFilterFood] = useState([]);

  useEffect(() => {
    if (filterFood.length === 0) {
      const arrayPromociones = foods.filter((food) => {
        return food.type === "promocion";
      });

      setFilterFood(arrayPromociones);
    }
  });
  return (
    <View style={styles.bodyButtonsSearch}>
      <Text style={styles.textTittle}>Promociones</Text>

      {foods.length ? <FlatList Array={filterFood} Position={true}/> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  bodyButtonsSearch: {
    width: "100%",
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textTittle: {
    fontWeight: "bold",
    fontSize: 32,
  },
});

export default Promociones;
