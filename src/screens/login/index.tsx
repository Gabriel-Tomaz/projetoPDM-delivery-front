import React from "react";
import { View, Text } from "react-native";

import Input from "../../components/input";
import Colors from "../../styles/colors";

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 18, backgroundColor: Colors.Neutral.white}}>
      <Input label="Email" placeholder="Digite seu e-mail"/>
    </View>
  );
};

export default Login;
