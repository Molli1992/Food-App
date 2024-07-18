import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function HeaderRigth() {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart);

  const uniqueIds = new Set();

  const uniqueCartItems = cart.filter((item) => {
    if (!uniqueIds.has(item.id)) {
      uniqueIds.add(item.id);
      return true;
    }
    return false;
  });

  const routeChart = () => {
    navigation.navigate("Chart");
  };

  const routeProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.body}>
      {route.name === "Login" || route.name === "Register" ? null : (
        <TouchableOpacity onPress={routeProfile}>
          <FontAwesome5 name="user-circle" size={25} color="#000000" />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={routeChart}>
        <View style={styles.container}>
          <Text style={styles.text}>{uniqueCartItems.length}</Text>
          <Icon name="shopping-cart" size={25} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginRight: 5,
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginLeft: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    overflow: "hidden",
    textAlign: "center",
    width: 25,
  },
});

export default HeaderRigth;
