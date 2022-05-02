import { StyleSheet } from "react-native"
import stylesVar from "../../components/StyleSheetVars"

const style = StyleSheet.create({
    container: {
        backgroundColor: stylesVar.color.gray1,
        borderRadius: 5,
        padding: 5
    },
    text: {
        fontFamily: stylesVar.fontFamily,
        color: stylesVar.color.textPrimary,
        fontSize: stylesVar.fontMedium
    },
    placeHolder: {
        fontFamily: stylesVar.fontFamily,
        color: stylesVar.color.textSecondary,
        fontSize: stylesVar.fontMedium
    },
    row: {
        alignContent: 'center',
        flexDirection: 'row'
    },
    button: {
        marginHorizontal: 10
    }
})

export default style