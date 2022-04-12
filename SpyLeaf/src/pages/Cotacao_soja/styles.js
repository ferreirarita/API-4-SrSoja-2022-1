import { StyleSheet } from "react-native";
import light from "../../styles/light";

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#F1F1F1',
    },
    titleHeader: light.TitlePrimary,
    cardHeader: light.CardHeader,
    primaryTitle: light.TitlePrimary,
    secondaryTitle: light.TitleSecondary,
    Body: {
        widht: '95%',
        height: '90%',
        backgroundColor: '#F1F1F1',
    },
    CardPrimary: light.TablePrimary,
    CardSecondary: light.TableSecondary,

});

export default styles