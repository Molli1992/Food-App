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

function Register() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    reapeatPassword: "",
  });

  const onChangeUserfullNamel = (fullName) => {
    setUser({ ...user, fullName: fullName });
  };

  const onChangeUserEmail = (email) => {
    setUser({ ...user, email: email });
  };

  const onChangeUserPassword = (password) => {
    setUser({ ...user, password: password });
  };

  const onChangeUserRepeatPassword = (reapeatPassword) => {
    setUser({ ...user, reapeatPassword: reapeatPassword });
  };

  const onClickLogin = () => {
    navigation.navigate("Login");
  };

  const onSubmit = () => {
    if (
      !user.fullName ||
      !user.email ||
      !user.password ||
      !user.reapeatPassword
    ) {
      Alert.alert("", "Completar todos los campos");
    } else if (user.password !== user.reapeatPassword) {
      Alert.alert("", "Contraseña y repetir contraseña deben ser iguales");
    } else {
      setUser({
        fullName: "",
        email: "",
        password: "",
        reapeatPassword: "",
      });
      Alert.alert(
        "",
        "Usuario registrado correctamente",
        [
          {
            text: "OK",
            onPress: () => onClickLogin(),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.body}>
      <Image source={Logo} style={styles.image} />

      <PrimaryInput
        OnChange={onChangeUserfullNamel}
        PlaceHolder="Nombre completo"
        Value={user.fullName}
        Width="70%"
      />

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

      <PrimaryInput
        OnChange={onChangeUserRepeatPassword}
        PlaceHolder="Repetir contraseña"
        Value={user.reapeatPassword}
        Password={true}
        Width="70%"
      />

      <PrimaryButton Text="Crear cuenta" Width="70%" OnPress={onSubmit} />

      <View style={styles.container}>
        <Text style={styles.Text}>Ya tenes cuenta?</Text>
        <TouchableOpacity onPress={onClickLogin}>
          <Text style={styles.TextRegister}>Iniciar sesión</Text>
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

export default Register;
