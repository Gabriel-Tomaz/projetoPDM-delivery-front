    import React from "react";
    import {View, Text, ScrollView, Image, useWindowDimensions, Button} from "react-native";

    import monster_burger from '../../../assets/icons/monster_burger.png';
    import Icon from 'react-native-vector-icons/Feather';

    import styles from "./style";
    import Title from "../../components/title";
    import Colors from "../../styles/colors";

    const Product = () => {

    const product = {
        name: "Golden Burger",
        description:" 2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado, Salada, Molho da casa,Pão brioche artesanal.",
        price: 25.35,
    }
    const {width, height } = useWindowDimensions();
    const [countPrice, setCountPrice] = React.useState(product.price);
    const [count, setCount] = React.useState(1);

    const handleCountMore = () => {
        setCount(count + 1);
        setCountPrice(countPrice + product.price);

        console.log( countPrice + count)
    }

    const handleCountLess = () => {
        if(count > 1){
            setCount(count - 1);
            setCountPrice(countPrice - product.price);
        }

        console.log( countPrice + count)

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
                  <Text style={styles.description}>
                      {product.description}
                  </Text>
              </View>
              <View style={[styles.cardButton, {width}]}>
                  <View style={[styles.countButton ,{flexDirection: 'row', width:width/2}]}>
                      <Button title="-" color={Colors.Gray["6"]} onPress={handleCountLess}/>
                      <Text>{count}</Text>
                      <Button title="+" color={Colors.DeepYellow["6"]}  onPress={handleCountMore}/>

                  </View>

                  <Text style={{fontWeight: 'bold', fontSize: 24,  marginLeft:20,color: Colors.DeepYellow["6"]}}>R$ {countPrice}</Text>


              </View>
                  <View>

                      <Button title="Adicionar Sacola" color={Colors.DeepYellow["6"]} />
                  </View>
              </View>
          </ScrollView>
      );
    };

    export default Product;
