import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import foods from "../data/dataFoods";
import FoodList from "./foodList";

function SearchBar() {
  const [valueInput, setValueInput] = useState("");
  const [filter, setFilter] = useState([]);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setFilter([]);
    } else {
      let filteredFoods = foods.filter((food) => {
        const searchStr = value.toLowerCase();
        return (
          food.name.toLowerCase().includes(searchStr) ||
          food.type.toLowerCase().includes(searchStr)
        );
      });

      setFilter(filteredFoods);
    }

    setValueInput(value);
  };

  return (
    <View style={styles.bodySearch}>
      <TextInput
        style={styles.inputSearch}
        placeholder="Busca por nombre o tipo..."
        value={valueInput}
        onChangeText={handleSearch}
      />

      {filter.length ? <FoodList Array={filter} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  bodySearch: {
    width: "100%",
    padding: 15,
  },
  inputSearch: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    color: "black",
    padding: 10,
    fontSize: 18,
  },
});

export default SearchBar;
