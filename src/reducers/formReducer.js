import { types } from '../types/types';

const initialState = {
    loading: false,
    msgError: null
}

export const formReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload               
            }
        case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            }
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
        default: 
            return state;
    }
}