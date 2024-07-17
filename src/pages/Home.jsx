import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import Menu from "../components/foodMenu";
import Promociones from "../components/promociones";
import foods from "../data/dataFoods";
import { PRUEBA_ENV } from "@env";

function Home() {
  console.log(PRUEBA_ENV);

  if (PRUEBA_ENV) {
    return (
      <ScrollView>
        <View style={styles.bodyHome}>
          <SearchBar />
          <Image source={{ uri: foods[2].img }} style={styles.image} />
          <Promociones />
          <Menu />
        </View>
      </ScrollView>
    );
  } else {
    return null;
  }
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
