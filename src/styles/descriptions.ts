import {dimensions, fonts, colors, margin, padding} from './base';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    root: {
        display: "flex",
        justifyContent: "space-around",
        overflow: "visible",
        flexDirection: "column",
        minHeight: dimensions.fullHeight * 0.75
    },
    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "center",
        overflow: "hidden",
        flexDirection: "column",
        minHeight: dimensions.fullHeight * 0.75
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: padding.md,
        /* border: "1px solid #1dc9dd", */
        borderColor: colors.secondary,
        borderStyle: "solid",
        borderWidth: 1,
        marginLeft: margin.lg,
        marginBottom: margin.lg,
        marginRight: margin.lg,
        marginTop: margin.lg
    },
    gridList: {
        width: dimensions.fullWidth,
        height: "auto",
        display: "flex",
        margin: 0
    },
    pageHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 90,
        width: dimensions.fullWidth
    },
    pageHeaderTitle: {
        margin: 0,
        paddingLeft: padding.md
    },
    description: {
        fontSize: fonts.md
    },
    descriptionRow: {
        paddingTop: padding.sm,
        display: "flex",
        justifyContent: "space-between"
    },
    historyDescriptionRow: {
        backgroundColor: "lightgrey",
        height: 40,
        paddingLeft: padding.md,
        paddingRight: padding.md,
        marginBottom: margin.sm,
        width: dimensions.fullWidth * 0.7,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listTileContainer: {
        paddingLeft: 25,
        paddingRight: padding.sm
    },
    message: {
        height: 70,
        fontSize: 18,
        /* lineHeight: "1.4285em", */
        margin: 5,
        paddingLeft: 15,
        marginTop: 15,
        marginBottom: 15
    },
    errorMessage: {
        color: "red",
        height: 50,
        fontSize: 18,
        /* lineHeight: "1.4285em", */
        margin: 5,
        paddingLeft: 35,
        marginTop: margin.md,
        marginBottom: margin.md
    },
    blankDiv: {
        height: 50
    },
    pageCompareCharacters: {
        paddingLeft: padding.md,
        paddingRight: padding.md,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 90,
        width: dimensions.fullWidth
    },
    contentFollowLink: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: dimensions.fullWidth
    },
    subMenu: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 15,
        /* border: "1px solid #1dc9dd", */
        borderColor: colors.secondary,
        borderStyle: "solid",
        borderWidth: 1,
        marginLeft: 35,
        marginBottom: 35,
        marginRight: 35
    },
    center: {
        margin: 0
    },
    characterItem: {
        backgroundColor: "#F0EEEE",
        margin: 5,
        width: dimensions.fullWidth * 0.5,
        height: 250,
        padding: padding.sm
    },
    comparisonContainer: {
        width: dimensions.fullWidth,
        height: "auto",
        display: "flex",
        justifyContent: "space-evenly",
        margin: 0
    },
    title: {
        fontSize: fonts.md,
        fontWeight: 'bold',
        marginLeft: margin.md,
        marginTop: margin.md,
        marginBottom: margin.lg
    }
})