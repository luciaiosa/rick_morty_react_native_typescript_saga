import createSagaMiddleware from "redux-saga";
import { Store, createStore, applyMiddleware } from "redux";
import { AppStore, initialAppStore } from "./app/AppStore";
import { rootReducer } from "./RootReducer";
import { rootSaga } from "./RootSaga";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialStoreState: AppStore): Store<AppStore> {

    // Initialize redux store.
    const store = createStore(rootReducer, initialStoreState, applyMiddleware(sagaMiddleware));
    return store;
}

export const store = configureStore(initialAppStore);

sagaMiddleware.run(rootSaga);