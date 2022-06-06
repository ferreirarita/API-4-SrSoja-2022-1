import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({

  container: {
    flex:1,
    ...stylesVar.background,
  },
  header: {
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute"
  },
  headerTitle:{
    ...stylesVar.titleSecondary,
    fontSize:18,
    textAlign: "center",
    padding:5,
    borderRadius:5,
    ...stylesVar.backgroundYellow
  },

  
  footer:{
    flex:1,
    position:'absolute',
    alignSelf: "center",
    bottom:0,
  },
  footerRow: {
    flexDirection: "row",
    alignSelf: "center",
    position:'relative',
  },

  footerRowCenterButtons: {
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
  },
  footerButtonCancel:{
    marginHorizontal:22,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerButtonCheck:{
    marginHorizontal:22,
    flexDirection: "row",
    justifyContent: "center",
  },
  
});
export default styles;