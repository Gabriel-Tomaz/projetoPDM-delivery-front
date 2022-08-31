import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Icon } from "@rneui/base";


import styles from "./style";
import Colors from "../../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  link?: boolean;
  backgroud?: string;
  colorText?: string;
}

const Button = ({ title, link, backgroud, colorText, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: link || backgroud ? backgroud : Colors.DeepYellow[6],
      }}
      {...rest}
    >
      <Text
        style={{
          ...styles.titleButton,
          color: link  || colorText ? colorText : Colors.Neutral.white,
        }}
      >
        {title}
      </Text>
      {link ? (
        <Icon
          name="arrow-forward"
          type="material"
          size={18}
          color={Colors.DeepYellow[6]}
        />
      ) : null}
    </TouchableOpacity>
  );

}

export default Button;
