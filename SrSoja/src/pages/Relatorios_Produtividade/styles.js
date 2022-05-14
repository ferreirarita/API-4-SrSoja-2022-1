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
  bodyColumn: {
    flex: 0.4,
  },
  bodyRowSelect: {
    flex: 1,
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 18,
  },
  bodyResults: {
    flex: 1,
    padding: 8,
    margin: 5,
    borderWidth: 1,
  },
  bodyResultsRow: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    alignItems: "flex-end",
    justifyContent: "space-around",
    margin: 5,
    marginTop: 13,
    borderBottomWidth: 1,
  },
  bodyResultsColumn: {
    flex: 0.4,
    alignItems: "center",
  },
  bodyResultsTextPrimary: {
    ...stylesVar.titleSecondary,
    textAlign: "center",
    fontSize: 13,
  },
  bodyResultsTextSecondary: {
    ...stylesVar.inputText,
  },
});

const stylesPrevisao = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  body: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  bodyTitle: {
    ...stylesVar.titleSecondary,
    fontSize: 18,
    textAlign: "center",
    margin: 3,
  },
  bodyTitlePrimary: {
    flex: 1,
    textAlign: "center",
    ...stylesVar.titleSecondary,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 3,
    ...stylesVar.background,
  },
  bodyTitleSecondary: {
    flex: 1,
    marginTop: 10,
    ...stylesVar.titleSecondary,
  },
  bodyBox: {
    flex: 1,
    margin: 5,
    ...stylesVar.boxPrimary,
  },
  bodyRow: {
    flex: 0.3,
    margin: 12,
  },
  bodyInput: {
    flex: 1,
    padding: 5,
    ...stylesVar.inputText,
    borderBottomWidth: 1,
  },
  footer: {
    margin: 10,
    ...stylesVar.boxPrimary,
    borderWidth: 1,
  },
  footerTitle: {
    textAlign: "center",
    ...stylesVar.titleSecondary,
    fontSize: 18,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "flex-end",
    justifyContent: "space-around",
    margin: 10,
    marginTop: 3,
    borderBottomWidth: 1,
  },
  footerColumn: {
    alignItems: "center",
  },
  footerTextPrimary: {
    ...stylesVar.titleSecondary,
    textAlign: "center",
    fontSize: 13,
  },
  footerTextSecondary: {
    ...stylesVar.inputText,
    fontSize: 14,
  },
});

const stylesCalculo = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  bodyTitle: {
    ...stylesVar.titleSecondary,
    fontSize: 18,
    textAlign: "center",
    margin: 3,
  },
  body: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  bodyTitleSecondary: {
    flex: 1,
    margin: 10,
    ...stylesVar.titleSecondary,
    textAlign: "center",
  },
  bodyBox: {
    flex: 1,
    margin: 5,
    ...stylesVar.boxPrimary,
  },
  bodyRow: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 1,
  },
  bodyInput: {
    flex: 1,
    ...stylesVar.inputText,
    textAlign: "center",
    borderWidth: 1,
  },
  footer: {
    margin: 10,
    ...stylesVar.boxPrimary,
    borderWidth: 1,
  },
  footerTitle: {
    textAlign: "center",
    ...stylesVar.titleSecondary,
    fontSize: 18,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "flex-end",
    justifyContent: "space-around",
    margin: 10,
    marginTop: 3,
    borderBottomWidth: 1,
  },
  footerColumn: {
    alignItems: "center",
  },
  footerTextPrimary: {
    ...stylesVar.titleSecondary,
    textAlign: "center",
    fontSize: 13,
  },
  footerTextSecondary: {
    ...stylesVar.inputText,
    fontSize: 14,
  },
});

export { stylesArea, stylesPrevisao, stylesCalculo };