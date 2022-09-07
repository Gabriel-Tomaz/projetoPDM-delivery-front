import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Icon } from "@rneui/base";

import styles from "./style";
import Colors from "../../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  backgroud?: string;
  colorText?: string;
  type: "primary" | "secondary" | "link";
}

const Button = ({
  title,
  backgroud,
  colorText,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor:
          type === "primary"
            ? Colors.DeepYellow[6]
            : type === "secondary"
            ? Colors.Neutral.white
            : Colors.Neutral.white,
        borderWidth: type === "secondary" ? 1 : 0,
        borderColor: type === "secondary" ? Colors.DeepYellow[6] : "",
      }}
      {...rest}
    >
      <Text
        style={{
          ...styles.titleButton,
          color:
            type === "primary"
              ? Colors.Neutral.white
              : type === "secondary"
              ? Colors.DeepYellow[6]
              : Colors.DeepYellow[6],
        }}
      >
        {title}
      </Text>
      {type === "link" ? (
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
