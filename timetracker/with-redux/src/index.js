import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

// Adding redux to the project
import {Provider} from 'react-redux';
import rootReducer from './reducers/Root';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


// lets enable async
import thunkMiddleware from 'redux-thunk';

// configure the store
let store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f // for redux dev tools
    )
);
const persistor = persistStore(store)


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);
