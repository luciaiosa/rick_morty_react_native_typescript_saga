import React, { FunctionComponent } from "react";

interface CarouselIndicatorProps {
    index: number;
    activeIndex: number;
    onIndicatorSelected(index: number): void;
}

const CarouselIndicator: FunctionComponent<CarouselIndicatorProps> = (
    props: CarouselIndicatorProps
): JSX.Element => {
    return (
        <li key={props.index}>
            <button
                className={
                    props.index === props.activeIndex
                        ? "carousel__indicator carousel__indicator--active"
                        : "carousel__indicator"
                }
                onClick={() => props.onIndicatorSelected(props.index)}
            ></button>
        </li>
    );
};

export default CarouselIndicator;
