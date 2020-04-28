import { StyleSheet } from "react-native";
import {dimensions, colors, padding, margin, fonts} from '../../styles/base';

export const styles = StyleSheet.create({
    root: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        height: dimensions.fullHeight
    },
    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        overflow: "hidden",
        flexDirection: "column",
        flex: 1
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
    description: {
        fontSize: fonts.md,
        marginTop: margin.sm,
        marginBottom: margin.lg
    },
    tilesContainer: {
        marginLeft: margin.md,
        marginRight: margin.md,
    },
    image: {
        width: 250, 
        height: 150,
        borderRadius: 4,
        marginBottom: margin.sm
    },
    title: {
        fontWeight: 'bold',
        fontSize: fonts.md,
        marginBottom: margin.md
    },
    name: {
        fontWeight: 'bold'
    }
});