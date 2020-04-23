import React, {FunctionComponent, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Character, CharacterStore} from '../../store/characters/CharacterStore';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore, BreadCrumb, setBreadcrumbs } from '../../store/app';
import { characterByIdRequest, clearCharacterSelected } from '../../store/characters';
import { withNavigation } from 'react-navigation';

interface CharacterDetailProps { navigation: any };

const CharacterDetailScreen: FunctionComponent<CharacterDetailProps> = ({navigation}: CharacterDetailProps): JSX.Element => {
    const {selectedCharacter, hasError, errorMessage } = useSelector<AppStore, CharacterStore>(state => state.characterStore);
    /* A hook to access the redux `dispatch` function. */
    const dispatch = useDispatch();

    useEffect(() => {
        const {id} = navigation.state.params;
        
        const breadCrumbs: BreadCrumb[] = [
            {
                key: "Home",
                label: "Home",
                link: "/"
            },
            {
                key: "CharacterList",
                label: "Characters",
                link: "/characters"
            },
            {
                key: "CharacterDetail",
                label: "Character Info",
                link: null
            }
        ];
        dispatch(setBreadcrumbs(breadCrumbs));
        dispatch(characterByIdRequest(parseInt(id)));
        //ComponentWillUnMount()
        return () => {
            dispatch(clearCharacterSelected());
        };
    }, [dispatch]);

    const renderImage = (selectedCharacter: Character) => {
        if (selectedCharacter && selectedCharacter.image) {
            return (
                <Image source={{uri: selectedCharacter.image}} style={styles.image}/>
            )
        }
        return (
            <View style={styles.image}></View>
        )
    }

    const renderContent = (): JSX.Element => {
        if (hasError) {
            return <View></View>;
        }
        if (selectedCharacter !== undefined) {
            return (
                <View>
                    {renderImage(selectedCharacter)}
                    <Text>{selectedCharacter.name}</Text>
                </View>
            )
        }
        return <View></View>;
    }

    return (
        <View style={styles.container}>
            {renderContent()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250, 
        height: 150,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});
 export default withNavigation(CharacterDetailScreen);