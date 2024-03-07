import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { deleteChart } from "../redux/actions";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showCardForm, setShowCardForm] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  const handleCardPaymentSubmit = () => {
    if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
      Alert.alert("Completar todos los campos");
    } else {
      Alert.alert("Pago realizado correctamente. En 45 min estará tu pedido.");
      dispatch(deleteChart());
      navigation.navigate("Home");
    }
  };

  const handleCashPayment = () => {
    if (!name || !address || !phone) {
      Alert.alert("Completar todos los campos");
    } else {
      Alert.alert("Pago en efectivo seleccionado. En 45 min estará tu pedido.");
      dispatch(deleteChart());
      navigation.navigate("Home");
    }
  };

  const setForm = () => {
    if (!name || !address || !phone) {
      Alert.alert("Completar todos los campos");
    } else if (!showCardForm) {
      setShowCardForm(true);
    } else {
      setShowCardForm(false);
    }
  };

  return (
    <View style={styles.bodyPayment}>
      {showCardForm ? (
        <>
          <Text style={styles.header}>Información de pago</Text>
          <TextInput
            style={styles.input}
            placeholder="Número de la tarjeta"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha de expiración (MM/YY)"
            keyboardType="numeric"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            keyboardType="numeric"
            value={cvv}
            onChangeText={setCvv}
          />
          <TextInput
            style={styles.input}
            placeholder="Nombre que figura en la tarjeta"
            value={cardHolderName}
            onChangeText={setCardHolderName}
          />
          <View style={styles.buttonContainer}>
            <Button title="Enviar" onPress={handleCardPaymentSubmit} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Atrás" onPress={setForm} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.header}>Información de entrega</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          <View style={styles.buttonContainer}>
            <Button title="Pago en efectivo" onPress={handleCashPayment} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Pago con tarjeta" onPress={setForm} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bodyPayment: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingTop: 15,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "gray",
    color: "black",
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default PaymentPage;
