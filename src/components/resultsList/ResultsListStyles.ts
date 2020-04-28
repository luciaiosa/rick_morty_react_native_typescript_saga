import { StyleSheet } from "react-native";
import { margin, dimensions, fonts, padding, colors } from '../../styles/base';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        overflow: "visible",
        flexDirection: "column",
        minHeight: dimensions.fullHeight * 0.4
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: colors.secondary,
        borderStyle: "solid",
        borderWidth: 1,
    },
    title: {
        fontSize: fonts.md,
        fontWeight: 'bold',
        marginLeft: margin.md,
        marginBottom: margin.lg
    }
})