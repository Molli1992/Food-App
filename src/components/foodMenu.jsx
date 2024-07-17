import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CardProducts from "./cardProducts";
import foods from "../data/dataFoods";

function Menu() {
  const [stateView, setStateView] = useState("todos");

  const seeBebidas = () => {
    setStateView("bebidas");
  };

  const seePrincipales = () => {
    setStateView("principales");
  };

  const seePostres = () => {
    setStateView("postres");
  };

  const seeAll = () => {
    setStateView("todos");
  };

  const arrayTouchable = [
    { name: "Menu completo", id: 1, action: seeAll },
    { name: "Bebidas", id: 2, action: seeBebidas },
    { name: "Principales", id: 3, action: seePrincipales },
    { name: "Postres", id: 4, action: seePostres },
  ];

  return (
    <View style={styles.bodyMenu}>
      <FlatList
        horizontal={true}
        style={styles.list}
        data={arrayTouchable}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.containerButtonsSearch}>
            <TouchableOpacity style={styles.touchable} onPress={item.action}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {stateView === "todos" || stateView === "bebidas" ? (
        <View>
          {stateView === "todos" ? (
            <Text style={styles.textMenu}>Bebidas</Text>
          ) : (
            <Text style={styles.textFilter}>Bebidas</Text>
          )}

          {foods.length !== 0 &&
            foods.map((food) => {
              if (food.type === "Bebidas")
                return <CardProducts key={food.id} Array={food} />;
            })}
        </View>
      ) : null}

      {stateView === "todos" || stateView === "principales" ? (
        <View>
          {stateView === "todos" ? (
            <Text style={styles.textMenu}>Principales</Text>
          ) : (
            <Text style={styles.textFilter}>Principales</Text>
          )}
          {foods.length !== 0 &&
            foods.map((food) => {
              if (food.type === "Principales")
                return <CardProducts key={food.id} Array={food} />;
            })}
        </View>
      ) : null}

      {stateView === "todos" || stateView === "postres" ? (
        <View>
          {stateView === "todos" ? (
            <Text style={styles.textMenu}>Postres</Text>
          ) : (
            <Text style={styles.textFilter}>Postres</Text>
          )}
          {foods.length !== 0 &&
            foods.map((food) => {
              if (food.type === "Postres")
                return <CardProducts key={food.id} Array={food} />;
            })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  bodyMenu: {
    width: "100%",
  },
  list: {
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
  },
  containerButtonsSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
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
    marginTop: 25,
  },
  textFilter: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 25,
    color: "gray",
  },
});

export default Menu;
