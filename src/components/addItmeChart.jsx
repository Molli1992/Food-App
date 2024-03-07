import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  postCarts,
  getLength,
  deleteAllCarts,
  deleteCarts,
} from "../redux/actions";

function AddItmeChart(props) {
  const navigation = useNavigation();
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
        <Icon
          name="arrow-left"
          size={22}
          color="#0B7988"
          style={styles.iconStyle}
        />
      </TouchableOpacity>

      <Text style={styles.text}>{lengthFilter.length}</Text>

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

      <TouchableOpacity
        onPress={() =>
          navigation.push("CardDetail", {
            productId: itemId,
          })
        }
      >
        <Text style={styles.textTouchable}>Info</Text>
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
