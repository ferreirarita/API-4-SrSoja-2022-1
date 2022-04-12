import { StyleSheet } from "react-native";

const light = StyleSheet.create({
    backgroundColor: '#F1F1F1',

    toolbar:{
        backgroundColor: '#EE8600'
    },

    underline:{
        backgroundColor: '#EE8600'
    },
   
    card: {
        CardHeader:{
            width: 330,
            height: 70,
            backgroundColor: '#DCDCDC',
            top: 30,
        }
    },
    
    table:{
        TablePrimary: {
            alignItems: 'center',
            width: '90%',
            height: 440,
            backgroundColor: '#DCDCDC',
          },
      
        TableSecondary: {
           width: '88%',
           height: '90%',
           backgroundColor: "#C0C0C0",
          },
    },

    icon: {
        Color: '#343434',
    },

    text: {
        TitlePrimary:{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000000',
            textAlign: 'center'
        },

        TitleSecondary:{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: 10,
            color: '#000000',
        },

        Inputs:{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: 10,
            color: '#444444',
        }
    }

});

export default light