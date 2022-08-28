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
import { auth } from "../../store/actions/auth.actions";
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
    password: "",
  };

  const SingupSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Obrigatório"),
    password: Yup.string().min(8, "Senha invalida").required("Obrigatório"),
  });

  const Singup = async (user: User) => {
    dispatch(
      auth(user, (err: any) => {
        if (err) {
          console.log("erro", err);
        } else {
          console.log("OK");
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
                <Button title="Login" onPress={() => handleSubmit()} />
              </View>
            </View>
          )}
        </Formik>
        <View style={{marginTop: 24}}>
          <Button
            title="Cadastre-se"
            onPress={() => navigation.navigate("Register")}
            link
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
