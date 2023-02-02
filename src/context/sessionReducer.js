import { LOGIN, LOGOUT } from "./actionTypes";

const initialSessionState = {
    token: null
};

const sessionReducer = (state = initialSessionState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.payload.user.token
            };
        case LOGOUT:
            return {
                ...state,
                token: null
            };
        default:
            return state;
    }
};

export default sessionReducer;
