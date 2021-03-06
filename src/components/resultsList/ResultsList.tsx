import React, { FunctionComponent } from 'react';
// FlatList es un componente de react native que se utiliza cuando se necesita scrollable list de datos
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultDetail from '../resultDetail/ResultDetail';
import {Character} from '../../store/characters/CharacterStore';
import image from "../../../assets/first_episode.png";
import { styles } from './ResultsListStyles';

interface ResultsListProps {
    title: string, 
    results: Character[], 
    navigation: any
}
// el componente va a tener la prop navigation, al haber envuelto el componente en withNavigation, sin tener que pasarlo el padre!!!
const ResultsList: FunctionComponent<ResultsListProps> = ({title, results, navigation}: ResultsListProps): JSX.Element => {

    const renderResultDetail = (item: Character) => {
        if (item.image) {
            return (
                <ResultDetail result={item} imageSource={item.image}/>
            )
        }
        return (
            <ResultDetail result={item} imageSource={image}/>
        )
    }

    const renderResultsList = () => {
        if (!results.length) {
            return <View></View>;
        }
        return (
            <View>
                <Text style={styles.title}>{title}</Text>
                <FlatList  
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={(result) => result.id.toString()}
                    renderItem={({item}) => {  // item es un objeto que contiene todos los datos de results
                    return (
                        // Uso TouchableOpacity que se desvanece cuando se hace click en ResultDetail, y va a CharacterDetailScreen
                        <TouchableOpacity onPress={() => navigation.navigate('CharacterDetailScreen', {id: item.id})}>
                            {renderResultDetail(item)}
                        </TouchableOpacity>
                    )
                    }}
                />
            </View>
        )
    }
    
    return (
        <View style={styles.container}>{renderResultsList()}</View>            
    )
}

// Usaré withNavigation para envolver el componente para devolver una nueva versión del componente que tendrá el acceso de navigacion agregado automaticamente
export default withNavigation(ResultsList);