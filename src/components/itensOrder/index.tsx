import React from "react";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import styles from "./style";

import SummaryValue from "../../components/summaryValue";
import monsterBurger from '../../../assets/icons/monster_burger.png';
import Colors from "../../styles/colors";

interface Props {
    product?: string;
    price: number;
    img: string;
}

const ItensOrder = ({ product, price, img }: Props) => {
    console.log(price);
    const [countPrice, setCountPrice] = React.useState(price);
    const [amount, setAmount] = React.useState(1);


    const handleCountMore = () => {
        setAmount(amount + 1);
        setCountPrice(countPrice + price);
    }

    const handleCountLess = () => {
        if (amount > 1) {
            setAmount(amount - 1);
            setCountPrice(countPrice - price);
        }
        console.log(countPrice + amount)
    }

    React.useEffect(() => {
        setCountPrice(price);
    }, [])


    return (
        <View>

            <View style={styles.cardsDetails}>

                <View style={styles.details}>
                    <View style={styles.fistCard}>
                        <Image style={{ width: 95, height: 95 }}
                            source={img != '' ? { uri: img } : monsterBurger}
                        />
                        <View style={styles.text}>
                            <Text >{product}</Text>
                            <Text style={styles.total}>R${countPrice}</Text>
                        </View>
                    </View>


                    <View style={styles.secondCard}>
                        <TouchableOpacity
                            style={styles.minus}
                            onPress={handleCountLess}
                        >
                            <Text style={{ color: Colors.Gray[6] }}> - </Text>
                        </TouchableOpacity>

                        <Text style={styles.textQnt}>{amount}</Text>

                        <TouchableOpacity
                            style={styles.most}
                            onPress={handleCountMore}
                        >
                            <Text style={{ color: Colors.Neutral.white }}> + </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            <SummaryValue
                subtotal={countPrice}
                total={countPrice + 6}
                textButton="Continuar"
                
            />

        </View>

    );
};

export default ItensOrder;
