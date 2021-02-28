import {SIGN_IN_USER, SIGN_OUT_USER} from "./authConstans";

export const signInUser = (payload) => {
    return {
        type: SIGN_IN_USER, payload
    }
}
export const signOutUser = () => {
    return {
        type: SIGN_OUT_USER
    }
}