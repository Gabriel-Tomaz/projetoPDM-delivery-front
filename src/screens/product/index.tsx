    import React from "react";
    import {View, Text, ScrollView, Image, useWindowDimensions, TouchableOpacity} from "react-native";
    import {useNavigation, useRoute} from '@react-navigation/native';
    import Icon from 'react-native-vector-icons/Feather';

    import styles from "./style";
    import Title from "../../components/title";
    import Colors from "../../styles/colors";
    import Button from "../../components/button";

    interface Params{
        id: number,
        nome: string,
        descricao: string,
        preco: number,
        img: string,
    }

    const Product = () => {
        const navigation = useNavigation();
        const route = useRoute();
        const {produto} = route.params as Params;

        const {width, height } = useWindowDimensions();
        const [countPrice, setCountPrice] = React.useState(produto.preco);
        const [amount, setAmount] = React.useState(1);

        const handleCountMore = () => {
            console.log(amount)
            setAmount(amount+1);
            let preco = countPrice + produto.preco;
            setCountPrice(preco);
        }

        const handleCountLess = () => {
            if(amount > 1){
                setAmount(amount - 1);
                setCountPrice(countPrice - produto.preco);
            }
        }

        const openScreen = () => {
            navigation.navigate('')
        }


        React.useEffect(() => {
            setCountPrice(produto.preco);
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
                          source={{uri:produto.img}}
                      />
                      <View style={[styles.escopo, {width: width}]}>
                          <Text style={{fontWeight: 'bold', fontSize: 24,  marginLeft:20,marginTop:20}}>
                              {produto.nome}
                          </Text>


                      <View style={{width: width}}>
                          <Text style={styles.line}></Text>
                      </View>
                      </View>
                      <View style={{width: width}}>
                          <Text style={[styles.description, {color: Colors.Gray["5"]}]}>
                              {produto.descricao}
                          </Text>
                      </View>

                      <View style={[styles.cardButton, {width}]}>

                        <Text style={{ fontSize: 22, color: Colors.Gray["6"]}}>Quantidade:</Text>
                      <View style={[styles.secondCard, {width}]}>
                         <View style={{flexDirection: 'row'}}>
                             <TouchableOpacity
                                 style={styles.minus}  onPress={handleCountLess}
                             >
                                 <Text style={{color: Colors.Gray[6]}}> - </Text>
                             </TouchableOpacity>

                             <Text style={styles.textQnt}>{amount}</Text>

                             <TouchableOpacity
                                 style={styles.most} onPress={handleCountMore}
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
