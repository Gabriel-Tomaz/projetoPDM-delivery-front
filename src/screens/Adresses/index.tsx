import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import { Icon, BottomSheet, ListItem } from "@rneui/base";

import { useAppDispatch } from "../../hooks";
import Button from "../../components/button";
import Colors from "../../styles/colors";
import Header from "../../components/header";
import { RootStackParamList } from "../RootStackPrams";
import {
  getAddresses,
  deleteAddress,
} from "../../store/actions/address.actions";
import { Address } from "../../@types/address";

type authScreenProp = DrawerNavigationProp<
  RootStackParamList,
  "RegisterAddress"
>;

const ListAddresses = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<authScreenProp>();
  const { user } = useSelector((state: any) => state.user);
  const { addresses } = useSelector((state: any) => state.address);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<any>();

  const handleDeleteAddress = (id: any) => {
    dispatch(
      deleteAddress(id, (err: any) => {
        if (err) {
          console.log(err);
        } else {
          setIsVisible(false);
        }
      })
    );
  };

  useEffect(() => {
    dispatch(
      getAddresses(user.id, (err: any) => {
        if (err) {
          console.log(err);
        }
      })
    );
  }, [isVisible]);

  const list = [
    {
      title: "Editar endereço",
      containerStyle: { BackgroundColor: Colors.Neutral.white },
      iconName: "edit",
    },
    {
      title: "Deletar endereço",
      containerStyle: { BackgroundColor: Colors.Neutral.white },
      iconName: "delete",
      onPress: () => handleDeleteAddress(selectedId),
    },
    {
      title: "Cancelar",
      containerStyle: { backgroundColor: Colors.Red[5] },
      titleStyle: { color: Colors.Neutral.white },
      onPress: () => setIsVisible(false),
      iconName: "highlight-off",
      iconColor: Colors.Neutral.white,
    },
  ];

  console.log(selectedId);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Header title="Meus endereços" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 18, paddingVertical: 18 }}
      >
        <View>
          {addresses.map((address: Address) => (
            <View
              key={address.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderWidth: 1,
                borderColor: Colors.Gray[2],
                paddingHorizontal: 12,
                paddingVertical: 12,
                borderRadius: 8,
                marginBottom: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon
                  type="material"
                  name="location-pin"
                  size={24}
                  color={Colors.DeepYellow[6]}
                />
                <View style={{ marginLeft: 12 }}>
                  <View>
                    <Text
                      style={{
                        color: Colors.Neutral.black,
                        fontWeight: "600",
                        fontSize: 16,
                        marginBottom: 4,
                      }}
                    >
                      {address.rua}
                    </Text>
                    <Text
                      style={{
                        color: Colors.Gray[5],
                        fontWeight: "500",
                        fontSize: 12,
                      }}
                    >
                      {address.bairro} - {address.cidade}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSelectedId(address.id);
                  setIsVisible(!isVisible);
                }}
              >
                <Icon
                  type="material"
                  name="more-vert"
                  size={24}
                  color={Colors.Neutral.black}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: Colors.Neutral.white,
          paddingVertical: 18,
          paddingHorizontal: 18,
        }}
      >
        <Button
          type="primary"
          title="Adicionar endereço"
          onPress={() => {
            navigation.navigate("RegisterAddress");
          }}
        ></Button>
      </View>
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Icon type="material" name={l.iconName} color={l.iconColor} />
              <ListItem.Title style={{ ...l.titleStyle, marginLeft: 12 }}>
                {l.title}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </SafeAreaView>
  );
};

export default ListAddresses;
