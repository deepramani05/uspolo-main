import { LOGIN, SIGNUP } from "./ActionType";

let initial = {
    user : null,
    isSignup : false
}

export const Reducer = (state=initial,action ) => {
    switch (action.type) {
        case LOGIN :
            return {
                ...state,
                user : action.payload,
                isSignup : false
            }

        case SIGNUP :
            return {
                ...state,
                isSignup : true,
            }
    
        default: return state
    }
}