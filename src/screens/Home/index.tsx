import React from "react";
import { View, Text } from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../styles/colors";
import NavBar from "../../components/navBar";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        justifyContent: "center",
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
        Olá Mundooo!
      </Text>
    </View>
  );
};

export default Home;
