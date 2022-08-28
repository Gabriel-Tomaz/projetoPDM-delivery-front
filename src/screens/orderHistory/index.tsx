import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./style";

import OrderHistoryCard from "../../components/orderHistory";
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../../styles/colors";

const OrderHistory = () => {
  const array = [1, 2, 3, 4];

  return (

    <ScrollView style={{ backgroundColor: '#F8F9FA' }}>
      <View style={{ flex: 1, justifyContent: "center", padding: 8, backgroundColor: '#F8F9FA' }}>

        <View style={styles.titleContainer}>
          <Icon name="arrow-left"
            style={{ fontSize: 35, color: Colors.DeepYellow[6] }} />
          <Text style={styles.title}>Meus Pedidos</Text>
        </View>

        <View style={{marginTop:10}}>
          {array.map(d => (
            <OrderHistoryCard
              num_order="123"
              status="Enviado"
              timestamp="05/08/2022 - 15:26"
              totalOrder="R$ 50,00"
              key={d}
            />
          ))}
        </View>


      </View>
    </ScrollView>
  );
};

export default OrderHistory;
