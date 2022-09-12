import React, { useEffect } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import { Icon } from "@rneui/base";

import { useAppDispatch } from "../../hooks";
import Input from "../../components/input";
import Button from "../../components/button";
import Colors from "../../styles/colors";
import Header from "../../components/header";
import { RootStackParamList } from "../RootStackPrams";
import { getAddresses } from "../../store/actions/address.actions";
import { Address } from "../../@types/address";

type authScreenProp = DrawerNavigationProp<RootStackParamList, "Register">;

const ListAddresses = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<authScreenProp>();
  const { user } = useSelector((state: any) => state.user);
  const { addresses } = useSelector((state: any) => state.address);

  useEffect(() => {
    dispatch(
      getAddresses(user.id, (err: any) => {
        if (err) {
          console.log(err);
        }
      })
    );
  }, []);

  console.log(addresses);

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
              key={address.rua}
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
              <TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default ListAddresses;
