import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, FlatList } from "react-native";

import styles from "./style";

import OrderDetailsCard from "../../components/orderDetails";
import InputAdressCard from "../../components/inputAdress";
import PaymentCard from "../../components/paymentType";
import StatusOrder from "../../components/statusOrder";
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../../styles/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../service/api";
import SummaryValue from "../../components/summaryValue";


interface OrderDetailsProps {
  num_order?: number;
  totalItens?: number;
}


const OrderDetails = ({ num_order, totalItens }: OrderDetailsProps) => {

  const navigation = useNavigation();

  const [orderDetails, setOrderDetails] = useState([{
    id: 0,
    status_pedido: '',
    img: '',
    nome: '',
    preco_produto: 0,
    quantidade: 0,
    tipo_pagamento: 1,
    endereco: '',
    troco: 0,
  }]);


  let sum = 0
  const subTotal = () => {
    orderDetails.map(d => {
      sum = (sum + d.preco_produto)
    })
    sum.toFixed(2)
    console.log(sum)
    return sum
  }

  const frete = () => {
    let frete = sum + 6.00
    return frete

  }

  useEffect(() => {
    const searchOrders = async () => {
      await api.get(`/orderDetails/1/2`)
        .then((resposta) => resposta.data)
        .then((json) => setOrderDetails(json))
        .catch((error) => console.error(error))
    }
    searchOrders();
  }, []);

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", padding: 18, backgroundColor: Colors.Neutral.white }}>

        <View style={styles.titleContainer}>
          <Icon name="arrow-left"
            style={{ fontSize: 40, color: Colors.DeepYellow[6] }}
          />
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.titleOrder}>Pedido #{orderDetails[0].id}</Text>
          </View>
        </View>

        <View style={styles.itensContainer}>
          <View>
            <Text style={styles.itens}>{totalItens} itens</Text>
          </View>

          <StatusOrder
            status={orderDetails[0].status_pedido}
          />
        </View>

        <View>
          {orderDetails.map(item => {
            console.log(item)
            return (
              <OrderDetailsCard
                product={item.nome}
                totalOrder={item.preco_produto}
                amount={item.quantidade}
                img={item.img}
                key={item.id}
              />
            )

          })}

        </View>

        <Text style={styles.text}>Endereço</Text>
        <InputAdressCard
          adress={orderDetails[0].endereco}
        />

        <PaymentCard
          tipoPagamento={orderDetails[0].tipo_pagamento}
          troco={orderDetails[0].troco}

        />

        <SummaryValue
          textButton=''
          subtotal={subTotal()}
          total={frete()}
        />

      </View>
    </ScrollView>

  );
};

export default OrderDetails;
