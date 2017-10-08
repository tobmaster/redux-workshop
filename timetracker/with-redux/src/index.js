import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

// Adding redux to the project
import {Provider}  from 'react-redux';
import rootReducer from './reducers/Root';
import {createStore, applyMiddleware, compose} from 'redux';

// lets enable async
import thunkMiddleware from 'redux-thunk';

// configure the store
let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f // for redux dev tools
    )
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
