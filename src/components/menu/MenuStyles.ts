import {StyleSheet} from 'react-native';
import { dimensions } from '../../styles/base';

const drawerWidth = 240;

export const styles = StyleSheet.create({
        appMenu: {
            width: dimensions.fullWidth
        },
        navList: {
            width: drawerWidth
        },
        menuItem: {
            width: drawerWidth
        },
        menuItemIcon: {
            width: 15,
            height: 15
        },
        linkMenu: {
            /* textDecoration: "none", */
            fontWeight: "400",
            fontSize: 24,
            color: "#424548",
            marginRight: 20,
            alignSelf: "center",
            paddingLeft: 10,
/*             "&:hover": {
                color: "white"
            } */
        },
        linksContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    })
;
