import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./style";

import OrderHistoryCard from "../../components/orderHistory";
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../../styles/colors";
import api from "../../service/api";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";


interface Params{
  dates:string[];
}

const OrderHistory = () => {
  const navigation = useNavigation();

  const goBack = () => {
      navigation.navigate('CalendarOrder')
  }
  
  const [productOrder, setProdutctOrder] = useState([{
    id: 0,
    data_pedido: '', 
    preco_total: 0,
    status_pedido: '',
  }]);

  const route = useRoute();
  const {dates} = route.params as Params;


  useEffect(() => {
    const searchOrders = async () => {
      await api.get(`/productOrders/1/${dates[0]}`)
        .then((resposta) => resposta.data)
        .then((json) => setProdutctOrder(json))
        .catch((error) => console.error(error))
  }

    searchOrders();
  }, []);

  return (

    <View style={{justifyContent: "center", padding: 8, backgroundColor: '#F8F9FA' }}>

      <View style={styles.titleContainer}>
        <Icon name="arrow-left"
          style={{ fontSize: 35, color: Colors.DeepYellow[6] }} 
          onPress={goBack}/>
        <Text style={styles.title}>Meus Pedidos</Text>
      </View>

      <View style={{ marginTop: 10 }}>

        <FlatList
          data={productOrder}
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
