import { StyleSheet } from "react-native"
import stylesVar from "../../styles/stylesVar"

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

const stylesFazenda = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background
  },
  body: {
    flex: 0.7,
    margin: 10,
    marginTop: 30,
    ...stylesVar.boxPrimary,
    marginBottom: '25%'
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
  bodyTitleSearch: {
    ...stylesVar.titleSecondary,
    textAlign: 'center',
  },
  bodyButton: {
    flex:1,
    padding:0,
    paddingTop:7,
    alignItems:'center',
    borderRadius:4,
    borderWidth:1,
    marginTop:3,
    ...stylesVar.backgroundYellow
  },
  footer:{
    flex:1,
    position:'absolute',
    alignSelf: "center",
    bottom:0,
    right:15,
  },
  footerRow: {
    flexDirection: "row",
    alignSelf: "center",
    position:'relative',
  },
  footerButtonCenter: {
    alignSelf: "center",
   flexDirection: "row",
 },
 footerButtonRight: {
  alignSelf: "center",
},
  footerButtonCancel:{
    flexDirection: "row",
  },
  footerButtonCheck:{
    marginLeft:40,
    flexDirection: "row",
  },
  footerButtonNext:{
    paddingLeft:50
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
    marginBottom: '25%'
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
    flex:1,
    position:'absolute',
    alignSelf: "center",
    bottom:0,
  },
  footerRow: {
    flexDirection: "row",
    alignSelf: "center",
    position:'relative',
  },

  footerRowCenterButtons: {
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
  },
  footerButtonCancel:{
    marginHorizontal:22,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonCheck:{
    marginHorizontal:22,
    flexDirection: "row",
    justifyContent: "center",
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
    flex:1,
    position:'absolute',
    alignSelf: "center",
    bottom:0,
    right:15,
  },
  footerRow: {
    flexDirection: "row",
    alignSelf: "center",
    position:'relative',
  },
  footerButtonCenter: {
    alignSelf: "center",
   flexDirection: "row",
 },
 footerButtonRight: {
  alignSelf: "center",
},
  footerButtonCancel:{
    flexDirection: "row",
  },
  footerButtonCheck:{
    marginLeft:40,
    flexDirection: "row",
  },
  footerButtonAdd:{
    paddingLeft:50
  },

})

export { styles, stylesFazenda, stylesTalhao, stylesListagem }
/* 
 const Listagem = ({navigation, route}) => {
const [talhao,setTalhao]=useState({})
  let talhaoApelido = talhao.apelido
  let talhaoSaude = talhao.saude
  let talhaoInfo = route.params
  useEffect(() => {
    if(talhaoInfo === undefined || talhaoInfo=== ''){
    }else{
      setTalhao(talhaoInfo)
    }
    },[talhaoInfo]
)

const dados = [
  {key: 'talhaoApelido'}
]
console.log(talhao)
  return (
      <Flatlist
      keyExtractor={(item)=> item.key}
      data={dados}
      renderItem={({item})=> <Text>{item.key}</Text>}
      />

  );
}; 
 <View style={stylesListagem.container}>
      <Text style={{fontSize:16, color:'black'}}></Text>

      <ScrollView>
       
      </ScrollView>

      <View style={stylesListagem.footer}>
        <View style={stylesListagem.footerRow}>
          <View style={stylesListagem.footerButtonCenter}>
            <View style={stylesListagem.footerButtonCancel}>
              <CancelButton
                size={48}
                onPress={() => {

                }}
              />
            </View>
            <View style={stylesListagem.footerButtonCheck}>
              <CheckButton size={48} />
            </View>
          </View>
          <View style={stylesListagem.footerButtonRight}>
            <View style={stylesListagem.footerButtonAdd}>
              <AddButton
                size={48}
                onPress={() => {
                  navigation.navigate("Talhão");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>    
*/
