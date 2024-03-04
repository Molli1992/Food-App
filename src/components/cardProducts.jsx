import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

function CardProducts(props) {
  const navigation = useNavigation();
  const addItemToChart = () => {};
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CardDetail", {
          productId: props.Array.id,
        })
      }
    >
      <View style={styles.bodyCardProducts} id={props.Array.id}>
        <Image source={{ uri: props.Array.img }} style={styles.image} />

        <Text style={styles.textTittle}>{props.Array.name}</Text>

        <Text style={styles.text}>{props.Array.description}</Text>

        <Text style={styles.text}>{props.Array.price}</Text>

        <View style={styles.containerPuntuacion}>
          <Text style={styles.textPuntuacion}>{props.Array.puntuacion}</Text>
          <Icon name="star" size={15} color="#fff" style={styles.iconStyle} />
        </View>

        <TouchableOpacity onPress={addItemToChart} style={styles.touchable}>
          <Text style={styles.textTouchable}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bodyCardProducts: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
    marginTop: 10,
  },
  image: { width: "100%", height: 200, borderRadius: 10 },
  textTittle: { fontWeight: "bold", fontSize: 22, flexWrap: "wrap" },
  text: {
    fontWeight: "400",
    fontSize: 17,
    flexWrap: "wrap",
    marginTop: 2,
  },
  containerPuntuacion: {
    width: 75,
    marginTop: 5,
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
    fontSize: 17,
  },
  textTouchable: {
    color: "#0B7988",
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 8,
    marginTop: 10,
  },
});

export default CardProducts;
