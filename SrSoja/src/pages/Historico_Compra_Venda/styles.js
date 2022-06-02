import { StyleSheet } from "react-native"
import stylesVar from "../../styles/stylesVar"

const styles = StyleSheet.create({
    title: {
        // paddingTop: '25%',
        // ...stylesVar.titlePrimary
    },

    table: {
        flexDirection: 'column',
        margin: 10,
        marginBottom: '30%',
        borderRadius: 5,
        ...stylesVar.boxPrimary
    },

    button: {
        // shadowColor: 'rgba(0,0,0, .4)',
        // shadowOffset: { height: 1, width: 1 },
        // shadowOpacity: 1,
        // shadowRadius: 1,
        elevation: 2,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0
    },

    buttonRight: {
        // shadowColor: 'rgba(0,0,0, .4)',
        // shadowOffset: { height: 1, width: 1 },
        // shadowOpacity: 1,
        // shadowRadius: 1,
        elevation: 2,
        position: 'absolute',
        right: '10%',
        bottom: 0
    },

    buttonLeft: {
        // shadowColor: 'rgba(0,0,0, .4)',
        // shadowOffset: { height: 1, width: 1 },
        // shadowOpacity: 1,
        // shadowRadius: 1,
        elevation: 2,
        position: 'absolute',
        left: '10%',
        bottom: 0
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
        borderRadius: 5,
    },

    subItem: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },

    groupSubItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 5,
        paddingTop: 10
    },

    groupSubName: {
        ...stylesVar.titleSecondary,
        fontWeight: 'normal',
        margin: 1,
        marginRight: 5,
        fontSize: 23,
    },

    itemName: {
        ...stylesVar.titleSecondary,
        fontSize: 23,
    },

    inputItemName: {
        ...stylesVar.background,
        borderColor: '#000',
        borderWidth: 0.7,
        borderRadius: 5,
        paddingHorizontal: 5,
        margin: 1,
        fontSize: 23,
        // width: 250,
        maxWidth: 250
    },

    headerTag: {
        ...stylesVar.titlePrimary,
        textAlign: 'auto',
        fontSize: 23,
        paddingHorizontal: 2,
        marginRight: 5,
        borderRightWidth: 5,
        borderTopRightRadius: 5,
        borderColor: '#000',
    },
    
    subName: {
        ...stylesVar.inputText,
        paddingHorizontal: 20
    }

})
export default styles