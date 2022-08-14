import React from "react";
import { View, ScrollView, Text } from "react-native";

import styles from "./style";

import OrderDetailsCard from "../../components/orderDetails";
import InputAdressCard from "../../components/inputAdress";
import PaymentCard from "../../components/paymentType";

interface Props {
  num_order?: number;
  timestamp?: string;
  status?: string;
  totalItens?: number;
}

const OrderDetails = ({ num_order = 123, timestamp = '12365871', status = 'Enviado', totalItens = 4 }: Props) => {
  const array = [1, 2, 3, 4];

  return (

    <ScrollView style={{ backgroundColor: '#F8F9FA' }}>
      <View style={styles.orderDetails}>

        <View style={styles.titleContainer}>
          <Text style={styles.titleOrder}>Pedido #{num_order}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>

        <View style={styles.itensContainer}>
          <View>
            <Text style={styles.itens}>{totalItens} itens</Text>
          </View>

          <View style={styles.status}>
            <Text style={styles.statusTiTle}>{status}</Text>
          </View>
        </View>


        {array.map(d => (
          <OrderDetailsCard
            product="Monster Burguer"
            totalOrder="25,50"
            amount="01"
            key={d}
          />
        ))}


        <Text style={styles.text}>Endereço</Text>
        <InputAdressCard
          adress="321 - Rua das Flores - Jardins..."
        />
        
        <PaymentCard
          active
        />

      </View>
    </ScrollView >
  );
};

export default OrderDetails;
