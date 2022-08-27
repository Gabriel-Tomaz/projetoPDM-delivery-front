import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import styles from "./style";

import ItensOrder from "../../components/itensOrder";
import SummaryValue from "../../components/summaryValue";
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../../styles/colors";

interface Props {
  totalItens?: number;
}

const ShoppingBag = ({ totalItens = 4 }: Props) => {
  const array = [1, 2, 3, 4];

  return (

    <ScrollView style={{ backgroundColor: '#F8F9FA' }}>
      <View style={styles.orderDetails}>

        <View style={styles.titleContainer}>
          <Icon name="arrow-left"
          style={{fontSize: 35, color: Colors.DeepYellow[6]}} />
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

        {array.map(d => (
          <ItensOrder
            product="Monster Burguer"
            totalOrder="25,50"
            amount="01"
            key={d}
          />
        ))}

        <SummaryValue
          textButton="Continuar"
        />

      </View>
    </ScrollView >
  );
};

export default ShoppingBag;
