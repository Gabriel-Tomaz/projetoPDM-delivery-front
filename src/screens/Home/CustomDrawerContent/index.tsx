import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../styles/colors";
import { useAppDispatch } from "../../../hooks";
import { logout } from "../../../store/actions/user.actions";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackPrams";

type authScreenProp = StackNavigationProp<RootStackParamList, "Register">;

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { user } = useSelector((state: any) => state.user);
  const navigation = useNavigation<authScreenProp>();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(
      logout((err: any) => {
        if (err) {
          console.log("erro", err);
        } else {
          navigation.navigate("Welcome");
        }
      })
    );
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 18,
      }}
    >
      <View>
        <View
          style={{
            paddingVertical: 12,
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 16,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              type="material"
              name="account-circle"
              size={24}
              color={Colors.Gray[8]}
            />
            <Text
              style={{
                fontSize: 20,
                lineHeight: 24,
                fontWeight: "500",
                marginLeft: 8,
              }}
            >
              {user.nome}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              padding: 6,
              backgroundColor: Colors.Gray[0],
              borderRadius: 50,
            }}
            onPress={() => props.navigation.closeDrawer()}
          >
            <Icon
              type="material"
              name="close"
              size={16}
              color={Colors.Gray[8]}
            />
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props} />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          paddingVertical: 16,
          borderRadius: 6,
        }}
        onPress={() => handleLogout()}
      >
        <Icon type="material" name="logout" color={Colors.Red[5]} size={20} />
        <Text
          style={{
            fontSize: 16,
            color: Colors.Neutral.black,
            fontWeight: "500",
            lineHeight: 19,
            marginLeft: 8,
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
