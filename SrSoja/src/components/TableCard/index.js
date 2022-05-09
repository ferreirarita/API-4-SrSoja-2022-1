import { View, Text } from 'react-native';
import { TablePrimary, TableSecondary, TableHeader } from './styles';
import { Button } from "react-native-paper";
import stylesVar from '../../styles/stylesVar';

const TableCard = () => {
  return(
    <View style={{alignItems: 'center'}}>
        <TablePrimary>
            <TableHeader>            
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center', left: 10}}>
                        <Text style={stylesVar.titleSecondary}>Preço por 60KG</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.titleSecondary}>Local</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.titleSecondary}>Atualizado em</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.titleSecondary}>Gráfico</Text>
                    </View>
                </View>
            </TableHeader>
        <TableSecondary>
                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1}}>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>120,50$</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>Araxá(MG)</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={stylesVar.inputText}>30/02/2022</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
                        <Button labelStyle={stylesVar.iconTable}icon="signal-cellular-3"></Button>
                    </View>
                </View>



            </TableSecondary>
        </TablePrimary>  
    </View>
    );
};

export default TableCard;