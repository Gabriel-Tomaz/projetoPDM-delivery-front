import React from "react";

import {
  View,
  Text,
  useWindowDimensions,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";

import Colors from "../../styles/colors";
import styles from "./style";

import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import api from "../../service/api";
import { Icon } from "@rneui/base";
import { RootStackParamList } from "../RootStackPrams";
import { SafeAreaView } from "react-native-safe-area-context";

type authScreenProp = DrawerNavigationProp<RootStackParamList, "Cardapio">;

const Cardapio = () => {
  const { user, token } = useSelector((state: any) => state.user);
  const navigation = useNavigation<authScreenProp>();
  const { width, height } = useWindowDimensions();
  const [product, setProduct] = React.useState([
    {
      id: String,
      nome: String,
      img: String,
      preco: Number,
      descricao: String,
    },
  ]);

  const openScreen = (item: any) => {
    navigation.navigate("Produtos", item);
  };

  React.useEffect(() => {
    const searchProduct = async () => {
      await api
        .get(`/getproduct/`)
        .then((resposta) => resposta.data)
        .then((json) => setProduct(json))
        .catch((error) => console.error(error));
    };

    searchProduct();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={[
          styles.CardContainer,
          {
            flex: 1,
            width,
            height,
            backgroundColor: Colors.Gray["0"],
            paddingHorizontal: 18,
          },
        ]}
      >
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

        {
          <FlatList
            data={product}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={(f) => openScreen(item)}
                  style={[styles.cardProd, { width: width / 2 - 40 }]}
                >
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
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 4,
                      }}
                    >
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

                    {
                      <FlatList
                        data={product}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        renderItem={({ item }) => {
                          return (
                            <TouchableOpacity
                              onPress={(f) => openScreen(item)}
                              style={[
                                styles.cardProd,
                                { width: width / 2 - 40 },
                              ]}
                            >
                              <Image
                                style={{ width: 95, height: 95, marginTop: 10 }}
                                source={{ uri: item.img.toString() }}
                              />
                              <View style={styles.text}>
                                <Text>{item.nome}</Text>
                                <Text style={styles.total}>R${item.preco}</Text>
                              </View>
                            </TouchableOpacity>
                          );
                        }}
                      />
                    }
                  </View>
                  <Image
                    style={{ width: 95, height: 95, marginTop: 10 }}
                    source={{ uri: item.img.toString() }}
                  />
                  <View style={styles.text}>
                    <Text>{item.nome}</Text>
                    <Text style={styles.total}>R${item.preco}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        }
      </View>
    </SafeAreaView>
  );
};

export default Cardapio;
