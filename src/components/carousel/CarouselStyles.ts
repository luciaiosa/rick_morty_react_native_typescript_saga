import { StyleSheet } from 'react-native';
import { margin } from '../../styles/base';

export const styles = StyleSheet.create({
    tilesContainer: {
        marginLeft: margin.sm,
        marginTop: margin.md
    },
    image: {
        width: 250, 
        height: 150,
        borderRadius: 4,
        marginBottom: margin.sm
    },
    name: {
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold'
    },
    carousel: {
        position: "relative",
        marginBottom: 20,
        marginTop: 20
    }, 
    carouselSlides: {
        padding: 0,
        margin: 0,
        display: "flex"
    },
    carouselSlide: {
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0.6,
        marginLeft: margin.sm,
        marginTop: margin.md
    },
    carouselSlideActive: {
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: margin.sm,
        marginTop: margin.md
    },
    carouselIndicators: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    },
    carouselIndicator: {
        width: 50,
        height: 8,
        backgroundColor: "#111",
        opacity: 0.15,
        /* transition: "opacity 0.15s cubic-bezier(0.4, 0, 1, 1)", */
        marginRight: 10,
        /* "&:hover": {
            opacity: 0.5
        } */
    },
    carouselIndicatorActive: {
        width: 50,
        height: 8,
        backgroundColor: "#111",
        /* transition: "opacity 0.15s cubic-bezier(0.4, 0, 1, 1)", */
        marginRight: 10,
        opacity: 0.75,
        /* "&:hover": {
            opacity: 0.75
        } */
    }
  });