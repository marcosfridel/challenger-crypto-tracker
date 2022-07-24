import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CoinTradeReducer from './cointrade/reducer'

const reducers = combineReducers({ 
    cointrade: CoinTradeReducer 
});

export type RootState = ReturnType<typeof reducers>;

export default createStore(
    reducers, 
    applyMiddleware(thunk)
);
