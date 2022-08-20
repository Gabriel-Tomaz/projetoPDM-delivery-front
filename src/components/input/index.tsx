import { View, Text, TextInput } from "react-native";
import styles from "./style";

interface Props {
  label?: string;
  placeholder?: string;
}

const Input = ({ label, placeholder }: Props) => {
  return (
    <View style={styles.inputContainer}>
      {label ? <Text style={styles.InputLable}>{label}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder={placeholder ? placeholder : ""}
      ></TextInput>
    </View>
  );
};

export default Input;
