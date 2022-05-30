import { StyleSheet } from "react-native"
import stylesVar from "../../styles/stylesVar"

const styles = StyleSheet.create({
    title: {
        paddingTop: '25%',
        ...stylesVar.titlePrimary
    },

    table: {
        flexDirection: 'column',
        margin: 10,
        borderRadius: 5,
        ...stylesVar.boxPrimary
    },

    item: {
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        ...stylesVar.boxSecondary,
        margin: 10
    },

    headerItem: {
        flexDirection: 'row',
        paddingHorizontal: 2,
        borderBottomColor: '#000',
        borderBottomWidth: 5,
        borderRadius: 5
    },

    subItem: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },

    itemName: {
        ...stylesVar.titleSecondary,
        fontSize: 23,
    },

    headerTag: {
        ...stylesVar.titlePrimary,
        textAlign: 'auto',
        fontSize: 23,
        paddingHorizontal: 2,
        marginRight: 5,
        borderRightWidth: 5,
        borderTopRightRadius: 5,
        borderColor: '#000'
    },
    
    subName: {
        ...stylesVar.inputText,
        paddingHorizontal: 20
    }

})
export default styles