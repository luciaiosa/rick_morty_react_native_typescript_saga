import React from "react";
import { BreadCrumb } from "../../store/app/AppStore";
import { styles } from "./BreadcrumbsStyles";
import { View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

interface BreadcrumbsProps {
    items: BreadCrumb[];
    navigation: any;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
    const { items, navigation } = props;

    const renderItems = (): JSX.Element => {
        if (items && items.length > 0) {
            const breadcrumbsItems = items.map(breadcrumb => {
                return renderLink(breadcrumb);
            });
            return <View>{breadcrumbsItems}</View>;
        }
        return <View></View>;
    };

    const renderLink = (breadcrumb: BreadCrumb): JSX.Element => {
        if (breadcrumb.link !== null) {
            return (
                <View style={styles.breadcrumbsLinks} key={breadcrumb.key}>
                    <TouchableOpacity onPress={() => navigation.navigate(`${breadcrumb.link}`)} style={styles.breadcrumbLink}
                        key={breadcrumb.link}>
                        <Text>{breadcrumb.label}</Text>
                    </TouchableOpacity>
                    <Text
                        style={styles.breadcrumbSpan}
                    >
                        {" "}
                        /{" "}
                    </Text>
                </View>
            );
        }
        return (
            <Text key={breadcrumb.key} style={styles.breadcrumbSpan}>
                {breadcrumb.label}
            </Text>
        );
    };

    return <View style={styles.breadcrumbsContainer}>{renderItems()}</View>;
};
export default withNavigation(Breadcrumbs);
