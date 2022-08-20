import React from "react";
import { Text, View, Image, Button, TouchableOpacity } from "react-native";
import styles from "./style";

import monsterBurger from '../../../assets/icons/monster_burger.png';
import Colors from "../../styles/colors";

interface Props {
    product?: string;
    totalOrder?: string;
    amount?: string;
}

const ItensOrder = ({ product, totalOrder, amount }: Props) => {

    return (
        <View style={styles.cardsDetails}>

            <View style={styles.details}>
                <View style={styles.fistCard}>
                    <Image style={{ width: 95, height: 95 }}
                        source={monsterBurger}
                    />
                    <View style={styles.text}>
                        <Text >{product}</Text>
                        <Text style={styles.total}>R${totalOrder}</Text>
                    </View>
                </View>


                <View style={styles.secondCard}>
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


                    {/* <Button title=" - " color={Colors.Gray["6"]} />
                        <Text style={{ padding: 7 }}>1</Text>
                    <Button title=" + " color={Colors.DeepYellow["6"]} /> */}

                </View>


            </View>

        </View>
    );
};

export default ItensOrder;
