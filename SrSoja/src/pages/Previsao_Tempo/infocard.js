const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
    alignItems: 'center',
  
  },
  temperature:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:10,
  },
  temperatureText:{
    color:darkTheme ?'#e0e0e0' : 'black',
    fontSize: 50, 
  },
  refreshButton:{
  position:'absolute',
  margin:30,
  alignSelf:'flex-start',
  },
  
  cardView:{
    color:darkTheme ? 'black': 'white',
    margin:10,
    flexDirection: 'row',
    alignItems:'center',
  },
  
  info:{
    alignItems:'center',
    backgroundColor: darkTheme ? '#393e54' : '#8f8f8f',
    borderRadius:20,
    width:350,
    height:230,
  },
  
  infoText:{
    color: darkTheme ? '#e0e0e0' : 'white',
    margin:15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  infoCards:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  
  themeButton:{
    margin:10,
    marginLeft:300,
  
    justifyContent:'center',
    width:50,
    height:50,
    borderRadius:25,
  },
  
  squareButton:{
    backgroundColor: darkTheme ? '#f2f2f2' : '#8f8f8f',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 20,
    width: 50,
    height:25,
  },
  
  circleButton:{
    backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
    alignSelf: darkTheme ? 'flex-end' : 'flex-start',
    margin:5,
    width: 20,
    height:20,
    borderRadius: 50,
  }
  
  });