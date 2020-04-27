import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    linksContainer: {
        marginTop: 30,
        backgroundColor: "#ff01c1",
        paddingTop: 15,
        paddingLeft: 20,
        height: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    menuContainer :{
        // border-bottom: 2px solid rgba(34, 36, 38, 0.15);
        borderRadius: 0,
        display: "flex",
        padding: 30,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "600",
        /* minHeight: 3rem */
    },
    logo : {
        width: 150,
        height: 120
    },
    headerBreadcrumbsContainer : {
        paddingLeft: 205,
        fontSize: 18,
    },
    linkMenu: {
        /* textDecoration: "none", */
        fontWeight: "400",
        fontSize: 24,
        color: "#424548",
        marginRight: 20,
        alignSelf: "center",
        paddingLeft: 10,
/*         "&:hover": {
            color: "white"
        } */
    },
});
