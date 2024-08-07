import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import AddItmeChart from "../components/addItmeChart";
import { useNavigation } from "@react-navigation/native";

const ShoppingChart = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart);
  var finalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    finalPrice = Number(finalPrice) + Number(cart[i].price);
  }

  const uniqueIds = new Set();

  const uniqueCartItems = cart.filter((item) => {
    if (!uniqueIds.has(item.id)) {
      uniqueIds.add(item.id);
      return true;
    }
    return false;
  });
  const routePayment = () => {
    if (!cart.length) {
      Alert.alert("El carrito está vacío");
    } else {
      navigation.navigate("Payment");
    }
  };

  return (
    <ScrollView>
      <View style={styles.bodyChart}>
        <Text style={styles.textTittle}>Carrito</Text>
        <Text style={styles.textPrice}>Precio Final: ${finalPrice}</Text>

        <TouchableOpacity style={styles.touchable} onPress={routePayment}>
          <Text style={styles.textTouchable}>Comprar</Text>
        </TouchableOpacity>

        {uniqueCartItems.lenght !== 0 &&
          uniqueCartItems.map((cart) => {
            return (
              <View style={styles.container} key={cart.id}>
                <Image source={{ uri: cart.img }} style={styles.image} />

                <View style={styles.containerText}>
                  <Text style={styles.text}>{cart.name}</Text>
                  <Text style={styles.text}>{cart.description}</Text>
                  <Text style={styles.text}>${cart.price}</Text>
                  <AddItmeChart ID={cart.id} />
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyChart: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textTittle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  textPrice: {
    fontSize: 24,
  },
  touchable: {
    backgroundColor: "#0B7988",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  textTouchable: {
    color: "white",
    fontSize: 16,
  },
  container: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
  },
  image: {
    width: "30%",
    height: 100,
    borderRadius: 10,
  },
  containerText: {
    width: "70%",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ShoppingChart;
