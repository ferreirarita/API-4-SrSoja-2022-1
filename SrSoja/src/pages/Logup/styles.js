import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

export default StyleSheet.create({
    container: {
        flex: 1,
        ...stylesVar.backgroundYellow
    },

    header: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        margin:10
    },

    headerLogoBody: {
        height:156,
        width:110,
        aspectRatio:0.9,

    },
    
    headerLogoText: {
        height:105,
        width:118,
        aspectRatio:1,
    },
    
    headerTitle:{
        fontWeight: 'bold',
        fontSize: 18,
    },

    body: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    title:{
        alignSelf: 'center',
        marginBottom: 20,
        ...stylesVar.titlePrimary
    },

    titleInput:{
        fontSize: 18,
        marginBottom: 2,
        marginLeft: 2,
    },

    viewInput: {
        width: 250,
    },

    viewButton: {
        marginTop: 10,
        marginBottom: 20
    },
    
    input: {
        fontSize: 15,
        paddingHorizontal: 5,
        paddingVertical: 4,
        marginBottom: 8,
        borderWidth: 0.7,
        borderRadius: 5,
        borderColor: '#000',
        ...stylesVar.background
    },

    button: {
        borderRadius: 4,
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center',
        ...stylesVar.weather,
    },

    textButton: {
        paddingVertical: 2,
        ...stylesVar.titleSecondary,
        ...stylesVar.iconAdd,
        fontWeight: 'normal',
        fontSize: 18
    }
})