import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumbs, AppStore, BreadCrumb } from "../../store/app";
import { View, Text } from "react-native";
import { withNavigation } from 'react-navigation';
import { slides } from "../../constants/HomeSlides";
import {styles} from './HomeStyles';
import Carousel from '../../components/carousel/Carousel';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { dimensions } from '../../styles/base';
import Header from "../../components/header/Header";

// el componente va a tener la prop navigation, al haber envuelto el componente en withNavigation, sin tener que pasarlo el padre!!!
const HomeScreen: FunctionComponent = ({navigation}: any) => {
    const dispatch = useDispatch();
    const state = useSelector<AppStore, AppStore>(state => state);
    const charactersLoading: boolean = state.characterStore.loading;

    useEffect(() => {
        dispatch(setBreadcrumbs([]));
    }, [dispatch]);
    {/* <Spinner message={literals.loadingMessage} /> */}
    return (
        <View style={{minHeight: dimensions.fullHeight}}>
            {charactersLoading ? (
                <View><Text>Spinner</Text></View>               
            ) : null}
            <View>
                <Header>
                    <Breadcrumbs items={[]} /> 
                </Header>
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
                        
                        <Carousel slides={slides} timer={3000}></Carousel>
                    </View>
                </View>
            </View>
            
        </View>
        
    );
};

// Usaré withNavigation para envolver el componente para devolver una nueva versión del componente que tendrá el acceso de navigacion agregado automaticamente
export default withNavigation(HomeScreen);

/*  <FlatList
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
                        <Text style={styles.title} >{item.title}</Text>
                        <Text>{item.subtitle}</Text>
                    </View>
                </TouchableOpacity>
            )
        }}
/> */