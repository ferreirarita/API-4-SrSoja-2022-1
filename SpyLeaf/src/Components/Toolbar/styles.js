import { StyleSheet } from "react-native";
import light from '../../styles/light';


const styles = StyleSheet.create({
    Header: {
        top: 0,
        width: '100%',
        height: 40,
        flexDirection: 'row',
        color: light.toolbarColor,
        textAlign: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3333',
        letterSpacing: 1
    }
});

export default styles
