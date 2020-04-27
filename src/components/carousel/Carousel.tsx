import React, { FunctionComponent, useState, useEffect } from "react";
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { Slide } from '../../constants/HomeSlides';
import {styles} from './CarouselStyles';
import CarouselIndicator from './CarouselIndicator';
import CarouselSlide from './CarouselSlide';

interface CarouselProps {
    slides: Slide[];
    timer: number;
}

const Carousel: FunctionComponent<CarouselProps> = (
    props: CarouselProps
): JSX.Element => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const nextSlide = (currentSlideIndex + 1) % props.slides.length;
        let id = setTimeout(() => goToSlide(nextSlide), props.timer);
        return () => clearTimeout(id);
    }, [currentSlideIndex]);

    const goToSlide = (index: number) => {
        setCurrentSlideIndex(index);
    };

    const renderSlides = (): JSX.Element[] => {
        return props.slides.map((slide: Slide, index: number) => {
            return (
                <CarouselSlide index={index} activeIndex={currentSlideIndex} slide={slide} key={slide.id}></CarouselSlide>
            );
        });
    };

    const renderIndicators = (): JSX.Element[] => {
        return props.slides.map((slide: Slide, index: number) => {
            return (
                <View key={index}>
                    <CarouselIndicator
                        index={index}
                        activeIndex={currentSlideIndex}
                        onIndicatorSelected={(value: number) =>
                            goToSlide(value)
                        }
                    />
                </View>
            );
        });
    };

    return (
        <View
          style={styles.carousel}
        >
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                pagingEnabled 
                scrollEventThrottle={10}
                style={styles.carouselSlides}
            >
                {renderSlides()}
            </ScrollView>
            {/* <View
                style={styles.carouselIndicators}
                >
                {renderIndicators()}
            </View> */}
        </View>
    );
};

export default Carousel;
