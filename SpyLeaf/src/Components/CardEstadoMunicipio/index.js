import { View, Text } from "react-native";
import { CardEstadoMunicipio as CardHeader } from "./styles";
//import Select from "../SelectEstadoMunicipio";
import light from "../../styles/light";

const CardEstadoMunicipio = () => {
  return (
    <View style={{alignItems: "center"}}>
      <CardHeader>
        <View style={{flex: 1,flexDirection: "row"}}> 
          <View style={{flex: 1, flexDirection: "row"}}> 
            <Text style={light.TitleSecondary}>Estado </Text>
            <Text style={light.Inputs}>Selecione</Text>
          </View>
          <View style={{flex: 1, flexDirection: "row"}}> 
            <Text style={light.TitleSecondary}>Município </Text>
            <Text style={light.Inputs}>Selecione</Text>
          </View>
        </View>
    
        <View style={{flex: 1, flexDirection: "row",marginTop:10}}> 
          <View style={{flex: 1, flexDirection: "row"}}> 
            <Text style={light.TitleSecondary}>Data</Text>
          </View>
        </View>
      </CardHeader>
    </View>
  );
};

export default CardEstadoMunicipio;