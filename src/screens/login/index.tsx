import React from "react";
import { View, Image } from "react-native";

import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";

import Logo from "../../../assets/logo_login.png";

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 18,
        backgroundColor: Colors.Neutral.white,
      }}
    >
      <View style={{ marginBottom: 32 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 42
          }}
        >
          <Image source={Logo} />
        </View>
        <Input label="Email" placeholder="Digite seu e-mail" />
        <Input label="Senha" placeholder="Digite sua senha" />
      </View>
      <Button title="Login" />
    </View>
  );
};

export default Login;
