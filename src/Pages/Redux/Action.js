import { LOGIN, SIGNUP } from "./ActionType"


export const handlelogin = (data) => {
    return {
        type : LOGIN,
        payload : data
    }
}

export const handlesignup = () => {
    return {
        type : SIGNUP
    }
}