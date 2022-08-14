import React from "react";
import {View, Text, ScrollView, Image, useWindowDimensions, Button} from "react-native";

import backImg from '../../../assets/icons/back.png';
import monster_burger from '../../../assets/icons/monster_burger.png';
import Icon from 'react-native-vector-icons/Feather';

import styles from "./style";
import Title from "../../components/title";
import styleToBarStyle from "expo-status-bar/build/styleToBarStyle";

const Product = () => {
    const {width, height } = useWindowDimensions();
    console.log(height)
    return (
      <ScrollView style={{ width, height }}>
          <View style={[styles.container, {width, height: height/2}]}>
              <View style={[styles.containerHeader, { width }]}>
                  <Title label="Produto" />
                  <Text>
                      <Icon name="heart" style={{fontWeight: 'bold',
                          fontSize: 20}}/>
                  </Text>
              </View>
          </View>
          <View style={[styles.card, {width, height: height/2}]}>
              <Image
                  style={[styles.img, {position: "relative", height: 300, width: 300}]}
                  source={monster_burger}
              />
              <View style={[styles.escopo, {width: width}]}>
                  <Text style={{fontWeight: 'bold', fontSize: 24,  marginLeft:20,}}>
                      Golden Burger
                  </Text>

              </View>
              <View style={{width: width}}>
                  <Text style={styles.line}></Text>
              </View>
          <View style={{width: width}}>
              <Text style={styles.description}>
                  2 Blends de carne de 150g, Queijo Cheddar,
                  Bacon Caramelizado, Salada, Molho da casa,
                  Pão brioche artesanal.
              </Text>
          </View>
              <View
                  style={[styles.cardButton
                  ]}>

                  <Button title='-' color='#666'/>

                  <Button title='0' color={''}/>

                  <Button title='+' color='#FFA200'/>

              </View>
      </View>
      </ScrollView>
  );
};

export default Product;
