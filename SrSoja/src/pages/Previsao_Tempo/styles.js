import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  refreshButton: {
    alignSelf: 'flex-start', 
    margin: 30,
  },  
  body: {
    flex: 1,
    marginTop: 30,
    margin: 10,
    padding: 6,
    ...stylesVar.boxPrimary,
  },
  bodyRow: {
    flex: 1,
    flexDirection: 'row',
  },
  bodyTitle: {
    letterSpacing: 1,
    ...stylesVar.titlePrimary,
  },
  bodyButton: {
    flex: 1,
    backgroundColor: "#D0D0D0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 4,
  },
  bodyText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
});
export default styles;