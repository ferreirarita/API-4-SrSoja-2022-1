import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const stylesArea = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  body: {
    flex: 1,
    margin: 10,
    marginTop: 15,
    ...stylesVar.boxPrimary,
  },
  bodyRow: {
    flex: 0.1,
    flexDirection: "row",
    margin: 12,
    marginTop: 13,
    borderBottomWidth: 1,
  },
  bodyRowSelect: {
    flex: 1,
    marginTop:4,
    flexDirection: "row",
    alignItems: "center",
  },
  bodyColumn: {
    flex: 0.4,
  },
  bodyTitle: {
    ...stylesVar.titleSecondary,
  },
  bodyTitleSelect: {
    ...stylesVar.inputText,
  },
  bodyMapRow: {
    flex: 1,
    alignItems: "center",
  },
  bodyMap: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 175,
    borderWidth: 1,
    ...stylesVar.boxSecondary,
  },
  bodyResultsTitle: {
    marginTop: 15,
    textAlign: "center",
    ...stylesVar.titleSecondary,
  },
  bodyResults: {
    flex: 1,
    padding: 8,
    margin: 5,
    borderWidth: 1,
  },
  bodyResultsTextPrimary: {
    ...stylesVar.titleSecondary,
    textAlign: "center",
    fontSize: 13,
  },
  bodyResultsTextSecondary: {
    ...stylesVar.inputText,
  },
  bodyResultsRow: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    alignItems: "flex-end",
    justifyContent: "space-around",
    margin: 12,
    marginTop: 13,
    borderBottomWidth: 1,
  },
  bodyResultsColumn: {
    alignItems: "center",
    flex: 0.4,
  },

})

const stylesPrevisao = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  body: {
    flex: 1,
    margin: 10,
    marginTop: 15,
    ...stylesVar.boxPrimary,
  },
  bodyTitlePrimary: {
    flex:1,
    ...stylesVar.titleSecondary,
    fontSize: 17
  },
  bodyTitleSecondary: {
    flex:1,
    ...stylesVar.titleSecondary,
  },
  bodyRow: {
    flex: 0.2,
    margin: 12,
    marginTop: 13,
    borderBottomWidth: 1,
  },

})

const stylesCalculo = StyleSheet.create({
})

export { stylesArea, stylesPrevisao, stylesCalculo }