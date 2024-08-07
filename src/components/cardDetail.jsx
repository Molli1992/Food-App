import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import foods from "../data/dataFoods";
import { useRoute, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import AddItemChart from "./addItmeChart";
import { useDispatch } from "react-redux";
import {
  postCarts,
  getLength,
} from "../redux/actions";


const CardDetail = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const { productId } = route.params;
  const [food, setFood] = useState([]);

  useEffect(() => {
    if (food.length === 0) {
      let filterFood = foods.filter((food) => {
        if (food.id === productId) {
          return food;
        }
      });

      setFood(filterFood);
    }
  });

  const onClickComprar = () => {
    dispatch(postCarts(productId));
    dispatch(getLength(productId));
    navigation.navigate("Chart");
  };

  if (food.length !== 0) {
    return (
      <View style={styles.bodyCardDetail} id={food[0].id}>
        <Image source={{ uri: food[0].img }} style={styles.image} />

        <Text style={styles.textTittle}>{food[0].name}</Text>

        <Text style={styles.text}>{food[0].description}</Text>

        <Text style={styles.text}>${food[0].price}</Text>

        <View style={styles.containerPuntuacion}>
          <Text style={styles.textPuntuacion}>{food[0].puntuacion}</Text>
          <Icon name="star" size={15} color="#fff" style={styles.iconStyle} />
        </View>

        <AddItemChart ID={food[0].id} />

        <TouchableOpacity style={styles.buttonComprar} onPress={onClickComprar}>
          <Text style={styles.textComprar}>Comprar</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bodyCardDetail: {
    width: "100%",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },
  textTittle: {
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 10,
  },
  text: {
    fontWeight: "400",
    fontSize: 17,
    flexWrap: "wrap",
    marginTop: 5,
  },
  containerPuntuacion: {
    width: 75,
    marginTop: 10,
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
  buttonComprar: {
    backgroundColor: "#0B7988",
    padding: 7,
    borderRadius: 10,
    marginTop: 10,
    width: 150,
    alignItems: "center",
  },
  textComprar: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default CardDetail;
