import React, { FunctionComponent } from "react";
import { Slide } from '../../constants/HomeSlides';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Image, Text, StyleProp, ViewStyle } from 'react-native';
import { withNavigation } from 'react-navigation';
import {styles} from './CarouselStyles';

interface CarouselSlideProps {
    index: number;
    activeIndex: number;
    slide: Slide;
    navigation: any;
}

const CarouselSlide: FunctionComponent<CarouselSlideProps> = (
    {slide, navigation, index, activeIndex}: CarouselSlideProps
): JSX.Element => {

    const className = (): StyleProp<ViewStyle> => {
        let className = index === activeIndex
                            ? styles.carouselSlideActive
                            : styles.carouselSlide;
        return className;
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate(`${slide.linkUrl}`)} key={slide.id}>
            <View style={styles.carouselSlideActive}>
                <Image source={slide.imageSource} style={styles.image} />
                <Text style={styles.title} >{slide.title}</Text>
                <Text>{slide.subtitle}</Text>
            </View>
        </TouchableOpacity> 
    );
};

export default withNavigation(CarouselSlide);
