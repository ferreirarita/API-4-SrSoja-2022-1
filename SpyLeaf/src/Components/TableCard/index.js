import { View } from 'react-native';
import { TablePrimary, TableSecondary, TableHeader } from './styles';

const TableCard = () => {
  return(
    <View style={{alignItems: 'center'}}>
        <TablePrimary>
            <TableHeader />
            <TableSecondary/>
        </TablePrimary>  
    </View>
    );
};

export default TableCard;