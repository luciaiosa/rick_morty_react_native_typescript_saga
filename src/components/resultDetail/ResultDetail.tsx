import React, {FunctionComponent} from 'react';
import {View, Text, Image} from 'react-native';
import {Character} from '../../store/characters/CharacterStore';
import {styles} from './ResultDetailStyles';
import { formattedDate } from '../../utils/dates';

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
            {formattedDate(result.created)}</Text>
        </View>
    )
}

 export default ResultDetail;