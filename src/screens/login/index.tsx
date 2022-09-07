import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";
import { auth } from "../../store/actions/user.actions";
import { useAppDispatch } from "../../hooks";
import { User } from "../../types/user";
import { RootStackParamList } from "../RootStackPrams";

import Logo from "../../../assets/logo_login.png";

type authScreenProp = DrawerNavigationProp<RootStackParamList, "Register">;

const Login = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<authScreenProp>();

  const initialValues: User = {
    email: "",
    senha: "",
  };

  const SinginSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Obrigatório"),
    senha: Yup.string().min(8, "Senha invalida").required("Obrigatório"),
  });

  const Singin = (data: User) => {
    dispatch(
      auth(data, (err: any) => {
        if (err) {
          console.log("erro", err);
        } else {
          navigation.navigate("Cardapio");
        }
      })
    );
  };

  return (
    <KeyboardAwareScrollView
      style={{
        padding: 18,
        backgroundColor: Colors.Neutral.white,
      }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ justifyContent: "center", flex: 1 }}
      scrollEnabled={false}
    >
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 42,
            padding: 24,
          }}
        >
          <Image source={Logo} />
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={SinginSchema}
          onSubmit={(values: User) => Singin(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View>
              <Input
                label="Email"
                placeholder="Digite seu e-mail"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                error={errors.email && touched.email ? errors.email : undefined}
              />
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                password
                onChange={handleChange("senha")}
                onBlur={handleBlur("senha")}
                value={values.senha}
                error={errors.senha && touched.senha ? errors.senha : undefined}
              />

              <View style={{ marginTop: 8 }}>
                <Button
                  title="Login"
                  onPress={() => handleSubmit()}
                  type="primary"
                />
              </View>
            </View>
          )}
        </Formik>
        <View style={{ marginTop: 24 }}>
          <Button
            title="Cadastre-se"
            onPress={() => navigation.navigate("Register")}
            type="link"
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
