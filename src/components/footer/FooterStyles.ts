import {StyleSheet} from 'react-native';
import { dimensions, padding, margin } from '../../styles/base';

export const styles = StyleSheet.create({
    footerContainer : {
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        paddingTop: padding.md,
        paddingBottom: padding.sm,
        flexDirection: "column",
        backgroundColor: "rgb(32, 35, 41)",
        height: "auto",
        marginTop: margin.sm,
        width: dimensions.fullWidth
    },
    footerContent : {
        alignSelf: "center",
        paddingTop:  padding.md,
        color: "#f5f5dc",
    }
});
