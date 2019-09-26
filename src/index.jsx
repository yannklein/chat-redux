// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from "./reducers/messages_reducer";
import selectedChannelReducer from "./reducers/select_channel_reducer";

const initialState = {
  messages: [],
  channels: ["general", "pipouyou", "machanamoi"],
  selectedChannel: "general",
  username: prompt("What's your username again?")
};

const identityReducer = (state = null) => state;

const middlewares = applyMiddleware(reduxPromise, logger);

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelReducer,
  username: identityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
