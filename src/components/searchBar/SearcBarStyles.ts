import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',  // is better to put alignSelf to the son, than alignItems to the father, because we can click on the entire input (width and height), not just the center!! 
        marginHorizontal: 15
    }
});