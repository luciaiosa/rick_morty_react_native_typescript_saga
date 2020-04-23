import React, {FunctionComponent} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Character} from '../store/characters/CharacterStore';

interface ResultDetailProps { 
    result: Character,
    imageSource: string
};

const ResultDetail: FunctionComponent<ResultDetailProps> = ({result, imageSource }: ResultDetailProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <Image source={{uri: imageSource}} style={styles.image} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>Id: {result.id} - created:{" "}
                                {result.created}</Text>
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
 export default ResultDetail;