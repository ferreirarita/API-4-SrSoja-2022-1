import { StyleSheet } from 'react-native'
import stylesVar from '../../styles/stylesVar'

const CustomTopTab = StyleSheet.create({
    tabBarIndicatorStyle: {
        height: 2.5,
        ...stylesVar.toolbar
      }
})
export default CustomTopTab