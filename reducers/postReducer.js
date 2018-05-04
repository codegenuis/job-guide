import {FETCH_USERS, NEW_USER} from '../actions/types';


// declare all states
const initialState = {
    items : [],
    item: {}
}

export default function postReducer (state = initialState, action){
    switch (action.type){
        case NEW_USER:
        return {
            ...state,
            item: action.payload
        }
        default:
        return state;
    }
}