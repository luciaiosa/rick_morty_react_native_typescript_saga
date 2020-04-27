import React, { FunctionComponent } from "react";
import { styles } from "../../styles/descriptions";
import { View, Text } from 'react-native';

interface ErrorProps {
    title: string;
}

const Error: FunctionComponent<ErrorProps> = (
    props: ErrorProps
): JSX.Element => {

    return (
        <View style={styles.content}>
            <Text style={styles.title}>{props.title}</Text>
            {/* <p className={classes.description}>
                Sorry, there was an error loading the data.
            </p> */}
        </View>
    );
};

export default Error;
