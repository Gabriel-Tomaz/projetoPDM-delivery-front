import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import Title from "../../components/title";
import {User} from "../../types/user";
import api from "../../service/api";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

type IResult = {
  uri: string;
}

const Profile: React.FC = () => {
  const userLogin = useSelector((state: any) => state.user.user);
  const navigation = useNavigation();
  const [imagesURI, setImagesURI] = React.useState<string[]>([]);

  const [user, setUser] = React.useState([{
    id: 0,
    email: '',
    nome: '',
    img:  imagesURI[imagesURI.length - 1],
    senha: ''
  }]);

  const [name, setName] = React.useState(String);
  const [email, setEmail] = React.useState(String);
  const [password, setPassword] = React.useState(String);

  React.useEffect(() => {
    const searchOrders = async () => {
      await api.get(`/userget/${1}`)
          .then((resposta) => resposta.data)
          .then((json) => setUser(json))
          .catch((error) => console.error(error))
    }
    searchOrders();
  }, []);


  React.useEffect(() => {
    if(user[0] != undefined) {
      setImagesURI([...imagesURI, user[0].img]);
      setName(user[0].nome);
      setEmail(user[0].email);
    }
  }, [user]);

  async function hanldeSelectImages() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos de acesso às suas fotos...');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      const { uri } = result as IResult;
      setImagesURI([...imagesURI, uri]);
    }
  }

  const initialValues: User = {
    id: 0,
    email: "",
    nome: "",
    img: "",
    senha: ""
  };

  const SingupSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido"),
    senha: Yup.string().min(8, "Senha invalida").required("Obrigatório"),
  });

  const Singup = async (user: User) => {
    const newUser = {
      id: userLogin.id,
      nome: user.nome? user.nome : name,
      email: user.email ? user.email : email,
      senha: user.senha,
      img: imagesURI[imagesURI.length - 1]
    }
    await api.put(`/userupdate`, newUser)
                    .then((resposta) => resposta.data)
                    .then((json) => setUser(json))
                    .catch((error) => console.error(error))

    navigation.navigate('Cardapio');
  };

  return (
    <KeyboardAwareScrollView
      style={{
        marginTop: 35,
        margin: 5,
        backgroundColor: Colors.Neutral.white,
      }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ justifyContent: "center", flex: 1 }}
      scrollEnabled={false}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>

          <View style={{ marginBottom: 20 }}>

            <Title 
              label="Perfil"/>

            <View style={{width:350, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.uploadedImageContainer}>
                <Image
                  key={imagesURI[imagesURI.length - 1]}
                  source={{ uri: imagesURI[imagesURI.length - 1] }}
                  style={styles.uploadedImage}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.imagesInput} onPress={hanldeSelectImages}>
              <Feather name="plus" size={24} color={Colors.Gray[4]} />
            </TouchableOpacity>
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
                errors
              }) => (
                <View>
                    <Input label="Nome"
                           placeholder={name}
                           value={values.nome}
                           onBlur={handleBlur("nome")}
                           onChange={handleChange("nome")}/>

                    <Input label="Email"
                           placeholder={email}
                           value={values.email}
                           onBlur={handleBlur("email")}
                           onChange={handleChange("email")}
                           error={errors.email && touched.email ? errors.email : undefined}/>

                    <Input label="Senha"
                           placeholder="Digite sua senha ou uma nova"
                           value={values.senha}
                           onBlur={handleBlur("senha")}
                           onChange={handleChange("senha")}
                           error={
                      errors.senha && touched.senha
                          ? errors.senha
                          : undefined
                    }/>

                <View style={{ marginTop: 20 }}>
                  <Button type='primary' title="Salvar dados" onPress={() => handleSubmit()} />
                </View>
                </View>
              )}
            </Formik>
          </View>

        </View>
      </ScrollView>
    </KeyboardAwareScrollView>

  );
};


const styles = StyleSheet.create({

  titleContainer: {
    alignItems: 'center',
    height: 60, 
    marginTop:35,
    borderBottomWidth: 2 ,
    borderStyle: 'solid',
    borderBottomColor: Colors.Gray[2],
  },
  title: {
    fontSize: 24,
  },
  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: Colors.Gray[2],
    borderWidth: 1.4,
    borderRadius: 20,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',

  },
  uploadedImageContainer: {
    width: 110,
    height: 110,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
    marginRight: 8,
    borderStyle: 'solid',
    borderColor: Colors.Gray[2],
    borderWidth: 1.4,
   
  },
  uploadedImage: {
    width: 110,
    height: 110,
    borderRadius: 20,
    marginBottom: 20,
    marginRight: 8

  }

})

export default Profile;
