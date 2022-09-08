import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./style";

import OrderHistoryCard from "../../components/orderHistory";
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../../styles/colors";
import api from "../../service/api";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Header from "../../components/header";


interface Params {
  dates: string[];
}

const OrderHistory = () => {
  const navigation = useNavigation();
  const { user } = useSelector((state: any) => state.user);
  /*  const goBack = () => {
     navigation.navigate('CalendarOrder')
   } */

  const [productOrder, setProdutctOrder] = useState([{
    id: 0,
    data_pedido: '',
    preco_total: 0,
    status_pedido: '',
  }]);

  const route = useRoute();
  const { dates } = route.params as Params;

  useEffect(() => {
    const searchOrders = async () => {
      await api.get(`/productOrders/${user.id}/${dates[0]}`)
        .then((resposta) => resposta.data)
        .then((json) => setProdutctOrder(json))
        .catch((error) => console.error(error))
    }

    searchOrders();
  }, []);

  return (

    <View style={{ justifyContent: "center", padding: 8, backgroundColor: Colors.Neutral.white }}>

      {/* <View style={styles.titleContainer}>
        <Icon name="arrow-left"
          style={{ fontSize: 35, color: Colors.DeepYellow[6] }}
          onPress={goBack} />
        <Text style={styles.title}>Meus Pedidos</Text>
      </View> */}

      <Header
        title="Meus Pedidos"
      />

      <View style={{ marginTop: 10 }}>

        <FlatList
          data={productOrder}
          keyExtractor={(item) => item.status_pedido}
          renderItem={({ item }) => (
            <OrderHistoryCard
              num_order={item.id}
              status={item.status_pedido}
              date={item.data_pedido}
              totalOrder={item.preco_total}
            />

          )}

        />

      </View>

    </View>

  );
};

export default OrderHistory;
