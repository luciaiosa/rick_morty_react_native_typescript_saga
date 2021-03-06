import React, { FunctionComponent, useState } from "react";
import { PAGE_BOUND_NUMBER_PAGINATION } from "../../constants/AppLists";
import { View, Text, TouchableOpacity } from "react-native";
import {classes} from './PaginationStyles';

interface PagerProps {
    pageNumbers: Array<number>;
    currentPage: number;
    pageSelected(value: number): void;
}

const Pagination: FunctionComponent<PagerProps> = (
    props: PagerProps
): JSX.Element => {
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const [prevButtonDisabled, setPrevButtonDisabled] = useState<string>(
        "disabled"
    );
    const [nextButtonDisabled, setNextButtonDisabled] = useState<string>("");
    const [ellipseUpperPagesNumber, setEllipseUpperPagesNumber] = useState<
        number
    >(3);
    const [ellipseLowerPagesNumber, setEllipseLowerPagesNumber] = useState<
        number
    >(0);

    const setPrevButtonClass = (selectedPage: number) => {
        if (selectedPage === 1) {
            setPrevButtonDisabled("disabled");
        } else {
            setPrevButtonDisabled("");
        }
    };
    const setNextButtonClass = (selectedPage: number) => {
        if (selectedPage === props.pageNumbers.length) {
            setNextButtonDisabled("disabled");
        } else {
            setNextButtonDisabled("");
        }
    };
    const changeSelectedPage = (indexSelected: number): void => {
        setSelectedPage(indexSelected);
        props.pageSelected(indexSelected);
        setPrevButtonClass(indexSelected);
        setNextButtonClass(indexSelected);
    };
    const onUpperEllipseSelect = (): void => {
        setEllipseUpperPagesNumber(
            ellipseUpperPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
        );
        setEllipseLowerPagesNumber(
            ellipseLowerPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
        );
        changeSelectedPage(ellipseUpperPagesNumber + 1);
    };
    const onLowerEllipseSelect = (): void => {
        setEllipseUpperPagesNumber(
            ellipseUpperPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
        );
        setEllipseLowerPagesNumber(
            ellipseLowerPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
        );
        changeSelectedPage(
            ellipseUpperPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
        );
    };
    const goToNextPage = (): void => {
        console.log(selectedPage);
        console.log(ellipseUpperPagesNumber);
        if (selectedPage + 1 > ellipseUpperPagesNumber) {
            setEllipseUpperPagesNumber(
                ellipseUpperPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
            );
            setEllipseLowerPagesNumber(
                ellipseLowerPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
            );
        }
        changeSelectedPage(selectedPage + 1);
    };
    const goToPrevPage = (): void => {
        if ((selectedPage - 1) % PAGE_BOUND_NUMBER_PAGINATION === 0) {
            setEllipseUpperPagesNumber(
                ellipseUpperPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
            );
            setEllipseLowerPagesNumber(
                ellipseLowerPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
            );
        }
        changeSelectedPage(selectedPage - 1);
    };
    const renderPageIncrementButton = () => {
        if (props.pageNumbers.length > ellipseUpperPagesNumber) {
            return (
                <TouchableOpacity onPress={onUpperEllipseSelect}>
                    <View
                        style={classes.paginationListItem}
                    >
                        <Text style={classes.paginationListItemText}>&hellip;{" "}</Text>
                    </View>
                </TouchableOpacity>
                
            );
        }
    };
    const renderPageDecrementButton = () => {
        if (ellipseLowerPagesNumber >= 1) {
            return (
                <TouchableOpacity onPress={onLowerEllipseSelect}>
                    <View
                        style={classes.paginationListItem}
                    >
                        <Text style={classes.paginationListItemText}>&hellip;{" "}</Text>
                    </View>
                </TouchableOpacity>
                
            );
        }
    };
    const renderPrevButton = () => {
        if (prevButtonDisabled === "disabled") {
            return (
                <TouchableOpacity disabled={true}>
                    <View
                        style={classes.disabledPaginationListItem}
                    >
                        <Text style={classes.disabledPaginationListItemText}>&laquo;</Text>
                    </View>
                </TouchableOpacity>
                
            );
        } else {
            return (
                <TouchableOpacity onPress={() => goToPrevPage()}>
                    <View
                        style={classes.paginationListItem}
                    >
                        <Text style={classes.paginationListItemText}>&laquo;</Text>
                    </View>
                </TouchableOpacity>
                
            );
        }
    };
    const renderNextButton = () => {
        if (nextButtonDisabled === "disabled") {
            return (
                <TouchableOpacity disabled={true}>
                    <View
                        style={classes.disabledPaginationListItem}
                    >
                        <Text style={classes.disabledPaginationListItemText}>&raquo;</Text>
                    </View>
                </TouchableOpacity>
                
            );
        } else {
            return (
                <TouchableOpacity onPress={() => goToNextPage()}>
                    <View
                        style={classes.paginationListItem}
                    >
                        <Text style={classes.paginationListItemText}>&raquo;</Text>
                    </View>
                </TouchableOpacity>
                
            );
        }
    };
    const renderPageNumbers = () => {
        return props.pageNumbers.map((number: number) => {
            if (
                (number === 1 && selectedPage === 1) ||
                number === props.currentPage
            ) {
                return (
                    <TouchableOpacity onPress={() => changeSelectedPage(number)}
                        key={number}
                        style={classes.activePaginationListItem}
                    >
                        <Text style={classes.activePaginationListItemText}>{number}</Text>
                    </TouchableOpacity>
                );
            } else if (
                number < ellipseUpperPagesNumber + 1 &&
                number > ellipseLowerPagesNumber
            ) {
                return (
                    <TouchableOpacity onPress={() => changeSelectedPage(number)}
                        key={number}
                        style={classes.paginationListItem}
                    >
                        <Text style={classes.paginationListItemText}>{number}</Text>
                    </TouchableOpacity>
                );
            }
        });
    }; 
    return (
        <View style={classes.center}>
            <View style={classes.paginationList}>
                {renderPrevButton()}
                {renderPageDecrementButton()}
                {renderPageNumbers()} 
                {renderPageIncrementButton()}
                {renderNextButton()}
            </View>
        </View>
    );
};

export default Pagination;
