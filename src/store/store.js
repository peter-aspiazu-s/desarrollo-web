import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { formReducer } from "../reducers/formReducer";
import { contactReducer } from "../reducers/contactReducer";
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    contact: contactReducer,
    form: formReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);