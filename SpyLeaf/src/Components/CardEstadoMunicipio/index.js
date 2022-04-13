import { View, Text } from "react-native";
import { CardEstadoMunicipio as CardHeader, firstRow } from "./styles";
//import Select from "../SelectLocation";
import light from "../../styles/light";

const CardEstadoMunicipio = () => {
  return (
    <View style={{alignItems: "center"}}>
      <CardHeader>
        <Text style={light.TitleSecondary}>Estado</Text>
        <firstRow >
          <Text style={light.Inputs}>exemplo</Text>
        </firstRow>
      </CardHeader>
    </View>
  );
};

export default CardEstadoMunicipio;