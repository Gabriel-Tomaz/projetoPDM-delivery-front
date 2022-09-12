import Colors from "../../styles/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: Colors.Neutral.white,
  },

  cardProd: {
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.Neutral.white,
    margin: 12,
    borderColor: Colors.Gray[2],
    marginTop: 12,
    padding: 12,
    shadowColor: "blue",
    shadowOffset: { width: -4, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },

  text: {
    width: "100%",
    justifyContent: "flex-start",
  },
  total: {
    color: Colors.DeepYellow[6],
    fontSize: 14,
  },
});

export default styles;
