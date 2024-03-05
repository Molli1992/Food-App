import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Reseña() {
  return (
    <View style={styles.bodyReseña}>
      <Text style={styles.textTittle}>Reseñas:</Text>

      <View style={styles.container}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
          }}
          style={styles.image}
        />
        <View style={styles.containerInfo}>
          <View style={styles.containerPuntuacion}>
            <Text style={styles.textInfoTittle}>Felipe Blaksley</Text>
            <Text style={styles.textPuntuacion}>4.5</Text>
            <Icon name="star" size={15} color="gray" style={styles.iconStyle} />
          </View>
          <Text style={styles.textInfo}>
            Exquisito todo muy bien. Perfecta Atencion, precio y calidad de la
            comida. Les recomiendo la hamburguesa.
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
          }}
          style={styles.image}
        />
        <View style={styles.containerInfo}>
          <View style={styles.containerPuntuacion}>
            <Text style={styles.textInfoTittle}>Carolina Presta</Text>
            <Text style={styles.textPuntuacion}>4.9</Text>
            <Icon name="star" size={15} color="gray" style={styles.iconStyle} />
          </View>
          <Text style={styles.textInfo}>
            Se los recomiendo!!! Todo 10 puntos, el sandwich esta bararo!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyReseña: {
    justifyContent: "center",
    marginTop: 10,
  },
  textTittle: {
    fontWeight: "bold",
    fontSize: 32,
    flexWrap: "wrap",
  },
  container: {
    borderWidth: 1,
    borderColor: "#0B7988",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
  },
  image: {
    height: 150,
    width: "35%",
    marginRight: 5,
  },
  containerInfo: {
    alignItems: "center",
    width: "65%",
  },
  containerPuntuacion: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInfoTittle: {
    fontWeight: "bold",
    fontSize: 18,
    flexWrap: "wrap",
    textAlign: "center",
  },
  textPuntuacion: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInfo: {
    fontWeight: "bold",
    fontSize: 17,
    flexWrap: "wrap",
    color: "gray",
    textAlign: "center",
  },
});

export default Reseña;
