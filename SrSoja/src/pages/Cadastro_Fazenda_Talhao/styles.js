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
  }
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
  }
})

const stylesListagem = StyleSheet.create({
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
  bodyTitle: {
    ...stylesVar.titleSecondary,
  },
  bodyList:{
    flex:1,
    margin: 15,
    marginTop: 12,
  },
  bodyRow: {
    flex:0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodySubRow: {
    flex:0.3,
    flexDirection: 'row',
    alignItems: 'center',
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
  }

})

export { stylesFazenda, stylesTalhao, stylesListagem  }