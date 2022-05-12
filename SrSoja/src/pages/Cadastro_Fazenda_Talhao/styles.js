import { StyleSheet } from "react-native"
import stylesVar from "../../styles/stylesVar"

const cardHeader = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
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
    ...stylesVar.titleSecondary,
  },
  bodyInputBox:{
    borderWidth: 0.5,
    borderColor:'#666666', alignItems: 'center',
    padding: 8,
    margin:1,
    width: '75%',
    borderRadius:3,
    backgroundColor:'#f1f1f1'
  }
});

export default cardHeader