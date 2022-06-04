import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    margin:40,
    ...stylesVar.background,
  },
  header: {
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute"
  },
  headerTitle:{
    ...stylesVar.titleSecondary,
    fontSize:18,
    textAlign: "center",
    padding:5,
    borderRadius:5,
    ...stylesVar.backgroundYellow
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