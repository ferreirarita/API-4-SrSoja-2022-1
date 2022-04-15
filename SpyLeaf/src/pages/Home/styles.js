import {StyleSheet} from 'react-native';

// layout Flexbox
const estilos = StyleSheet.create({
    corpo: {
    flex: 1,
    backgroundColor: '#FFF'  
  },
    topobarra: {
    flexDirection: "row",
    height: 100,
    padding: 0,
    marginTop: 0,
    backgroundColor: '#EE8600',
    marginTop: 0,
    height:'auto',
    width:'auto'
  },
  bloco:{   
    marginTop: 40,
    margin: 10,
    backgroundColor: '#D7D7D799',
    padding: 10,
  },
  titulo_ico: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  titulo: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: "bold"
  },
   button1: {
    flex: 1,
    backgroundColor: '#EE8600',
    alignItems: 'flex-start',
    padding: 10,
  },
  button2: {
    flex: 1,
    backgroundColor: '#EE8600',
    alignItems: 'flex-end',
    padding: 10,
  },
  imagem: {
    width: 25,
    height: 25,
  },
    imagem1: {
    width: 40,
    height: 40,
  },
  button3:{
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#D7D7D799',
    alignItems: 'center',
    padding: 15,
    marginTop: 6,
  }
});
export default estilos;