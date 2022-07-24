import React, { useEffect } from 'react';

import { FlatList, ListRenderItem } from "react-native";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import Coin from '../Coin/Index'
import CoinCheck from '../CoinCheck/Index'
import { CoinTrade } from '../Coin/Props';
import Props from './Props';
import { initListCoin } from '../../redux/cointrade/actions';

const Index = (props:Props) => {

    const stateCoinTrade = useSelector((root:RootState) => root.cointrade);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(initListCoin());
    }, []) 
    

    const renderItem:ListRenderItem<CoinTrade> = (itemRender) => {
        return props.isChecked ? <CoinCheck { ...itemRender.item }></CoinCheck> : <Coin { ...itemRender.item } />
    }  

    return (
        <>
            <FlatList
                data={ props.isChecked ? stateCoinTrade : stateCoinTrade.filter((item:CoinTrade) => item.show) } 
                renderItem={ renderItem }
            >

            </FlatList>   
        </>
    )
}

export default Index;