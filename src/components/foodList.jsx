import React from "react";
import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddItemChart from "./addItmeChart";

function FoodList(props) {
  const navigation = useNavigation();
  return (
    <FlatList
      ref={props.Ref}
      horizontal={true}
      style={styles.list}
      data={props.Array}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item: food }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.push("CardDetail", {
              productId: food.id,
            })
          }
        >
          <View style={styles.containerFoods}>
            <Image source={{ uri: food.img }} style={styles.image} />
            <View style={styles.containerText}>
              <Text style={styles.text}>{food.name}</Text>
              <Text style={styles.text}>{food.description}</Text>
              <Text style={styles.text}>{food.price}</Text>
              <AddItemChart ID={food.id} />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
  },
  containerFoods: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    minHeight: 135,
  },
  image: {
    width: 125,
    height: "100%",
    marginRight: 20,
    borderRadius: 10,
  },
  containerText: {
    flexDirection: "column",
    flex: 1,
    width: 280,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    flexWrap: "wrap",
  },
});

export default FoodList;
