import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7BB26'
  },

  scroll:{
    flex: 1,
    alignItems:'center',
    paddingTop: '40%'
  },

  header: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    margin:10
  },

  headerLogoBody: {
    height:156,
    width:110,
    aspectRatio:0.9,

  },
  
  headerLogoText: {
    height:105,
    width:118,
    aspectRatio:1,
  },
  
  headerTitle:{
    fontWeight: 'bold',
    fontSize: 18,
  },

  body:{
    marginTop:20
  },
  
  bodyTitle: {
    color: '#333',
    marginBottom: 5,
    width: '100%',
    fontSize: 13
  },

  bodyInput: {
    color: 'black',
    width: 250,
    borderBottomWidth: 2,
    padding: 5,
    borderColor: '#555',
    borderRadius: 4,
    fontSize: 16,
    backgroundColor:'white'
  },
  bodyText:{
    color:'#F7BB26',
    textAlign: 'center',
  },
  bodyButtons: {
    flex:1,
    marginTop:40,
    justifyContent:'center',
  },
  bodyButtonRegister: {
    backgroundColor: "#343434",
    padding: 13,
    borderRadius: 4,
    paddingHorizontal: 30,

  },
  bodyButtonLogin: {
    backgroundColor: "#343434",
    marginTop:10,
    padding: 11,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: 'space-evenly',
    flexDirection: "row"
  },
  bodyTextButton:{
    color:'#F7BB26',
    justifyContent: 'center', 
    fontSize:14 
  },
});
  
export default styles