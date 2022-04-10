import { StyleSheet } from "react-native"
import stylesVar from "../../Components/StyleSheetVars"

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
    }
})

export default style