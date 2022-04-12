import { StyleSheet } from "react-native";

const dark = StyleSheet.create({
    backgroundColor: '#343434',

    toolbar:{
        backgroundColor: '#343434'
    },
    
    underline:{
        backgroundColor: '#9A9A9A'
    },
    
    card: {
        CardHeader:{
            width: 330,
            height: 70,
            backgroundColor: '#535353',
            top: 30,
        }
    },
    
    table:{
        TablePrimary: {
            alignItems: 'center',
            width: '90%',
            height: 440,
            backgroundColor: '#535353',
          },
      
        TableSecondary: {
           width: '88%',
           height: '90%',
           backgroundColor: "#474747",
          },
    },
    
    icon: {
        Color: '#C5C5C5',
    },
    
    text: {
        TitlePrimary:{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#C5C5C5',
            textAlign: 'center'
        },
    
        TitleSecondary:{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: 10,
            color: '#C5C5C5',
        },
    
        Inputs:{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: 10,
            color: '#BEBEBE',
        }
    }
    
});

export default dark