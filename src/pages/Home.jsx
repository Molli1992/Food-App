import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import SearchBar from "../components/searchBar";
import foods from "../data/dataFoods";
import ButtonsSearch from "../components/buttonsSearch";

function Home() {
  return (
    <View style={styles.bodyHome}>
      <SearchBar />
      <Image source={{ uri: foods[2].img }} style={styles.image} />
      <ButtonsSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyHome: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default Home;
