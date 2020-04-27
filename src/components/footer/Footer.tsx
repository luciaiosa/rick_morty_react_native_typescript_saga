import React, { FunctionComponent } from "react";
import Menu from "../menu/Menu";
import { View, Text } from 'react-native';
import { styles } from './FooterStyles';

interface FooterProps {
    content: string;
}
const Footer: FunctionComponent<FooterProps> = (
    props: FooterProps
): JSX.Element => {
    return (
        <View style={styles.footerContainer}>
            <Menu></Menu>
            <Text style={styles.footerContent}>{props.content}</Text>
        </View>
    );
};

export default Footer;
