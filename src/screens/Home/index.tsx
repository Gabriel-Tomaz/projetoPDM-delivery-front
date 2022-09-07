import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Cardapio from "../cardapio";

const Home = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Cardapio"
    >
      <Drawer.Screen name="Cardapio" component={Cardapio} />
    </Drawer.Navigator>
  );
};

export default Home;
