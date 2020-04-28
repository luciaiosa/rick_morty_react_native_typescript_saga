import { StyleSheet } from 'react-native';
import { padding } from '../../styles/base';

export const styles = StyleSheet.create({
    linksContainer: {
        backgroundColor: "#ff01c1",
        paddingLeft: 10,
        height: 80,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    logoContainer :{
        borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "600"
    },
    logo : {
        width: 70,
        height: 20
    },
    headerBreadcrumbsContainer : {
        fontSize: 18,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    linkMenu: {
        /* textDecoration: "none", */
        fontWeight: "400",
        fontSize: 24,
        color: "#424548",
        alignSelf: "flex-start",
/*         "&:hover": {
            color: "white"
        } */
    },
});
