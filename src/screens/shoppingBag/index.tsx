import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";

import styles from "./style";
import SummaryValue from "../../components/summaryValue";
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../../styles/colors";
import api from "../../service/api";
import monsterBurger from '../../../assets/icons/monster_burger.png';
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Header from "../../components/header";

interface Props {
  totalItens?: number;
}

const ShoppingBag = ({ totalItens = 4 }: Props) => {
  const navigation = useNavigation();
  const { user } = useSelector((state: any) => state.user);
  const [productBad, setProductBag] = useState([{
    id_sacola: 0,
    id_produto: 0,
    img: '',
    preco: 0,
    nome: '',
    quantidade: 0,
    preco_total: 0
  }]);

  const deletarProduto = (item: any) => {
    const deleteProductBag = async () => {
      await api.delete(`/deleteBag/${item.id_sacola}`)
        .then((resposta) => resposta.data)
        .then((json) => console.log(json))
        .catch((error) => console.error(error))
    }
    deleteProductBag();
  }

  const goBackProduct = (item: any) => {

    deletarProduto(item);

    const produtoEditar= {
      id: item.id_produto,
      nome: item.nome,
      img: item.img,
      preco: item.preco,
      descricao: item.descricao
    }
    
    navigation.navigate('Produtos', {
      produto: produtoEditar
    });
   
  }

  let sum = 0
  const subTotal = () => {
    productBad.map(d => {
      sum = (sum + d.preco_total)
    })
    return sum
  }

  const frete = () => {
    let frete = sum + 6.00
    return frete

  }

  useEffect(() => {
    const searchProductBag = async () => {
      await api.get(`/orderBag/${user.id}`)
        .then((resposta) => resposta.data)
        .then((json) => setProductBag(json))
        .catch((error) => console.error(error))
    }

    searchProductBag();
  }, []);

  return (

    <View style={styles.orderDetails}>

      {/* <View style={styles.titleContainer}>
        <Icon name="arrow-left"
          style={{ fontSize: 35, color: Colors.DeepYellow[6] }} />
        <Text style={styles.title}>Sacola</Text>
      </View> */}

      <Header 
        title="Sacola"
      />

      <View style={styles.itensContainer}>
        <View>
          <Text style={styles.itens}>{totalItens} itens</Text>
        </View>
        <View>
          <Text style={styles.itens}>Entrega: 50-60min</Text>
        </View>
      </View>


      <FlatList
        data={productBad}
        keyExtractor={item => item.nome}
        renderItem={({ item }) => {

          return (
            <View style={styles.cardsDetails}>

              <View style={styles.details}>
                <View style={styles.fistCard}>
                  <Image style={{ width: 95, height: 95 }}
                    source={item.img != '' ? { uri: item.img } : monsterBurger}
                  />
                  <View style={styles.texto}>
                    <Text >{item.nome}</Text>
                    <Text style={styles.total}>R${item.preco_total}</Text>
                  </View>
                </View>

                <View style={styles.secondCard}>
                  <TouchableOpacity
                    onPress={(f) => goBackProduct(item)}>
                    <Text style={styles.btnEdit}>
                      Editar Item
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>

          );
        }}

      />

      <SummaryValue
        subtotal={subTotal()}
        total={frete()}
        textButton="Continuar"

      />

    </View>


  );
};

export default ShoppingBag;
