import React from "react";
import {View, Text, useWindowDimensions} from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../styles/colors";
import NavBar from "../../components/navBar";
import styles from "../product/style";
import Title from "../../components/title";
import Icon from "react-native-vector-icons/Feather";

const Cardapio = () => {
    const {width, height } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        justifyContent: "flex-start",
      }}
    >
        <NavBar/>

      <Text
        style={{
          fontWeight: "bold",
          color: Colors.Neutral.black,
          textAlign: "center",
        }}
      >
       Cardápio!
      </Text>
    </View>
  );
};

export default Cardapio;
