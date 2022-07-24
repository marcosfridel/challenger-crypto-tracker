import { coinListSupported, CoinTrade } from "../../components/Coin/Props";
import { Action, CoinCheckActionType, CoinListActionType } from "./actions";
import { CHANGE_CHECK_COIN_SHOW, FETCH_COIN_TRADE, INIT_LIST_COIN } from "./types";

const initialstate:CoinTrade[] = coinListSupported;

const changeCheckCoinShow = (state:CoinTrade[], action:CoinCheckActionType) => {
    return state.map((item:CoinTrade) => {
        return { ...item, show: item.symbol == action.symbol && typeof action.check == 'boolean' ? action.check : item.show };
    })
}
const returnList = (action:CoinListActionType) => {
    //console.log('reducer returnList', action.list);
    return action.list;
}

const CoinTradeReducer = (state:CoinTrade[] = initialstate, action:Action) => {
  switch (action.type) {
      case INIT_LIST_COIN:
      case FETCH_COIN_TRADE:
          return returnList(action.payload);
      case CHANGE_CHECK_COIN_SHOW:
          return changeCheckCoinShow(state, action.payload);
      default:
          return state;
  }
};

export default CoinTradeReducer;