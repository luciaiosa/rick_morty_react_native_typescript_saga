import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
// import Feather, FontAwesome or any librery of icons (third column from page https://expo.github.io/vector-icons/; 
// the second column is the name of the icon that we use in the component: name="search" )
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
    searchTerm: string, 
    onSearchTermChange(value: string): void, 
    onTermEndEditing(): void
}

const SearchBar = ({ searchTerm, onSearchTermChange, onTermEndEditing }: SearchBarProps) => {
    return (
        <View style={styles.containerStyle}>
            {/* <Feather name="search" size={30} /> */}
            {/* <FontAwesome name="search"/> */}
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                value={searchTerm}
                onChangeText={newValue => onSearchTermChange(newValue)}
                onEndEditing={() => onTermEndEditing()} // when we hit Enter, or OK button
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                style={styles.inputStyle}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',  // is better to put alignSelf to the son, than alignItems to the father, because we can click on the entire input (width and height), not just the center!! 
        marginHorizontal: 15
    }
});

export default SearchBar;