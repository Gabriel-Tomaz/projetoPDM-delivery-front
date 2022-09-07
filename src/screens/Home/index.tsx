import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Cardapio from "../cardapio";
import ShoppingBag from "../shoppingBag";

const Home = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Cardapio"
    >
      <Drawer.Screen name="Cardapio" component={Cardapio} />
      <Drawer.Screen name="Sacola" component={ShoppingBag} />
    </Drawer.Navigator>
  );
};

export default Home;
