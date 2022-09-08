import React from "react";
import {View, Text, useWindowDimensions, ScrollView, Image, FlatList, TouchableOpacity} from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../styles/colors";
import NavBar from "../../components/navBar";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import api from "../../service/api";

const Cardapio = () => {
    const { user, token } = useSelector((state: any) => state.user);
    const navigation = useNavigation();
    const {width, height } = useWindowDimensions();
    const [product, setProduct] = React.useState([{
        id: String,
        nome: String,
        img: String,
        preco: Number,
        descricao: String
    }]);

    const openScreen = (item: any) => {
        navigation.navigate('Produtos', {
            produto: item
        });
    }

    React.useEffect(() => {
        const searchProduct = async() => {
            await api.get(`/getproduct/`)
                .then((resposta) => resposta.data)
                .then((json) => setProduct(json))
                .catch((error) => console.error(error))
        }

        searchProduct();
    }, []);
  return (

      <View style={[styles.CardContainer, {
          flex: 1,
          width,
          height,
          backgroundColor: Colors.Gray["0"],
      }]}>
              <View style={{
                position: 'relative', zIndex: 1,
                width,
                height: 150,
                marginBottom: 15
              }}>
                  <NavBar/>
                  <Text
                  style={{
                      fontWeight: "bold",
                      color: Colors.Neutral.black,
                      textAlign: "center",
                      fontSize:24,
                      }}
                  >
                      Seja Bem-vindo👋
                  </Text>
              </View>

          { <FlatList
              data={product}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
              renderItem={({item}) => {
                  return (
                      <TouchableOpacity onPress={(f) => openScreen(item)} style={[styles.cardProd, {width: width / 2 - 40}]}>
                          <Image style={{width: 95, height: 95, marginTop: 10}}
                                 source={{uri: item.img.toString()}}
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
  );
};

export default Cardapio;
