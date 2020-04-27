import React from 'react';
import { TextInput, View } from 'react-native';
// import Feather, FontAwesome or any librery of icons (third column from page https://expo.github.io/vector-icons/; 
// the second column is the name of the icon that we use in the component: name="search" )
import { Feather } from '@expo/vector-icons';
import {styles} from './SearcBarStyles';

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

export default SearchBar;