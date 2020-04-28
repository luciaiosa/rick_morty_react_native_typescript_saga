import { StyleSheet } from "react-native";
import { colors } from '../../styles/base';

export const classes = StyleSheet.create({
    center: {
        marginBottom: 10,
        marginTop: 10
    },

    paginationList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        color: "black", 
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16, 
        paddingRight: 16,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderWidth: 1,
    },

    paginationListItem: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16, 
        paddingRight: 16,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderWidth: 1
    },
    paginationListItemText: {
        color: "black"
    },
    activePaginationListItem: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16, 
        paddingRight: 16,
        backgroundColor: colors.primary,
        color: "white",
        /* border: 1px solid #ff01c1", */
        borderColor: colors.primary,
        borderStyle: "solid",
        borderWidth: 1
    },
    activePaginationListItemText: {
        color: "white"
    },
    disabledPaginationListItem: {
        borderColor: "#ddd",
        borderStyle: "solid",
        borderWidth: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16, 
        paddingRight: 16,
        opacity: 0.6,
    },
    disabledPaginationListItemText: {
        color: colors.tertiary
    }
})
