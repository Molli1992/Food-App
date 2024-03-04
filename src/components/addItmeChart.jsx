import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function AddItmeChart(props) {
  const itemId = props.ID;

  const addItemToChart = () => {};

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

      <Text style={styles.text}>0</Text>

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
