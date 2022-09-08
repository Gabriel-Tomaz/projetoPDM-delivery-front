import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import Colors from "../../styles/colors";
import styles from "./style";
import monsterBurger from "../../../assets/icons/monster_burger.png";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { RootStackParamList } from "../RootStackPrams";
import { Icon } from "@rneui/base";

type authScreenProp = DrawerNavigationProp<RootStackParamList, "Register">;

const Cardapio = () => {
  const { user } = useSelector((state: any) => state.user);
  const navigation = useNavigation<authScreenProp>();

  console.log(user.nome);

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
    {
      name: "Burger",
      description:
        " 2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa,Pão brioche artesanal.",
      price: 25.25,
    },
  ];

  const openScreen = () => {
    navigation.navigate("Produtos");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ paddingHorizontal: 18, paddingVertical: 18 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              lineHeight: 38.4,
              color: Colors.Neutral.black,
              fontWeight: "500",
            }}
          >
            Olá, {user.nome} 👋🏾
          </Text>
          <TouchableOpacity
            style={{
              padding: 4,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Icon
              type="material"
              name="menu"
              color={Colors.DeepYellow[6]}
              size={24}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: Colors.Gray[4],
            fontWeight: "400",
          }}
        >
          O que deseja pra hoje?
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 6,
        }}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.name}
          numColumns={2}
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            flex: 1,
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={openScreen}
                style={[styles.cardProd, { flex: 2 }]}
              >
                <View
                  style={{
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 95, height: 95 }}
                    source={monsterBurger}
                  />
                </View>
                <View style={styles.text}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={styles.total}>R${item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cardapio;
