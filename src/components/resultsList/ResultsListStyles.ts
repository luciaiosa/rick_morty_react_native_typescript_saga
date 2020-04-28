import { StyleSheet } from "react-native";
import { margin, dimensions, fonts, padding, colors } from '../../styles/base';

export const styles = StyleSheet.create({
    container: {
        marginBottom: margin.sm,
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        overflow: "hidden",
        flexDirection: "column",
        minHeight: dimensions.fullHeight * 0.7
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: padding.md,
        borderColor: colors.secondary,
        borderStyle: "solid",
        borderWidth: 1,
        margin: margin.sm,
        marginTop: margin.lg,
        height: dimensions.fullHeight * 0.3
    },
    title: {
        fontSize: fonts.md,
        fontWeight: 'bold',
        marginLeft: margin.md,
        marginTop: margin.md,
        marginBottom: margin.lg
    }
})