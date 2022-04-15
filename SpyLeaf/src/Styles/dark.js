import { StyleSheet } from "react-native";

const dark = StyleSheet.create({
    back: { backgroundColor: "#343434"},

    toolbar: {
        backgroundColor: "#343434",
    },

    icon: {
        color: "#C5C5C5",
        fontSize: 30,
    },
    iconOpen: {
        color: "#C5C5C5",
        fontSize: 30,
    },

    iconTable:{
        color:"#343434",
        position: "absolute",
        fontSize:25,
    },

    TitlePrimary: {
        margin: 9,
        fontWeight: "bold",
        fontSize: 23,
        color: "#C5C5C5",
        textAlign: "center",
        textDecorationLine: "underline",
    },

    TitleSecondary: {
        fontWeight: 'bold',
        fontSize: 14,
        color: "#C5C5C5",

    },

    Inputs: {
        fontWeight: 'bold',
        fontSize: 14,
        color: "#BEBEBE",

    },
});

export default dark 