import stylesVar from "../../styles/stylesVar"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...stylesVar.backgroundYellow
    }
})
export default styles
