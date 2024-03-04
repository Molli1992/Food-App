import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function IconChart() {
  const navigation = useNavigation();

  const routeChart = () => {
    navigation.navigate("Chart");
  };

  return (
    <View style={styles.bodyIconChart}>
      <TouchableOpacity onPress={routeChart}>
        <Icon name="shopping-cart" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyIconChart: {
    marginRight: 5,
  },
});

export default IconChart;
