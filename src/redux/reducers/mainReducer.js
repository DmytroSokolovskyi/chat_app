import {userContacts} from "../../data";
import {SET_CHAT, SET_CONTACT, SET_MSG} from "../actions";

let initialState = {contacts: userContacts, chosenContact: '', auth: false}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT : {
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
                chosenContact: {...action.payload}
            }
        }
        case SET_CHAT : {
            return {...state, chosenContact: {...action.payload}}
        }
        case SET_MSG : {
            state.contacts.map(contact => (contact.id !== action.payload.id) ? contact : contact.massages.push(action.payload.userMsg));
            return {...state}
        }

        default:
            return state;
    }
};
