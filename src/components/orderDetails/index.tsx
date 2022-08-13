import { Text, View, Image } from "react-native";
import styles from "./style";

import monsterBurger from '../../../assets/icons/monster_burger.png';

interface Props {
    product?: string;
    totalOrder?: string;
    amount?: string;
}

const OrderDetailsCard = ({ product, totalOrder, amount }: Props) => {
    return (
            <View style={styles.cardsDetails}>

                <View style={styles.details}>

                    <View style={styles.fistCard}>
                        <Image style={{width:100, height:100}}
                            source={monsterBurger}
                        />
                        <View style={styles.text}>
                            <Text >{product}</Text>
                            <Text style={styles.total}>R${totalOrder}</Text>
                        </View>
                    </View>

                    <View style={styles.secondCard}>
                        <Text>Qnt.</Text>
                        <Text>{amount}</Text>
                    </View>

                </View>

            </View>
    );
};

export default OrderDetailsCard;
