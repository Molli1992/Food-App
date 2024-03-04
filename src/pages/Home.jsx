import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import foods from "../data/dataFoods";
import ButtonsSearch from "../components/buttonsSearch";
import CardProducts from "../components/cardProducts";

function Home() {
  return (
    <ScrollView>
      <View style={styles.bodyHome}>
        <SearchBar />
        <Image source={{ uri: foods[2].img }} style={styles.image} />
        <ButtonsSearch />
        {foods.length &&
          foods.map((food) => {
            if (food.type === "Bebidas") {
              return null;
            } else {
              return <CardProducts Array={food} />;
            }
          })}
      </View>
    </ScrollView>
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
