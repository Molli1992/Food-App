import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import AddItemChart from "./addItmeChart";
import { useNavigation } from "@react-navigation/native";

function CardProducts(props) {
  const navigation = useNavigation();

  const seeCardDetail = () => {
    navigation.push("CardDetail", {
      productId: props.Array.id,
    });
  };
  
  return (
    <TouchableOpacity style={styles.bodyCardProducts} onPress={seeCardDetail}>
      <Image source={{ uri: props.Array.img }} style={styles.image} />

      <View style={styles.container} id={props.Array.id}>
        <Text style={styles.textTittle}>{props.Array.name}</Text>

        <Text style={styles.text}>{props.Array.description}</Text>

        <Text style={styles.text}>${props.Array.price}</Text>

        <AddItemChart ID={props.Array.id} />
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
    paddingBottom: 10,
    flexDirection: "row",
    height: 150,
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
});

export default CardProducts;
