import React, { FunctionComponent } from "react";
import Menu from "../menu/Menu";

const Logo = require('../../../assets/logo1.png');
import { styles } from '../../components/header/HeaderStyles';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

interface HeaderProps {
    children?: JSX.Element;
    navigation: any;
}

const Header: FunctionComponent<HeaderProps> = (
    props: HeaderProps
): JSX.Element => {
    return (
        <View style={styles.linksContainer}>
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('HomeScreen')} style={styles.linkMenu}>
                    <Image source={Logo} style={styles.logo}/>
                </TouchableOpacity>              
            </View>
            <View style={styles.headerBreadcrumbsContainer}>
                <Menu></Menu>
                {props.children}
            </View>
        </View>
    );
};

export default withNavigation(Header);
