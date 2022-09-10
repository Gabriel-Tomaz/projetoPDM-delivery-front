import React from "react";
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { useAppDispatch } from "../../hooks";
import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";
import { Address } from "../../@types/address";
import Header from "../../components/header";
import { RootStackParamList } from "../RootStackPrams";
import { ScrollView } from "react-native-gesture-handler";

type authScreenProp = DrawerNavigationProp<RootStackParamList, "Register">;

const RegisterAddress = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<authScreenProp>();

  const initialValues: Address = {
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    complemento: "",
  };

  const SingupSchema = Yup.object().shape({
    rua: Yup.string()
      .min(3, "Informe um nome válido")
      .required("Campo obrigatório"),
    numero: Yup.number(),
    bairro: Yup.string()
      .min(3, "Informe um nome válido")
      .required("Campo obrigatório"),
    cidade: Yup.string()
      .min(3, "Informe um nome válido")
      .required("Campo obrigatório"),
    complemento: Yup.string().min(3, "Informe um nome válido"),
  });

  const handleAddAddress = (address: Address) => {
    console.log(address);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Header title="Novo endereço" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      ></KeyboardAvoidingView>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 18, paddingVertical: 18 }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={SingupSchema}
          onSubmit={(values: Address) => handleAddAddress(values)}
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
              <View style={{ flexDirection: "row" }}>
                <Input
                  label="Rua"
                  placeholder="Digite sua rua"
                  onChange={handleChange("rua")}
                  onBlur={handleBlur("rua")}
                  value={values.rua}
                  customStyle={{ flex: 2, marginRight: 8 }}
                />
                <Input
                  label="Número"
                  onChange={handleChange("numero")}
                  onBlur={handleBlur("numero")}
                  value={String(values.numero)}
                  customStyle={{ flex: 0.6 }}
                  placeholder="N°"
                />
              </View>
              <Input
                label="Bairro"
                placeholder="Digite seu Bairro"
                onChange={handleChange("bairro")}
                onBlur={handleBlur("bairro")}
                value={values.bairro}
              />
              <Input
                label="Cidade"
                placeholder="Digite sua cidade"
                password
                onChange={handleChange("cidade")}
                onBlur={handleBlur("cidade")}
                value={values.cidade}
              />

              <Input
                label="Complemento"
                placeholder="Ex: Apartamento 102"
                password
                onChange={handleChange("complemento")}
                onBlur={handleBlur("complemento")}
                value={values.complemento}
              />

              <View style={{ marginTop: 8 }}>
                <Button
                  type="primary"
                  title="Cadaste-se"
                  onPress={() => handleSubmit()}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterAddress;
