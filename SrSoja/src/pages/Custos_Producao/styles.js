import { StyleSheet} from "react-native";

import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  headerTitle: {
    marginTop: 10,
    ...stylesVar.titlePrimary,
  },
  body: {
    flex: 1,
    margin: 10,
    marginTop: 10,
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
  bodyTitleSelect: {
    ...stylesVar.inputText,
  },
  bodyColumn: {
    flex: 0.4,
  },
  bodyTitle: {
    ...stylesVar.titleSecondary,
  },
  bodyRowDate: {
    flex: 0.1,
    flexDirection: "row",
    margin: 12,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  bodyColumnDate: {
    paddingRight:14,
  },
  bodyDatePicker:{
    ...stylesVar.inputText
  },
  bodyTable: {
    flex: 0.1,
    margin: 5,
    marginTop: 10,
  },
  bodyTableHeader: {
    justifyContent: "space-between",
    flex: 0.1,
    flexDirection: "row",
  },
  bodyTableTitle: {
    ...stylesVar.titleSecondary,
  },
  bodyTableRow: {
    flex: 1,
    flexDirection: "row",
    padding:10,
    alignItems:'center',
    borderWidth: 1,
  },
  bodyTableColumn: {
    flex: 1,
  },
  bodyTableColumnGraphic: {
    flex: 0.2,
  },
  bodyTableRowText: {
    flex:1,
    textAlign: "center",
    ...stylesVar.inputText,
  },

})

export default styles