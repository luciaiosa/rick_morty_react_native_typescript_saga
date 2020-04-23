// useState = hook that adds state to a function component
// useEffect = hook (function) that allows us to execute some code ONLY the first time that our component renders to the screen

import React, {FunctionComponent, useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {ScrollView, StyleSheet, View} from 'react-native';
// ScrollView detecta que tiene demasiado contenido dentro para que quepa en la
// pantalla al mismo tiempo, y habilitará automáticamente el scroll (desplazamiento).
import SearchBar from '../../components/SearchBar';
import ResultsList from '../../components/ResultsList';
import { AppStore, BreadCrumb } from "../../store/app/AppStore";
import { setBreadcrumbs } from "../../store/app";
import {
    charactersRequest,
    CharacterStore,
    Character
} from "../../store/characters";
import Pagination from '../../components/Pagination';

const CharactersListScreen: FunctionComponent = (): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);

    /* useSelector is a function that takes the current state as an argument 
    and returns whatever data you want from it. It’s very similiar to mapStateToProps() 
    and it allows to store the return values inside a variable within the scope of the 
    functional components instead of passing down as props */
    const { characters, pages, hasError, errorMessage } = useSelector<
        AppStore,
        CharacterStore
    >(state => state.characterStore);
    const dispatch = useDispatch();
    const breadCrumbs: BreadCrumb[] = [
        {
            key: "Home",
            label: "Home",
            link: "/"
        },
        {
            key: "CharacterList",
            label: "Characters",
            link: null
        }
    ];
    useEffect(() => {
        dispatch(charactersRequest(currentPage));
        dispatch(setBreadcrumbs(breadCrumbs));
    }, []);

    const onSearchBarTerm = () => {
        dispatch(charactersRequest(currentPage, searchTerm));
    };

    const onSearchBarValueChange = (value: string) => {
        setSearchTerm(value);
    };

    const onCurrentPageChange = (value: number) => {
        setCurrentPage(value);
        dispatch(charactersRequest(value, searchTerm));
    };

    const pageNumbers = (): Array<number> => {
        const pageNumbers = [];
        for (let i = 1; i <= pages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const renderList = () => {
        return (
            <View>
                <ResultsList title="Characters" results={characters} />
            </View>
        );
    };

    const renderPagination = (): JSX.Element => {
        if (pages > 1) {
            return (
                <Pagination
                    pageNumbers={pageNumbers()}
                    currentPage={currentPage}
                    pageSelected={(value: number) => onCurrentPageChange(value)}
                ></Pagination>
            );
        }
        return <View></View>;
    };

    return (
        //  Esto se puede escribir como un tag vacio, que por defecto coge solo el espacio que hay en la pantalla
        // <View style={{flex: 1}}>
        <>
            <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={(value: string) =>
                    onSearchBarValueChange(value)} 
                onTermEndEditing={() => onSearchBarTerm()}  // cuando se pulsa Enter, o el botón de OK
            />
            {renderList()}
            {renderPagination()}
        </>
    )
};

export default CharactersListScreen;