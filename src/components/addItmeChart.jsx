import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  postCarts,
  getLength,
  deleteAllCarts,
  deleteCarts,
} from "../redux/actions";

function AddItmeChart(props) {
  const itemId = props.ID;
  const dispatch = useDispatch();
  const length = useSelector((state) => state.length);
  const lengthFilter = length.filter((id) => {
    return id.id === itemId;
  });

  const addItemToChart = () => {
    dispatch(postCarts(itemId));
    dispatch(getLength(itemId));
  };

  const deleteItemOfChart = () => {
    let items = length.filter((item) => item.id === itemId);

    if (items.length) {
      dispatch(deleteCarts(itemId));
    } else {
      return null;
    }
  };

  const deleteAllItemsOfChart = () => {
    dispatch(deleteAllCarts(itemId));
  };

  return (
    <View style={styles.bodyButtonsChart}>
      <TouchableOpacity onPress={deleteItemOfChart}>
        <Icon name="minus" size={28} color="#0B7988" />
      </TouchableOpacity>

      <Text style={styles.textLength}>{lengthFilter.length}</Text>

      <TouchableOpacity onPress={addItemToChart}>
        <Icon name="plus" size={30} color="#0B7988" />
      </TouchableOpacity>

      <TouchableOpacity onPress={deleteAllItemsOfChart}>
        <Icon name="delete" size={28} color="#0B7988" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyButtonsChart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 5,
  },
  textLength: {
    color: "#0B7988",
    fontWeight: "bold",
    fontSize: 18,
  },
  textTouchable: {
    color: "#0B7988",
    fontSize: 17,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#0B7988",
    borderRadius: 10,
    padding: 5,
  },
});

export default AddItmeChart;
