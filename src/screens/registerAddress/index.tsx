import React from "react";
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../hooks";
import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";
import { Address } from "../../@types/address";
import Header from "../../components/header";
import { RootStackParamList } from "../RootStackPrams";
import { addAddress } from "../../store/actions/address.actions";

type authScreenProp = DrawerNavigationProp<RootStackParamList, "Endereços">;

const RegisterAddress = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<authScreenProp>();
  const { user } = useSelector((state: any) => state.user);

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
    complemento: Yup.string().min(3, "Infome um complemento válido"),
  });

  const handleAddAddress = (address: Address) => {
    dispatch(
      addAddress(
        {
          ...address,
          id_usuario: user.id,
          lat: "-7.383756",
          lng: "-38.753431",
        },
        (err: any) => {
          if (err) {
            console.log(err);
          } else {
           navigation.navigate('Endereços');
          }
        }
      )
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
                  error={errors.rua && touched.rua ? errors.rua : undefined}
                />
                <Input
                  label="Número"
                  onChange={handleChange("numero")}
                  onBlur={handleBlur("numero")}
                  value={String(values.numero)}
                  customStyle={{ flex: 0.6 }}
                  placeholder="N°"
                  error={
                    errors.numero && touched.numero ? errors.numero : undefined
                  }
                />
              </View>
              <Input
                label="Bairro"
                placeholder="Digite seu Bairro"
                onChange={handleChange("bairro")}
                onBlur={handleBlur("bairro")}
                value={values.bairro}
                error={
                  errors.bairro && touched.bairro ? errors.bairro : undefined
                }
              />
              <Input
                label="Cidade"
                placeholder="Digite sua cidade"
                onChange={handleChange("cidade")}
                onBlur={handleBlur("cidade")}
                value={values.cidade}
                error={
                  errors.cidade && touched.cidade ? errors.cidade : undefined
                }
              />

              <Input
                label="Complemento"
                placeholder="Ex: Apartamento 102"
                onChange={handleChange("complemento")}
                onBlur={handleBlur("complemento")}
                value={values.complemento}
                error={
                  errors.complemento && touched.complemento
                    ? errors.complemento
                    : undefined
                }
              />

              <View style={{ marginTop: 8 }}>
                <Button
                  type="primary"
                  title="Adicionar endereço"
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
