import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/button";
import Logo from "../../../assets/logo_login.png";
import Ilustration from "../../../assets/welcome.png";
import { RootStackParamList } from "../RootStackPrams";
type authScreenProp = StackNavigationProp<RootStackParamList, "Register">;

import styles from "./style";
import { StackNavigationProp } from "@react-navigation/stack";

const Welcome = () => {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.imageContainer}>
          <Image source={Logo} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 52,
          }}
        >
          <View style={{ marginBottom: 24 }}>
            <Image source={Ilustration} />
          </View>
          <Text style={styles.title}>
            O melhor delivery da sua Cidade. Logou, pediu, chegou!
          </Text>
        </View>
        <View style={{ marginBottom: 24 }}>
          <Button
            title="Fazer meu pedido"
            type="primary"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <Button
          title="Junte-se a nós! Cadastre-se"
          onPress={() => navigation.navigate("Register")}
          type="secondary"
        />
      </View>
    </View>
  );
};

export default Welcome;
