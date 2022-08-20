import React from "react";
import { View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";

import Logo from "../../../assets/logo_login.png";

const Login = () => {
  return (
    <KeyboardAwareScrollView
      style={{
        padding: 18,
        backgroundColor: Colors.Neutral.white,
      }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ justifyContent: "center", flex: 1}}
      scrollEnabled={false}
    >
      <View style={{ marginBottom: 32 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 42,
          }}
        >
          <Image source={Logo} />
        </View>
        <Input label="Email" placeholder="Digite seu e-mail" />
        <Input label="Senha" placeholder="Digite sua senha" />
      </View>
      <Button title="Login" />
    </KeyboardAwareScrollView>
  );
};

export default Login;
