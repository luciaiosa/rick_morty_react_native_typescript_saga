import { StyleSheet } from "react-native";
import { margin, dimensions, fonts } from '../../styles/base';

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
    title: {
        fontSize: fonts.md,
        fontWeight: 'bold',
        marginLeft: margin.md,
        marginTop: margin.md,
        marginBottom: margin.lg
    }
})