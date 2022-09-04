    import React from "react";
    import {View, Text, ScrollView, Image, useWindowDimensions, TouchableOpacity} from "react-native";
    import { useNavigation } from '@react-navigation/native';

    import monster_burger from '../../../assets/icons/monster_burger.png';
    import Icon from 'react-native-vector-icons/Feather';

    import styles from "./style";
    import Title from "../../components/title";
    import Colors from "../../styles/colors";
    import Button from "../../components/button";
    import NavBar from "../../components/navBar";

    const Product = () => {
        const navigation = useNavigation();

        const product = {
            name: "Golden Burger",
            description:" 2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa,Pão brioche artesanal.",
            price: 25.35,
        }
        const {width, height } = useWindowDimensions();
        const [countPrice, setCountPrice] = React.useState(product.price);
        const [amount, setAmount] = React.useState(1);

        const handleCountMore = () => {
            setAmount(amount + 1);
            setCountPrice(countPrice + product.price);
        }

        const handleCountLess = () => {
            if(amount > 1){
                setAmount(amount - 1);
                setCountPrice(countPrice - product.price);
            }
            console.log( countPrice + amount)
        }

        const openScreen = () => {
            navigation.navigate('Login')
        }


        React.useEffect(() => {
            setCountPrice(product.price);
        }, [])

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
                              {product.name}
                          </Text>

                      </View>
                      <View style={{width: width}}>
                          <Text style={styles.line}></Text>
                      </View>
                      <View style={{width: width}}>
                          <Text style={[styles.description, {color: Colors.Gray["5"]}]}>
                              {product.description}
                          </Text>
                      </View>

                      <View style={[styles.cardButton, {width}]}>

                        <Text style={{ fontSize: 22, color: Colors.Gray["6"]}}>Quantidade:</Text>
                      <View style={[styles.secondCard, {width}]}>
                         <View style={{flexDirection: 'row'}}>
                             <TouchableOpacity
                                 style={styles.minus}
                             >
                                 <Text style={{color: Colors.Gray[6]}}> - </Text>
                             </TouchableOpacity>

                             <Text style={styles.textQnt}>{amount}</Text>

                             <TouchableOpacity
                                 style={styles.most}
                             >
                                 <Text style={{color: Colors.Neutral.white}}> + </Text>
                             </TouchableOpacity>
                         </View>
                          <Text style={{fontWeight: 'bold', fontSize: 32,color: Colors.DeepYellow["6"]}}>R$ {countPrice}</Text>
                      </View>

                  </View>

                      <View style={{paddingTop: 40,}}>
                          <Button type="primary" title="Adicionar à Sacola"  onPress={openScreen} />
                      </View>
                  </View>

              </ScrollView>
          );
    };

    export default Product;
