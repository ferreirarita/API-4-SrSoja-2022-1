import { StyleSheet } from "react-native";
import stylesVar from "../../styles/stylesVar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...stylesVar.background,
  },

  header:{
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    ...stylesVar.boxPrimary,
  },

  headerColumn:{
    flex:1,
  },

  headerRow:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerButton:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    ...stylesVar.boxSecondary
  },
  headerText: {
    color: '#343434',
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: -1,
  },

  headerWeather: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    ...stylesVar.weather
  },
  
  headerWeatherText: {
    color: '#E9E9E9',
    fontWeight: "bold",
    fontSize: 18,
  },

  body: {
    flex: 1,
    marginTop: 30,
    margin: 10,
    padding: 6,
    ...stylesVar.boxPrimary,
  },
  bodyRow: {
    flex: 1,
    flexDirection: 'row',
  },
  bodyTitle: {
    letterSpacing: 1,
    ...stylesVar.titlePrimary,
  },
  bodyButton: {
    flex: 1,
    backgroundColor: "#D0D0D0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 4,
    elevation:3
  },
  bodyText: {
    marginTop:5,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  bodyRowDesabled:{
    flex: 1,
    flexDirection: 'row',
  },
  bodyButtonDesabled: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    margin: 4,
  },
  bodyTextDesabled: {
    marginTop:5,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E0E0E0"
  },
});
export default styles;