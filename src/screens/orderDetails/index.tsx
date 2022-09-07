import React from "react";
import { View, ScrollView, Text } from "react-native";

import styles from "./style";

import OrderDetailsCard from "../../components/orderDetails";
import InputAdressCard from "../../components/inputAdress";
import PaymentCard from "../../components/paymentType";
import StatusOrder from "../../components/statusOrder";
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../../styles/colors";


interface Props {
  num_order?: number;
  totalItens?: number;
}

const OrderDetails = ({ num_order = 123, totalItens = 4 }: Props) => {
  const array = [1, 2, 3, 4];

  return (

    <ScrollView style={{ backgroundColor: '#F8F9FA' }}>
      <View style={styles.orderDetails}>

        <View style={styles.titleContainer}>
          <Icon name="arrow-left"
            style={{ fontSize: 35, color: Colors.DeepYellow[6] }} />
          <View style={{alignItems:'center'}}>
            <Text style={styles.titleOrder}>Pedido #{num_order}</Text>
          </View>
        </View>

        <View style={styles.itensContainer}>
          <View>
            <Text style={styles.itens}>{totalItens} itens</Text>
          </View>

          <StatusOrder
            status="Enviado"
          />
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
