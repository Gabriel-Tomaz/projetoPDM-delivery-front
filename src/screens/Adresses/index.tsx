import React from "react";
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
import { addAddress } from "../../store/actions/address.actions";

type authScreenProp = DrawerNavigationProp<RootStackParamList, "Register">;

const ListAddresses = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<authScreenProp>();
  const { user } = useSelector((state: any) => state.user);

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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: Colors.Gray[2],
              paddingHorizontal: 12,
              paddingVertical: 12,
              borderRadius: 8,
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
                    104 - Rua das flores
                  </Text>
                  <Text
                    style={{
                      color: Colors.Gray[5],
                      fontWeight: "500",
                      fontSize: 12,
                    }}
                  >
                    Bela Vista - Mauriti
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListAddresses;
