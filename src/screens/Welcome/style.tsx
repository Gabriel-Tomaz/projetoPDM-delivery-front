import { StyleSheet } from "react-native";

import Colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.Neutral.white,
    paddingHorizontal: 18,
    alignContent: 'center'
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    marginTop: 12,
    lineHeight: 32,
  },
  card: {
    height: 220,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    justifyContent: "center",
    marginTop: -250,
  },

  escopo: {
    justifyContent: "center",
  },
  escopoText: {
    fontSize: 20,
    textAlign: "center",
    margin: 15,
    color: "red",
  },

  cardButton: {
    margin: 20,
    marginBottom: 2,
  },
});

export default styles;
