import React, { FunctionComponent } from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { styles } from './CarouselStyles';

interface CarouselIndicatorProps {
    index: number;
    activeIndex: number;
    onIndicatorSelected(index: number): void;
}

const CarouselIndicator: FunctionComponent<CarouselIndicatorProps> = (
    props: CarouselIndicatorProps
): JSX.Element => {

    const className = () => {
        let className;
        className = props.index === props.activeIndex
                        ? styles.carouselIndicatorActive
                        : styles.carouselIndicator;
        return className;
    }
    return (
        <TouchableOpacity onPress={() => props.onIndicatorSelected(props.index)}>
            <Text style={className()}></Text>
        </TouchableOpacity>
    );
};

export default CarouselIndicator;
