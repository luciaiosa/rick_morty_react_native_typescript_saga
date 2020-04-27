import { StyleSheet } from "react-native";
import { margin } from '../../styles/base';

export const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250, 
        height: 150,
        borderRadius: 4,
        marginBottom: margin.sm
    },
    name: {
        fontWeight: 'bold'
    }
});