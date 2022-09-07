import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import styles from "./style";

import ItensOrder from "../../components/itensOrder";
import SummaryValue from "../../components/summaryValue";
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../../styles/colors";

interface Props {
  totalItens?: number;
}

interface ProductProps {
  id: number;
  nome?: string;
  img: string;
  preco: string;
  descricao: string;
}

interface ArrayProduct {
  product: Array<ProductProps>
}

const ShoppingBag = ({ totalItens = 4 }: Props) => {

  const [product, setProduct] = useState([{
    id: 0,
    nome: '',
    img: '',
    preco: 0,
    descricao: ''
  }]);

  // const [product, setProduct] = useState<ArrayProduct>();

  useEffect(() => {
    const searchBook = async() => {
       await fetch("http://192.168.0.101:3000/getproduct")
        .then((resposta) => resposta.json())
        .then((json) => setProduct(json))
        .catch((error) => console.error(error))
    }

    searchBook();
  }, []);

  return (

    <ScrollView style={{ backgroundColor: '#F8F9FA' }}>
      <View style={styles.orderDetails}>

        <View style={styles.titleContainer}>
          <Icon name="arrow-left"
            style={{ fontSize: 35, color: Colors.DeepYellow[6] }} />
          <Text style={styles.title}>Sacola</Text>
        </View>

        <View style={styles.itensContainer}>
          <View>
            <Text style={styles.itens}>{totalItens} itens</Text>
          </View>
          <View>
            <Text style={styles.itens}>Entrega: 50-60min</Text>
          </View>
        </View>

        {product ? product.map(d => (
          <ItensOrder
            product={d.nome}
            price={d.preco}
            img={d.img}
            key={d.id}
          />
        )) : ''}

        

      </View>
    </ScrollView >
  );
};

export default ShoppingBag;
