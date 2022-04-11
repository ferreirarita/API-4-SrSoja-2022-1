import { StyleSheet } from "react-native";
import light from "../../styles/light"

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
    },
    titleHeader:{
        fontFamily: light.fontFamily,
        color: light.primaryTextColor,
        fontSize: light.font.fTitlePrimary,
    },

    cardHeader: {
        width: 330,
        height: 70,
        backgroundColor: light.card.primaryColor,
        top: 30,
    },

    primaryTitle:{
        fontFamily: light.fontFamily,
        fontSize: light.font.fTitlePrimary,
        color: light.primaryTextColor,
    },

    secondaryTitle:{
        fontFamily: light.fontFamily,
        fontSize: light.font.fTitleSecondary,
        color: light.secondaryTextColor,
    },

});

export default styles