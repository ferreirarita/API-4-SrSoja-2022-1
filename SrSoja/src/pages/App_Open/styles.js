import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    ...stylesVar.backgroundYellow,
  },

  body: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding:10
  },

  logotype: {
    height: "46%",
    width: "100%",
  },

  footer: {
    alignItems: "center",
    marginBottom: 10
  },

  footerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;