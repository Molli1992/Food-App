import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/home";
import ProductDetail from "./src/pages/productDetail";
import ShoppingChart from "./src/pages/shoppingChart";
import HeaderRigth from "./src/components/headerRigth";
import PaymentPage from "./src/pages/paymentPage";
import HeaderTittle from "./src/components/headerTittle";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Login from "./src/pages/login";
import Register from "./src/pages/register";
import Profile from "./src/pages/profile";

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
              headerRight: () => <HeaderRigth />,
            }}
            component={Home}
          />
          <Stack.Screen
            name="CardDetail"
            component={ProductDetail}
            options={{
              headerTitle: () => <HeaderTittle />,
              headerRight: () => <HeaderRigth />,
            }}
          />
          <Stack.Screen
            name="Chart"
            component={ShoppingChart}
            options={{
              headerTitle: () => <HeaderTittle />,
              headerRight: () => <HeaderRigth />,
            }}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentPage}
            options={{
              headerTitle: () => <HeaderTittle />,
              headerRight: () => <HeaderRigth />,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTitle: () => <HeaderTittle />,
              headerRight: () => <HeaderRigth />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
