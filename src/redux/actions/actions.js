import {SET_CHAT, SET_CONTACT, SET_MSG, SET_STATE} from "./actionsType";

export const createContact = (value) => {
    return {type: SET_CONTACT, payload: value};
};

export const choseChat = (value) => {
    return {type: SET_CHAT, payload: value};
};

export const setMsg = (value) => {
    return {type: SET_MSG, payload: value};
};

export const setState = (value) => {
    return {type: SET_STATE, payload: value};
};
