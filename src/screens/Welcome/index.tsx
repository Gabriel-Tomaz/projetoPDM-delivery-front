import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

import burger from '../../../assets/burger-login.png';
import Colors from "../../styles/colors";
import NavBar from "../../components/navBar";
import Logo from "../../../assets/logo_login.png";
import styles from "./style";
import Button from "../../components/button";
import Icon from "react-native-vector-icons/Feather";


const Welcome = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();

    const openLogin = () => {
        navigation.navigate('Login')
    }

    const openCardapio = () => {
        navigation.navigate('Cardapio')
    }

    return (
        <View>
            {/* <NavBar /> */}

            <View style={[styles.container, { width, height: height / 2 }]}>
                <View style={[styles.containerHeader, { width }]}>
                    <Image source={Logo}
                           style={{ tintColor: Colors.Neutral.white }} />
                </View>
            </View>

            <View style={[styles.card]}>
                <Image
                    style={[styles.img, { position: "relative", height: 300, width: 300 }]}
                    source={burger}
                />

                <View style={[styles.escopo]}>
                    <Text style={styles.escopoTitle}>
                        O hambúger mais {'\n'}
                        delicioso da sua cidade
                    </Text>

                    <Text
                        style={styles.escopoText}>
                        Logou
                        <Icon name="arrow-right" size={18}
                              style={
                                  { color: '#FFA200', letterSpacing: 15 }}
                        />
                        Pediu

                        <Icon name="arrow-right" size={18}
                              style={
                                  { color: '#FFA200', letterSpacing: 15 }}
                        />

                        Chegou
                    </Text>

                </View>

            </View>

            <View style={styles.cardButton}>
                <Button
                    title="Fazer Login"
                    onPress={openLogin}
                />
            </View>

            <View style={styles.cardButton}>
                <Button
                    title="Ver Cardápio"
                    backgroud='#FFFFFF'
                    colorText="#FFA200"
                    onPress={openCardapio}
                />
            </View>






        </View>
    );
};

export default Welcome;
