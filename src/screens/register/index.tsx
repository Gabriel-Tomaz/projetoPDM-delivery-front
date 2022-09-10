import React from "react";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { useAppDispatch } from "../../hooks";
import { register } from "../../store/actions/user.actions";
import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";
import { User } from "../../@types/user";
import Header from "../../components/header";
import { RootStackParamList } from "../RootStackPrams";

type authScreenProp = DrawerNavigationProp<RootStackParamList, "Register">;

const Register = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<authScreenProp>();

  const initialValues: User = {
    email: "",
    nome: "",
    senha: "",
  };

  const SingupSchema = Yup.object().shape({
    nome: Yup.string()
      .min(3, "Informe um nome válido")
      .required("Campo obrigatório"),
    email: Yup.string().email("Email invalido").required("Campo obrigatório"),
    senha: Yup.string()
      .min(8, "Senha invalida")
      .required("Campo obrigatório"),
  });

  const Singup = (user: User) => {
    dispatch(
      register(user, (err: any) => {
        if (err) {
          console.log("erro", err);
        } else {
          console.log('Cadastrado!');
          navigation.navigate("Login");
        }
      })
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Header />
      <KeyboardAwareScrollView
        style={{
          padding: 18,
          backgroundColor: Colors.Neutral.white,
        }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flex: 1 }}
      >
        <View>
          <Formik
            initialValues={initialValues}
            validationSchema={SingupSchema}
            onSubmit={(values: User) => Singup(values)}
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
                  label="Nome"
                  placeholder="Digite seu nome"
                  onChange={handleChange("nome")}
                  onBlur={handleBlur("nome")}
                  value={values.nome}
                  error={errors.nome && touched.nome ? errors.nome : undefined}
                />
                <Input
                  label="Email"
                  placeholder="Digite seu e-mail"
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={
                    errors.email && touched.email ? errors.email : undefined
                  }
                />
                <Input
                  label="Senha"
                  placeholder="Digite sua senha"
                  password
                  onChange={handleChange("senha")}
                  onBlur={handleBlur("senha")}
                  value={values.senha}
                  error={
                    errors.senha && touched.senha ? errors.senha : undefined
                  }
                />

                <View style={{ marginTop: 8 }}>
                  <Button
                    type="primary"
                    title="Cadastres-se"
                    onPress={() => handleSubmit()}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;
