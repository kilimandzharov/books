import {configureStore} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage/session';
import {createSelector} from 'reselect';
import rootReducer from "./slices/rootReducer";


const itemSelector = createSelector(state => state.items, (items) => items);
const isEmpty = createSelector(state => state.infoQuery.isAnswerEmpty, result => result);
const phaseSelector=createSelector(state =>state.phase,result=>result);

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

let persistor = persistStore(store)

export default store;
export {itemSelector, isEmpty,phaseSelector,persistor};

