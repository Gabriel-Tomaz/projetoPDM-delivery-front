import React from "react";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";
import { RegisterUser } from "../../types/user";
import Header from "../../components/header";

const Register = () => {
  const initialValues: RegisterUser = {
    email: "",
    name: "",
    password: "",
  };

  const SingupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Informe um nome válido")
      .required("Campo obrigatório"),
    email: Yup.string().email("Email invalido").required("Campo obrigatório"),
    password: Yup.string()
      .min(8, "Senha invalida")
      .required("Campo obrigatório"),
  });

  const Singup = (user: RegisterUser) => {
    console.log(user);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }}
    >
      <Header></Header>
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
            onSubmit={(values: RegisterUser) => Singup(values)}
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
                  label="Name"
                  placeholder="Digite seu nome"
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  error={errors.name && touched.name ? errors.name : undefined}
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
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={
                    errors.password && touched.password
                      ? errors.password
                      : undefined
                  }
                />

                <View style={{ marginTop: 8 }}>
                  <Button title="Cadaste-se" onPress={() => handleSubmit()} />
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
