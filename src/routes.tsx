import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Login from "./screens/login";
import Product from "./screens/product";
import ShoppingBag from "./screens/shoppingBag";
import NavBar from "./components/navBar";
import Cardapio from "./screens/cardapio";
import OrderDetails from "./screens/orderDetails";
import OrderHistory from "./screens/orderHistory";
import Profile from "./screens/profile";
import { CalendarOrder } from "./screens/calendarOrder";

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
           {/*  <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Cardapio" component={Cardapio} />
            <Drawer.Screen name="Produtos" component={Product} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="OrderHistory" component={OrderHistory} />
            
            <Drawer.Screen name="ShoppingBag" component={ShoppingBag} /> */}
            <Drawer.Screen name="CalendarOrder" component={CalendarOrder} />
            <Drawer.Screen name="OrderDetails" component={OrderDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
