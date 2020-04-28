import React, { FunctionComponent } from "react";
import { Text, SafeAreaView } from 'react-native';
import { styles } from './FooterStyles';

interface FooterProps {
    content: string;
}
const Footer: FunctionComponent<FooterProps> = (
    props: FooterProps
): JSX.Element => {
    return (
        <SafeAreaView  style={styles.footerContainer}>
            <Text style={styles.footerContent}>{props.content}</Text>
        </SafeAreaView >
    );
};

export default Footer;
