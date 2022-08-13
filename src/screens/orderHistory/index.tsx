import React from "react";
import { View, Text, ScrollView } from "react-native";

import OrderHistoryCard from "../../components/orderHistory";

const OrderHistory = () => {
  return (

    <ScrollView style={{ backgroundColor: '#F8F9FA' }}>
      <View style={{ flex: 1, justifyContent: "center", padding: 18, backgroundColor: '#F8F9FA' }}>
        <View style={{ alignItems: 'center', margin: 20 }}>
          <Text style={{ fontSize: 24 }}>Meus Pedidos</Text>
        </View>

        <OrderHistoryCard
          num_order="123"
          status="Enviado"
          timestamp="05/08/2022 - 15:26"
          totalOrder="R$ 50,00"
        />

        <OrderHistoryCard
          num_order="123"
          status="Enviado"
          timestamp="05/08/2022 - 15:26"
          totalOrder="R$ 50,00"
        />


        <OrderHistoryCard
          num_order="123"
          status="Enviado"
          timestamp="05/08/2022 - 15:26"
          totalOrder="R$ 50,00"
        />

        <OrderHistoryCard
          num_order="123"
          status="Enviado"
          timestamp="05/08/2022 - 15:26"
          totalOrder="R$ 50,00"
        />
      </View>
    </ScrollView>
  );
};

export default OrderHistory;
