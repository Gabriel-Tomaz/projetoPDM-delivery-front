import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Login from "./screens/login";
import Product from "./screens/product";
import ShoppingBag from "./screens/shoppingBag";
import NavBar from "./components/navBar";
import Cardapio from "./screens/cardapio";

const Routes = () => {
  const Drawer = createDrawerNavigator();

  React.useEffect(()=> {

  }, [])
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cardapio" component={Cardapio} />
            <Drawer.Screen name="Produtos" component={Product} />
            <Drawer.Screen name="Login" component={Login} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
