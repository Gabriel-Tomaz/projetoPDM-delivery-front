import { View, Text, StyleProp, ViewStyle } from "react-native";
import styles from "./style";
import { Input as InputUI } from "@rneui/themed";
import Colors from "../../styles/colors";

interface Props {
  label?: string;
  placeholder?: string;
  password?: boolean;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
  value?: string;
  error?: string;
  customStyle?: StyleProp<ViewStyle>;
}

const Input = ({
  label,
  placeholder,
  password,
  value,
  error,
  onChange,
  onBlur,
  customStyle
}: Props) => {
  return (
    <View style={{...styles.inputContainer, ...customStyle}}>
      {label ? <Text style={styles.InputLable}>{label}</Text> : null}
      <InputUI
        placeholder={placeholder ? placeholder : ""}
        secureTextEntry={password}
        style={{...styles.input, borderColor: error ? Colors.Red[4]: Colors.Gray[2]}}
        inputContainerStyle={styles.disable}
        containerStyle={styles.disable}
        onChangeText={(e) => onChange(e)}
        onBlur={(e) => onBlur(e)}
        value={value}
        errorMessage={error}
        errorStyle={{ color: Colors.Red[4] }}
      />
    </View>
  );
};

export default Input;
