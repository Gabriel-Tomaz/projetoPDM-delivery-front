import React from "react";
import { View, Text } from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../styles/colors";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: Colors.Neutral.black,
          textAlign: "center",
        }}
      >
        Olá Mundooooo!
      </Text>
    </View>
  );
};

export default Home;
