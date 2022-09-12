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
import IconPay from 'react-native-vector-icons/MaterialIcons';
import InputAdress from "../../components/inputAdress";
import Input from "../../components/input";
import Button from "../../components/button";

interface Props {
  totalItens?: number;
}

const ShoppingBag = ({ totalItens = 4 }: Props) => {
  const { user } = useSelector((state: any) => state.user);
  const navigation = useNavigation();
  const [productBad, setProductBag] = useState([{
    id_sacola: 0,
    id_produto: 0,
    img: '',
    preco: 0,
    nome: '',
    quantidade: 0,
    preco_total: 0
  }]);

  const [pedidoBack, setPedidoBack] = useState({});

  //Type payment
  const [dinheiro, setDinheiro] = useState(false);
  const [cartao, setCartao] = useState(false);

    const pagament = (typePay: any) => {
      if (typePay == 0) {
        setDinheiro(true)
        setCartao(false)
      }
      else {
        setCartao(true)
        setDinheiro(false)
      }
    }

  const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return month + '-' + date + '-' + year;//format: d-m-y;
  }
  let sum = 0
  const subTotal = () => {
    productBad.map(d => {
      sum = sum + d.preco_total
    })
    return sum
  }

  const frete = () => {
    let frete = sum + 6.00
    return frete

  }

  let valueT = frete();
  let dateDay= getCurrentDate()
  const getOrde = async () => {
    valueT = valueT;
    dateDay= dateDay
    const Ordem= {
      id_usuario: user.id,
      id_endereco: 1,
      tipo_pagamento: dinheiro ? 0 : 1,
      troco: 0,
      data_pedido: dateDay,
      status_pedido: 'Enviado',
      preco_total: valueT,
    }

    await api.post('/orderInsert', Ordem)
        .then((resposta) => resposta.data)
        .then((json) => setPedidoBack(json))
        .catch((error) => console.error(error))

    getOrdeProduct()
  }

  const getOrdeProduct = async () => {
    console.log(productBad.map(d => d.quantidade))
    productBad.map(async d => {
      const OrdemProduct= {
        id_pedido: 1,
        id_produto: d.id_produto,
        id_usuario: user.id,
        preco_produto: d.preco,
        quantidade: d.quantidade,
      }
      console.log(OrdemProduct)
      await api.post(`/productOrder/insert`, OrdemProduct)
          .then((resposta) => resposta.data)
          .then((json) => setPedidoBack(json))
          .catch((error) => console.error(error))
    })

    openScreen();

  }

  const openScreen = () => {
    navigation.navigate("Cardapio");
  }


  const deletarProduto = async (item: any) => {
      await api.delete(`/deleteBag/${item.id_sacola}`)
        .then((resposta) => resposta.data)
        .then((json) => console.log(json))
        .catch((error) => console.error(error))
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

      <InputAdress/>
      <View>
        <Text style={styles.title}>Tipo de Pagamento</Text>
        <View style={styles.container}>

          <TouchableOpacity
              style={dinheiro ? styles.card : styles.cardActive}
               onPress={() => pagament(0)}
          >

            <IconPay name="attach-money" size={22}
                  style={dinheiro ? { color: Colors.DeepYellow[6] } : { color: Colors.Gray[1] }}
            />

            <Text
                style={dinheiro ? styles.text : styles.textActive}>
              Dinheiro
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
              style={cartao ? styles.card : styles.cardActive}
                onPress={() => pagament(1)}>

            <IconPay name="credit-card" size={22}
                  style={cartao ? { color: Colors.DeepYellow[6] } : { color: Colors.Gray[1] }}
            />

            <Text
                style={cartao ? styles.text : styles.textActive}>
              Cartão
            </Text>
          </TouchableOpacity>
        </View>

        {/*{!dinheiro ? null :*/}
        {/*    <View>*/}
        {/*      <Text style={[styles.title]}>Troco</Text>*/}
        {/*      <View style={styles.troco}>*/}
        {/*        <Input onChange={} onBlur={}*/}
        {/*      </View>*/}
        {/*    </View>*/}
        {/*}*/}


      </View>

      <SummaryValue
        subtotal={subTotal()}
        total={frete()}
        textButton=""

      />
      <Button
          title={"Finalizar pedido"}
          type='primary'
          onPress={getOrde}
      />

    </View>


  );
};

export default ShoppingBag;
