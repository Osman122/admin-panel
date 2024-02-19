// actions.js
export const setAuthToken = (token) => {
    // Store the auth token in local storage
    localStorage.setItem('authToken', token);

    return {
        type: 'SET_AUTH_TOKEN',
        payload: token
    };
};

// reducer.js
const initialState = {
    authToken: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_TOKEN':
            return {
                ...state,
                authToken: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
