/* import { View, Text } from 'react-native';
import { TablePrimary, TableSecondary, TableHeader } from './styles';
import { Button } from "react-native-paper";
import light from '../../styles/light';

const TableCard = () => {
  return(
    <View style={{alignItems: 'center'}}>
        <TablePrimary>
            <TableHeader>            
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center', left: 10}}>
                        <Text style={light.TitleSecondary}>Preço por 60KG</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.TitleSecondary}>Local</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.TitleSecondary}>Atualizado em</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.TitleSecondary}>Gráfico</Text>
                    </View>
                </View>
            </TableHeader>
        <TableSecondary>
                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={light.Inputs}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={light.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>



            </TableSecondary>
        </TablePrimary>  
    </View>
    );
};

export default TableCard; */