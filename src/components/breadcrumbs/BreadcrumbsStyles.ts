import { StyleSheet } from 'react-native';
import { margin } from '../../styles/base';

export const styles = StyleSheet.create({
        breadcrumbsContainer: {
            display: "flex",
            flexDirection: "row",
            marginTop: margin.sm
        },
        breadcrumbsLinks: {
            display: "flex",
            flexDirection: "row",
        },
        breadcrumbSpan: {
            color: "#d3d3d3"
        },
        breadcrumbLine: {
            color: "rgb(51, 51, 51)"
        },
        breadcrumbLink: {
            fontWeight: "400",
            color: "rgb(51, 51, 51)"
        }
});
