import { createStore } from 'redux';
import reducer from './reducer';

// Retrieve auth token from local storage
const authTokenFromLocalStorage = localStorage.getItem('authToken');

// Set initial state for the auth token
const initialState = {
    authToken: authTokenFromLocalStorage || ""
};

const store = createStore(reducer, initialState);

export default store;