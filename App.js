import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./src/pages/Home";
import ProductDetail from "./src/pages/productDetail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: "Food-App",
            headerRight: () => (
              <Icon
                name="shopping-cart"
                size={25}
                color="black"
                onPress={() => console.log("Carrito presionado")}
              />
            ),
          }}
          component={Home}
        />
        <Stack.Screen
          name="CardDetail"
          component={ProductDetail}
          options={{
            headerTitle: "Food-App",
            headerRight: () => (
              <Icon
                name="shopping-cart"
                size={25}
                color="black"
                onPress={() => console.log("Carrito presionado")}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
