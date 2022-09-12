import { StyleSheet } from "react-native";

import Colors from "../../styles/colors";

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 8,
  },
  input: {
    backgroundColor: Colors.Neutral.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#212529",
    borderWidth: 1.5,
    borderRadius: 6,
    margin: 0
  },
  InputLable: {
    marginBottom: 8,
    fontWeight: "500",
    color: Colors.Gray[8],
  },
  disable: {
    borderBottomWidth: 0,
    marginBottom: 0,
    paddingHorizontal: 0,
    marginTop: 0,
    paddingVertical: 0,
    margin: 0,
    padding: 0
  },
});

export default styles;
