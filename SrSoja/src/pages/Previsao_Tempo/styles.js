import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      alignItems: 'center',
    },
    refreshButton: {
      position: 'absolute',
      alignSelf: 'flex-start', 
      margin: 30,
    },   
    temperatureView: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText: {
      color: 'black',
      fontSize: 50,
    },
    cardsView:{
      color:  'white',
      margin: 10,
      alignItems: 'center',
      flexDirection: 'row',
    },
    localizationText:{
      color:   'black',
    },  
    info: {
      alignItems: 'center',
      borderRadius: 20,
      width: 350,
      height: 230,
      backgroundColor:'#8F8F8F',
      
    },
    infoText: {
      color: 'white',
      margin: 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
    addtionalInfo:{
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    container:{
        flex: 1,
        backgroundColor: '#5EC7BA',
        alingnItems: 'center'
    },
    
    label:{
        textAlign:'center'
    },
    
    
    texto:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#',
        borderWidth: 0.5,
        borderColor: '#000', 
        height: 40,
        borderRadius: 5, 
        margin: 10 
    }
     
  });





export default styles