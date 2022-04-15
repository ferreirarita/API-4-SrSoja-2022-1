import { StyleSheet } from "react-native"
import stylesVar from "../StyleSheetVars"

const style = StyleSheet.create({
    tiny: {
        width: 50,
        height: 50
    },
    medium: {
        width: 100,
        height: 100
    },
    great: {
        width: 150,
        height: 150
    },
    textTiny: {
        fontWeight: 'bold',
        fontSize: stylesVar.fontLow,
        flexWrap: 'nowrap',
        height: 'auto',
        alignContent: 'center',
        maxWidth: 70,
        textAlign: 'center',
        marginTop: 2
    }
})

export default style