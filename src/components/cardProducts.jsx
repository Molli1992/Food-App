import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AddItemChart from "./addItmeChart";

function CardProducts(props) {
  return (
    <View style={styles.bodyCardProducts} id={props.Array.id}>
      <Image source={{ uri: props.Array.img }} style={styles.image} />

      <View style={styles.container} id={props.Array.id}>
        <Text style={styles.textTittle}>{props.Array.name}</Text>

        <Text style={styles.text}>{props.Array.description}</Text>

        <Text style={styles.text}>${props.Array.price}</Text>

        <View style={styles.containerPuntuacion}>
          <Text style={styles.textPuntuacion}>{props.Array.puntuacion}</Text>
          <Icon name="star" size={12} color="#fff" style={styles.iconStyle} />
        </View>

        <AddItemChart ID={props.Array.id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyCardProducts: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
  },
  image: { width: "40%", height: "100%", borderRadius: 10 },
  container: {
    paddingLeft: 10,
    paddingRight: 5,
    width: "60%",
  },
  textTittle: { fontWeight: "bold", fontSize: 22, flexWrap: "wrap" },
  text: {
    fontWeight: "400",
    fontSize: 17,
    flexWrap: "wrap",
    marginTop: 2,
  },
  containerPuntuacion: {
    width: 67,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textPuntuacion: {
    color: "white",
    fontSize: 14,
  },
});

export default CardProducts;
