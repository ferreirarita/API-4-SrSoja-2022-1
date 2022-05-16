import { StyleSheet } from "react-native"
import stylesVar from "../../styles/stylesVar"

const stylesFazenda = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  body: {
    flex: 0.7,
    margin: 10,
    marginTop: 30,
    ...stylesVar.boxPrimary,
  },
  bodyRow: {
    flex:0.3,
    flexDirection:'row',
    margin: 15,
    marginTop: 12,
  },
  bodyRowCEP: {
    flex:0.3,
    flexDirection:'row',
  },
  bodyColumn: {
    flex: 1,
    margin: 15,
    marginTop: 12,
  },
  bodyTitle: {
    ...stylesVar.titleSecondary,
  },
  bodyInputBox:{
    flex:1,
    ...stylesVar.inputText,
    ...stylesVar.inputBox
  },
  bodyInputBoxEstado:{
    ...stylesVar.inputText,
    ...stylesVar.inputBox
  },
  bodyButtonCEP: {
    flex:1,
    padding:10,
    alignItems:'center',
    borderRadius:4,
    borderWidth:1,
    marginTop:3,
    ...stylesVar.backgroundYellow
  },
  footer:{
    margin:5,
    justifyContent:'center'
  },
  footerButtonCancel:{
    marginLeft:30,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonCheck:{
    marginLeft:30,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonNext:{
   marginRight:30,
   flexDirection: "row",
   justifyContent: "center",
  },
  footerRow: {
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
 },

});

const stylesTalhao = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  body: {
    flex: 0.7,
    margin: 10,
    marginTop: 30,
    ...stylesVar.boxPrimary,
  },
  bodyRow: {
    flex:0.3,
    margin: 15,
    marginTop: 12,
  },
  bodyTitle: {
    ...stylesVar.titleSecondary,
  },
  bodyInputBox:{
    flex:1,
    ...stylesVar.inputText,
    ...stylesVar.inputBox
  },
  bodyTextMap: {
    ...stylesVar.titleSecondary,
  },
  bodyRowMap: {
    flex:0.3,
    margin: 15,
    alignItems: 'center',
  },
  bodyMap:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 175,
    borderWidth:1,
    ...stylesVar.boxSecondary  
  },
  bodyLine:{
    borderBottomWidth:1,
  },

  footer:{
    margin:5,
    justifyContent:'center'
  },
  footerButtonCancel:{
    marginLeft:30,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonCheck:{
    marginLeft:30,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonNext:{
    marginRight:30,
    flexDirection: "row",
    justifyContent: "center",
   },
  footerRow: {
    flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
 },

  
})

const stylesListagem = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },
  body: {
    flex: 0.7,
    margin: 10,
    marginTop: 5,
    ...stylesVar.boxPrimary,
    borderWidth:1,
    padding:5
  },
  bodyTitle: {
    ...stylesVar.titleSecondary,
  },
  bodyList:{
    flex:1,
    margin: 15,
    padding:5,
  },
  bodyRow: {
    flex:0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyButtons: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodySubRow: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end'
  },
  bodyRowBox:{
    flex:1,
    ...stylesVar.inputText,
    ...stylesVar.inputBox
  },
  bodyIcon:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight:10
  },

  footer:{
    margin:5,
    justifyContent:'center'
  },
  footerButtonCancel:{
    marginLeft:30,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonCheck:{
    marginLeft:30,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonAdd:{
    marginRight:30,
    flexDirection: "row",
    justifyContent: "center",
   },
  footerRow: {
    flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
 },

})

export { stylesFazenda, stylesTalhao, stylesListagem  }