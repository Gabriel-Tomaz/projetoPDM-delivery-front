import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import Welcome from "./screens/Welcome";
import Login from "./screens/login";
import Product from "./screens/product";

import Register from "./screens/register";
import Home from "./screens/Home";

const Routes = () => {
  const { token } = useSelector((state: any) => state.user);
  const Stack = createStackNavigator();

  React.useEffect(() => {}, []);
  return (
    <NavigationContainer>
      {!token ? (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Produtos" component={Product} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
