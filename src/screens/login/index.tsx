import React from "react";
import { View, Text } from "react-native";

import Input from "../../components/input";

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 18, backgroundColor: '#F8F9FA'}}>
      <Input placeholder="Digite seu e-mail"/>
    </View>
  );
};

export default Login;
