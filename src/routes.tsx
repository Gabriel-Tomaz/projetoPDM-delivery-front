import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Login from "./screens/login";
import Product from "./screens/product";
import Register from "./screens/register";

const Routes = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Produtos" component={Product} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
