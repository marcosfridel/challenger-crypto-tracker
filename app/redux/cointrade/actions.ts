import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

import { coinListSupported, CoinTrade } from '../../components/Coin/Props';
import { CoinSymbol } from '../../components/Coin/Setup';
import { getObject, setObject } from '../../lib/storage/asyncStorage';
import { INIT_LIST_COIN, CHANGE_CHECK_COIN_SHOW } from './types';

export interface Action {
    readonly type: string,
    readonly payload: any
}

export interface CoinCheckActionType extends Action {
    symbol?: CoinSymbol,
    check?: boolean 
}

export const changeCheckCoinShow = (symbol:CoinSymbol, check:boolean):ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        try {
            const result:CoinTrade = await getObject(symbol);
            result.show = check;
            
            await setObject(symbol, result)
                .then((result) => dispatch({
                    type: CHANGE_CHECK_COIN_SHOW,
                    payload: {
                        symbol,
                        check
                        }
                    }
                ))
        } 
        catch(e) {
            console.log(e);
        }
    }
}

export interface CoinListActionType extends Action {
    list?:CoinTrade[];
}

export const initListCoin = ():ThunkAction<Promise<void>, {}, {}, AnyAction> => {

    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => { 
        let initCoinList:CoinTrade[] = [];

        for(const item of coinListSupported) {
            const storageCoin:CoinTrade = await getObject(item.symbol);
            initCoinList.push(storageCoin ? { ...storageCoin } : item);
        }

        const fetchResult:CoinTrade[] | void = 
            await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', 
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(result => result)
                .catch(e => { console.log(e) });
        
        const initCoinListOk:CoinTrade[] = [];
        if(fetchResult)
            for(const item of initCoinList) {
                const fetchCoin:CoinTrade | undefined = { ...fetchResult.find((itemFetch:CoinTrade) => itemFetch.symbol == item.symbol ) }; 
                
                if(fetchCoin) {
                    await setObject(
                        item.symbol, 
                        { ...item, name: fetchCoin.name, current_price: fetchCoin.current_price, price_change_percentage_24h: fetchCoin.price_change_percentage_24h }
                    );
                    initCoinListOk.push( { ...item, current_price: fetchCoin.current_price, price_change_percentage_24h: fetchCoin.price_change_percentage_24h } );
                } else {
                    initCoinListOk.push(item);
                }
            }

        dispatch({
            type: INIT_LIST_COIN,
            payload: {
                list: initCoinListOk
                }
            }
        )
    }
}