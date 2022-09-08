import React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../styles/colors";
import NavBar from "../../components/navBar";
import styles from "./style";
import monsterBurger from "../../../assets/icons/monster_burger.png";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { RootStackParamList } from "../RootStackPrams";

type authScreenProp = DrawerNavigationProp<RootStackParamList, "Register">;

const Cardapio = () => {
  const { user , token } = useSelector((state: any) => state.user);
  const navigation = useNavigation<authScreenProp>();
  const { width, height } = useWindowDimensions();

  const customUser = useSelector((state: any) => state.user.user);

  console.log("o outro", customUser);

  const data = [
    {
      name: "Golden Tradicionanl",
      description:
        " 2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa,Pão brioche artesanal.",
      price: 25.25,
    },
    {
      name: "Golden ",
      description:
        " 2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa,Pão brioche artesanal.",
      price: 25.25,
    },
    {
      name: "Burger",
      description:
        " 2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa,Pão brioche artesanal.",
      price: 25.25,
    },
  ];

  console.log(user.id);

  const openScreen = () => {
    navigation.navigate("Produtos");
  };
  return (
    <View
      style={[
        styles.CardContainer,
        {
          flex: 1,
          width,
          height,
          backgroundColor: Colors.Gray["0"],
        },
      ]}
    >
      <View
        style={{
          position: "relative",
          zIndex: 1,
          width,
          height: 150,
          marginBottom: 15,
        }}
      >
        <NavBar />
        <Text
          style={{
            fontWeight: "bold",
            color: Colors.Neutral.black,
            textAlign: "center",
            fontSize: 24,
          }}
        >
          Seja Bem-vindo {user.nome}👋
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        numColumns={2} // Número de colunas
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={openScreen}
              style={[styles.cardProd, { width: width / 2 - 40 }]}
            >
              <Image style={{ width: 95, height: 95 }} source={monsterBurger} />
              <View style={styles.text}>
                <Text>{item.name}</Text>
                <Text style={styles.total}>R${item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Cardapio;
