import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import ProductDetail from "./src/pages/productDetail";
import ShoppingChart from "./src/pages/shoppingChart";
import IconChart from "./src/components/iconChart";
import PaymentPage from "./src/pages/paymentPage";
import HeaderTittle from "./src/components/headerTittle";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: () => <HeaderTittle Title="Login" />,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerTitle: () => <HeaderTittle Title="Register" />,
            }}
          />
          <Stack.Screen
            name="Home"
            options={{
              headerTitle: () => <HeaderTittle />,
              headerRight: () => <IconChart />,
            }}
            component={Home}
          />
          <Stack.Screen
            name="CardDetail"
            component={ProductDetail}
            options={{
              headerTitle: () => <HeaderTittle />,
              headerRight: () => <IconChart />,
            }}
          />
          <Stack.Screen
            name="Chart"
            component={ShoppingChart}
            options={{
              headerTitle: () => <HeaderTittle />,
              headerRight: () => <IconChart />,
            }}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentPage}
            options={{
              headerTitle: () => <HeaderTittle />,
              headerRight: () => <IconChart />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
