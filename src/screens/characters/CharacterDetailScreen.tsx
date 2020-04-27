import React, {FunctionComponent, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Character, CharacterStore} from '../../store/characters/CharacterStore';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore, BreadCrumb, setBreadcrumbs } from '../../store/app';
import { characterByIdRequest, clearCharacterSelected } from '../../store/characters';
import { withNavigation } from 'react-navigation';
import {styles} from '../../styles/descriptions';
import { fonts, margin } from '../../styles/base';
import { formattedDate } from '../../utils/dates';
import Error from '../../components/error/Error';

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
                <Image source={{uri: selectedCharacter.image}} style={localStyles.image}/>
            )
        }
        return (
            <View style={localStyles.image}></View>
        )
    }

    const renderContent = (): JSX.Element => {
        if (hasError) {
            return <Error title={errorMessage}></Error>;
        }
        if (selectedCharacter !== undefined) {
            return (
                <View style={styles.content}>
                    <Text style={localStyles.title}>{selectedCharacter.name}</Text>
                    <View>
                        <View style={styles.descriptionRow}>
                            {renderImage(selectedCharacter)}
                        </View>
                        <View style={styles.descriptionRow}>
                            <Text style={styles.description}>
                                Id: {selectedCharacter.id} 
                            </Text>
                        </View>
                        <View style={styles.descriptionRow}>
                            <Text style={styles.description}>
                                Created:{" "}
                                {formattedDate(selectedCharacter.created)}
                            </Text>
                        </View>
                        <View style={styles.descriptionRow}>
                            <Text style={styles.description}>
                                Status: {selectedCharacter.status}
                            </Text>
                        </View>
                        <View style={styles.descriptionRow}>
                            <Text style={styles.description}>
                                Species: {selectedCharacter.species}
                            </Text>
                        </View>
                        <View style={styles.descriptionRow}>
                            <Text style={styles.description}>
                                Gender: {selectedCharacter.gender}
                            </Text>
                        </View>
                    </View>

                </View>
            )
        }
        return <View></View>;
    }

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {renderContent()}
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
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
    },
    title: {
        fontSize: fonts.md,
        fontWeight: 'bold',
        marginLeft: margin.md,
        marginTop: margin.md,
        marginBottom: margin.lg
    }
});
 export default withNavigation(CharacterDetailScreen);