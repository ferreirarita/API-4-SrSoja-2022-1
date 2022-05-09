import { StyleSheet } from "react-native"
import stylesVar from "../../styles/stylesVar"

const style = StyleSheet.create({
    container: {
        backgroundColor: stylesVar.background.backgroundColor,
        borderRadius: 5,
        padding: 5
    },
    textT: stylesVar.titlePrimary,
    textS: stylesVar.titleSecondary,
    row: {
        alignContent: 'center',
        flexDirection: 'row'
    },
    button: {
        marginHorizontal: 10
    }
})

export default style