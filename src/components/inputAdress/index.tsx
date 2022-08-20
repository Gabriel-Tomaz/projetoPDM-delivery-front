import { Text, View, Image } from "react-native";
import styles from "./style";

import Icon from 'react-native-vector-icons/Feather'

interface Props {
    adress?: string;
}

const InputAdressCard = ({ adress }: Props) => {
    return (
        <View style={styles.container}>

            <Icon name="map-pin" size={22} color='#FFA200' />

            <View >
                <Text style={styles.adressCard} >{adress}</Text>
            </View>

            <Icon name="chevron-right" size={28} color='#FFA200' />
        </View>
    );
};

export default InputAdressCard;
