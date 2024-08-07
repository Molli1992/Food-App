import React from "react";
import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AddItemChart from "./addItmeChart";
import { useNavigation } from "@react-navigation/native";

function FoodList(props) {
  const navigation = useNavigation();
  if (props.Position) {
    return (
      <FlatList
        ref={props.Ref}
        horizontal={true}
        style={styles.list}
        data={props.Array}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: food }) => (
          <TouchableOpacity
            style={styles.containerFoods}
            onPress={() => {
              navigation.push("CardDetail", {
                productId: food.id,
              });
            }}
          >
            <Image source={{ uri: food.img }} style={styles.image} />
            <View style={styles.containerText}>
              <Text style={styles.textTittle}>{food.name}</Text>
              <Text style={styles.text}>{food.description}</Text>
              <Text style={styles.text}>${food.price}</Text>
              <AddItemChart ID={food.id} />
            </View>
          </TouchableOpacity>
        )}
      />
    );
  } else {
    return (
      <FlatList
        ref={props.Ref}
        style={styles.list}
        data={props.Array}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: food }) => (
          <TouchableOpacity
            style={styles.containerFoods}
            onPress={() => {
              navigation.push("CardDetail", {
                productId: food.id,
              });
            }}
          >
            <Image source={{ uri: food.img }} style={styles.image} />
            <View style={styles.containerText}>
              <Text style={styles.textTittle}>{food.name}</Text>
              <Text style={styles.text}>{food.description}</Text>
              <Text style={styles.text}>${food.price}</Text>
              <AddItemChart ID={food.id} />
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
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
    height: 150,
  },
  image: {
    width: 135,
    height: "100%",
    marginRight: 20,
    borderRadius: 10,
  },
  containerText: {
    flexDirection: "column",
    flex: 1,
    width: 200,
  },
  textTittle: {
    fontSize: 22,
    fontWeight: "600",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 16,
    flexWrap: "wrap",
  },
});

export default FoodList;
