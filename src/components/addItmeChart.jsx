import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { postCarts } from "../redux/actions";

function AddItmeChart(props) {
  const itemId = props.ID;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addItemToChart = () => {
    dispatch(postCarts(itemId));
  };

  const deleteItemOfChart = () => {};

  const deleteAllItemsOfChart = () => {};
  return (
    <View style={styles.bodyButtonsChart}>
      <TouchableOpacity onPress={deleteItemOfChart}>
        <Icon
          name="arrow-left"
          size={22}
          color="#0B7988"
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      <Text style={styles.text}>{cart.length}</Text>

      <TouchableOpacity onPress={addItemToChart}>
        <Icon
          name="arrow-right"
          size={22}
          color="#0B7988"
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={deleteAllItemsOfChart}>
        <Icon
          name="delete"
          size={22}
          color="#0B7988"
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyButtonsChart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
  text: {
    color: "#0B7988",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default AddItmeChart;
