import React from "react";
import { styles } from "./MenuStyles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import { withNavigation } from 'react-navigation';

interface MenuProps {
    navigation: any;
}

const Menu = ({navigation}: MenuProps): JSX.Element => {
    return (
        <View style={styles.linksContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('CharactersListScreen')} style={styles.linkMenu}>
                <Text>Characters</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CharactersListScreen')} style={styles.linkMenu}>
                <Text>Locations</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CharactersListScreen')} style={styles.linkMenu}>
                <Text>Episodes</Text>
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(Menu);
