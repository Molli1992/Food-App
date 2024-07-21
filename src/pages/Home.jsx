import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import SearchBar from "../components/searchBar";
import Menu from "../components/foodMenu";
import Promociones from "../components/promociones";
import foods from "../data/dataFoods";
import { PRUEBA_ENV } from "@env";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();

  const onClickComprar = () => {
    navigation.navigate("Chart");
  };
  if (PRUEBA_ENV) {
    return (
      <View style={styles.bodyHome}>
        <ScrollView>
          <View>
            <SearchBar />
            <Image source={{ uri: foods[2].img }} style={styles.image} />
            <Promociones />
            <Menu />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={onClickComprar}>
          <Text style={styles.text}>Realizar Comppra</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  bodyHome: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 50,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  button: {
    position: "absolute",
    backgroundColor: "#0B7988",
    padding: 7,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    width: "100%",
    bottom: 5,
    left: 15,
  },
  text: { color: "#ffffff", fontSize: 18, fontWeight: "400" },
});

export default Home;
