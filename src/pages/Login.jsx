import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PrimaryInput from "../components/inputs/primary";
import PrimaryButton from "../components/buttons/primary";
import Logo from "../images/logo-azul-removebg-preview.png";

function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeUserEmail = (email) => {
    setUser({ ...user, email: email });
  };

  const onChangeUserPassword = (password) => {
    setUser({ ...user, password: password });
  };

  const onClickRegister = () => {
    navigation.navigate("Register");
  };

  const onSubmit = () => {
    if (!user.email || !user.password) {
      Alert.alert("", "Completar todos los campos");
    } else {
      setUser({
        email: "",
        password: "",
      });
      navigation.navigate("Home");
    }
  };
  return (
    <View style={styles.body}>
      <Image source={Logo} style={styles.image} />

      <PrimaryInput
        OnChange={onChangeUserEmail}
        PlaceHolder="Email"
        Value={user.email}
        Width="70%"
      />

      <PrimaryInput
        OnChange={onChangeUserPassword}
        PlaceHolder="Contraseña"
        Value={user.password}
        Password={true}
        Width="70%"
      />

      <PrimaryButton Text="Iniciar sesión" Width="70%" OnPress={onSubmit} />

      <View style={styles.container}>
        <Text style={styles.Text}>No tenes cuenta?</Text>
        <TouchableOpacity onPress={onClickRegister}>
          <Text style={styles.TextRegister}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e0e0e0",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    gap: 5,
  },
  Text: {
    color: "#000000",
  },
  TextRegister: {
    color: "#1a73e8",
    fontWeight: "bold",
  },
});

export default Login;
