import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "../../store/app";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { withNavigation } from 'react-navigation';
import { slides } from "../../constants/HomeSlides";
import {styles} from './HomeStyles';

// el componente va a tener la prop navigation, al haber envuelto el componente en withNavigation, sin tener que pasarlo el padre!!!
const HomeScreen: FunctionComponent = ({navigation}: any) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBreadcrumbs([]));
    }, [dispatch]);
// <View style={{flex: 1}}> : por defecto coge solo el espacio que hay en la pantalla 
    return (
        <View style={styles.root}> 
            <View style={styles.container}>  
                <View style={styles.content}>  
                    <Text style={styles.title}>Welcome to Rick and Morty page!</Text>
                    <Text>
                        Rick and Morty is a television show. 
                        The American animated television show is created by
                        Justin Roiland and Dan Harmon. It premiered on Cartoon
                        Network's [adult swim] block on December 2, 2013. 
                        Here you have access to about hundreds of characters,
                        images, locations and episodes. This page is filled with
                        canonical information as seen on the TV show. 
                        Season 4 characters, locations and episodes are coming
                        soon!
                    </Text>
                </View>
                    <FlatList
                            horizontal   // es lo mismo que horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={slides}
                            keyExtractor={(slide) => slide.id.toString()}
                            renderItem={({item}) => {  // item es un objeto que contiene todos los datos de results
                                return (
                                    // Uso TouchableOpacity que se desvanece cuando se hace click en ResultDetail, y va a ResultsShowDetail
                                    <TouchableOpacity onPress={() => navigation.navigate(`${item.linkUrl}`)}>
                                        <View style={styles.tilesContainer} >
                                            <Image source={item.imageSource} style={styles.image} />
                                            <Text style={styles.name} >{item.title}</Text>
                                            <Text>{item.subtitle}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                    />
                
            </View>
        </View>
    );
};

// Usaré withNavigation para envolver el componente para devolver una nueva versión del componente que tendrá el acceso de navigacion agregado automaticamente
export default withNavigation(HomeScreen);
