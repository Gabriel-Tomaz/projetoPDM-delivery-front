import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import Title from "../../components/title";

type IResult = {
  uri: string;
}

const Profile: React.FC = () => {

  const [imagesURI, setImagesURI] = React.useState<string[]>([]);

  async function hanldeSelectImages() {
    // tenho acesso a galeria de fotos e não a câmera
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {// granted é quando o usuário deu permissão
      alert('Eita, precisamos de acesso às suas fotos...');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      // permite ao usuario editar a imagem (crop), antes de subir o app
      allowsEditing: true,
      quality: 1,
      //quero apensas imagems e não vídeo tb
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) { // se cancelou o upload da imagem
      const { uri } = result as IResult;
      // questão do conceito de imutabilidade. sempre que uma imagem for adicionado, 
      //temos que copiar as imagens que tinha antes no array. 
      //se não vai apagar na próxima renderização. pois começa sempre do zero
      setImagesURI([...imagesURI, uri]);
      console.log(imagesURI)
    }

  }
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

            <View style={{width:350, justifyContent: 'center', alignItems: 'center',}}>
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

            <Input label="Nome" placeholder="ZédoGas" />
            <Input label="Email" placeholder="exemplo@gmail" />
            <Input label="Senha" placeholder="Digite nova senha" />

          </View>
          <View style={{ marginTop: 20 }}>
            <Button type='primary' title="Editar" />
          </View>

          <View style={{ marginTop: 25 }}>
            <Button
              title="Deletar Conta"
              type='secondary'

            />
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
