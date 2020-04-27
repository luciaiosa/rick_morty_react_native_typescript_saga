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
            <TouchableOpacity onPress={() => navigation.navigate('CharactersListScreen')} style={styles.linkMenu} key="characters">
                <Text>Characters</Text>>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CharactersListScreen')} style={styles.linkMenu} key="locations">
                <Text>Locations</Text>>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CharactersListScreen')} style={styles.linkMenu} key="episodes">
                <Text>Episodes</Text>>
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(Menu);
