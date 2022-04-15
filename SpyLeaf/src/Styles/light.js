import { StyleSheet } from "react-native";

const light = StyleSheet.create({
    back: { backgroundColor: "#F1F1F1"},

    toolbar: {
        backgroundColor: "#EE8600",
    },

    icon: {
        color: "#343434",
        fontSize: 30,
    },
    iconOpen: {
        color: "#EE8600",
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
        color: "#000000",
        textAlign: "center",
        textDecorationLine: "underline",
        textDecorationColor: "#EE8600",

    },

    TitleSecondary: {
        fontWeight: 'bold',
        fontSize: 14,
        color: "#000000",

    },

    Inputs: {
        fontWeight: 'bold',
        fontSize: 14,
        color: "#666666",

    },
});

export default light 