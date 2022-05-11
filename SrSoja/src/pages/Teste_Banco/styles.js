import { StyleSheet } from "react-native"
import stylesVar from "../../styles/stylesVar"

const style = StyleSheet.create({
    container: {
        backgroundColor: stylesVar.background.backgroundColor,
        borderRadius: 5,
        padding: 5
    },
    textT: stylesVar.titlePrimary,
    row: {
        alignContent: 'center',
        flexDirection: 'row',
    },
    colunm: {
        padding: 20,
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        color: '#000',
        backgroundColor: '#ddd'
    },
    button: {
        marginHorizontal: 10
    }
})

export default style