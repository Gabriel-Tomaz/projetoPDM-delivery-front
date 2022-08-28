import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Icon } from "@rneui/base";

import styles from "./style";
import Colors from "../../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  link?: boolean;
}

const Button = ({ title, link, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: link ? "transparent" : Colors.DeepYellow[6],
      }}
      {...rest}
    >
      <Text
        style={{
          ...styles.titleButton,
          color: link ? Colors.DeepYellow[6] : Colors.Neutral.white,
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
};

export default Button;
