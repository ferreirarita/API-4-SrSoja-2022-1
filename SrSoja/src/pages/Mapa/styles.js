import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  footer: {
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  footerRow: {
    position: "absolute",
    flexDirection: "row",
    padding: 30,
  },
  footerColumn: {
    margin: 25,
  },
});
export default styles;