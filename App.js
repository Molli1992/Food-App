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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
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
