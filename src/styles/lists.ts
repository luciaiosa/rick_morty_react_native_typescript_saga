import {dimensions, fonts, colors} from './base';
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
        justifyContent: "center",
        alignContent: "center",
        overflow: "visible",
        flexDirection: "column",
        minHeight: dimensions.fullHeight * 0.75
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
        paddingLeft: 20
    },
    description: {
        fontSize: fonts.md,
        marginTop: 10,
        marginBottom: 30
    },
    descriptionRow: {
        paddingTop: 10,
        display: "flex",
        justifyContent: "space-between"
    },
    historyDescriptionRow: {
        backgroundColor: "lightgrey",
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        width: dimensions.fullWidth * 0.7,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listTileContainer: {
        paddingLeft: 25,
        paddingRight: 10
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
        marginTop: 15,
        marginBottom: 20
    },
    blankDiv: {
        height: 50
    },
    pageCompareCharacters: {
        paddingLeft: 20,
        paddingRight: 20,
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
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        /* border: "1px solid #1dc9dd", */
        borderColor: colors.secondary,
        borderStyle: "solid",
        borderWidth: 1,
        marginLeft: 35,
        marginBottom: 35,
        marginRight: 35
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
        padding: 10
    },
    comparisonContainer: {
        width: dimensions.fullWidth,
        height: "auto",
        display: "flex",
        justifyContent: "space-evenly",
        margin: 0
    }
})