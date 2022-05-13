import { StyleSheet } from "react-native"
import stylesVar from "../../styles/stylesVar"

const stylesArea = StyleSheet.create({
container: {
  flex: 1, 
  ...stylesVar.background
},
body: {
  flex:1,
  margin:10,
  marginTop:30,
  alignItems:"center",
  ...stylesVar.boxPrimary
},
bodyRow: {
  flex:0.1,
  flexDirection:"row",
  margin:15,
  marginTop:12,  
},
bodyRowSelect: {
  flex:0.5,
  flexDirection:"row",  
  marginTop:10,  
},
bodyTitle: {
  ...stylesVar.titleSecondary,
  flex:0.5
},
bodyTitleSelect: {
  flex:1,
  marginRight: 8,
  ...stylesVar.inputText
},

bodyColumn: {
  flex:0.5, 
  marginTop:12,
},
bodyLine: {
  borderBottomWidth:1, 
},
bodyRowMap: {
  flex:0.3,
  margin: 15,
  alignItems: 'center',
},
bodyMap: {
  width:"90%",
  height:180,
  flex:1,
  borderWidth:1,
  marginTop:10,   

  ...stylesVar.boxSecondary
}


})

export {stylesArea }