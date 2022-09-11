import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform, StatusBar } from "react-native";

import Cardapio from "../cardapio";
import ShoppingBag from "../shoppingBag";
import { CalendarOrder } from "../calendarOrder";
import RegisterAddress from "../registerAddress";
import ListAddresses from "../Adresses";

import Colors from "../../styles/colors";
import CustomDrawerContent from "./CustomDrawerContent";

const Home = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: Colors.Neutral.white,
          flex: 1,
          width: "100%",
          paddingHorizontal: 18,
          paddingVertical: 18,
          paddingBottom: 0,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          padding: 0,
          margin: 0,
          marginBottom: 0,
          marginHorizontal: 0,
          marginRight: 0,
          marginVertical: 0,
          marginTop: 0,
          marginLeft: 0,
        },
        drawerItemStyle: {
          paddingHorizontal: 0,
          paddingVertical: 0,
          paddingBottom: 0,
          paddingTop: 0,
          padding: 0,
          margin: 0,
          marginBottom: 0,
          marginHorizontal: 0,
          marginRight: 0,
          marginVertical: 0,
          marginTop: 0,
          borderRadius: 6,
          marginLeft: 0,
        },
        drawerLabelStyle: {
          paddingHorizontal: 0,
          paddingVertical: 0,
          paddingBottom: 0,
          paddingTop: 0,
          padding: 0,
          margin: 0,
          marginBottom: 0,
          marginHorizontal: 0,
          marginRight: 0,
          marginVertical: 0,
          marginTop: 0,
          fontSize: 16,
          fontWeight: "500",
          lineHeight: 19,
          marginLeft: 0,
        },
        drawerActiveBackgroundColor: "#FFF6E5",
        drawerActiveTintColor: Colors.DeepYellow[7],
        drawerInactiveTintColor: Colors.Gray[4],
        drawerPosition: "right",
        drawerContentContainerStyle: {
          paddingHorizontal: 0,
          paddingVertical: 0,
          paddingBottom: 0,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          padding: 0,
          margin: 0,
          marginBottom: 0,
          marginHorizontal: 0,
          marginRight: 0,
          marginVertical: 0,
          marginTop: 0,
          marginLeft: 0,
        },
        drawerContentStyle: {
          paddingHorizontal: 0,
          paddingVertical: 0,
          paddingBottom: 0,
          paddingTop: 0,
          padding: 0,
          margin: 0,
          marginBottom: 0,
          marginHorizontal: 0,
          marginRight: 0,
          marginVertical: 0,
          marginTop: 0,
          marginLeft: 0,
        },
      }}
      initialRouteName="Cardápio"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Cardápio" component={Cardapio} />
      <Drawer.Screen name="Meus Pedidos" component={CalendarOrder} />
      <Drawer.Screen name="Sacola" component={ShoppingBag} />
      <Drawer.Screen name="Meus endereços" component={ListAddresses} />
    </Drawer.Navigator>
  );
};

export default Home;
