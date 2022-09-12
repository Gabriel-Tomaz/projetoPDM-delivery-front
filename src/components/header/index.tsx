import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

import Logo from "../../../assets/header-logo.png";
import Colors from "../../styles/colors";
import { RootStackParamList } from "../../screens/RootStackPrams";
import { StackNavigationProp } from "@react-navigation/stack";

interface HeaderProps {
  title?: string;
  rightButton?: boolean;
  rightIcon?: string;
  rightIconColor?: string;
  rightAction?: () => void;
}

type authScreenProp = StackNavigationProp<RootStackParamList, "Login">;

const Header = ({
  title,
  rightButton,
  rightIcon,
  rightAction,
}: HeaderProps) => {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back-ios"
          type="material"
          size={24}
          color={Colors.DeepYellow[6]}
        />
      </TouchableOpacity>
      {title ? (
        <Text style={{ fontSize: 24, fontWeight: "600", lineHeight: 29, textAlign: 'center' }}>
          {title}
        </Text>
      ) : (
        <Image source={Logo} />
      )}
      {rightButton ? (
        <TouchableOpacity onPress={() => rightAction}>
          <Icon
            name={rightIcon ? rightIcon : "favorite-border"}
            type="material"
            size={24}
            color={Colors.DeepYellow[6]}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24, height: 24 }} />
      )}
    </View>
  );
};

export default Header;
