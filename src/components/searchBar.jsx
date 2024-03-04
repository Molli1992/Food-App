import React, { useState, useRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import foods from "../data/dataFoods";
import FoodList from "./foodList";
import Icon from "react-native-vector-icons/FontAwesome";

function SearchBar() {
  const [valueInput, setValueInput] = useState("");
  const [filter, setFilter] = useState([]);
  const flatListRef = useRef(null);

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

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
      scrollToTop();
    }

    setValueInput(value);
  };

  return (
    <View style={styles.bodySearch}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Busca por nombre o tipo..."
          value={valueInput}
          onChangeText={handleSearch}
        />

        <Icon name="search" size={20} color="#000" style={styles.iconStyle} />
      </View>

      {filter.length ? <FoodList Array={filter} Ref={flatListRef} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  bodySearch: {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
  },
  searchContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputSearch: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    color: "black",
    padding: 10,
    fontSize: 18,
  },
  iconStyle: {
    position: "absolute",
    right: 10,
  },
});

export default SearchBar;
