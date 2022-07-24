import React, { useEffect, useState } from 'react';

import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ListItem } from 'react-native-elements'
import Props from "./Props";
import CoinImg from '../CoinImg/Index'

const Index = (props:Props) => {
    
    return (
        <>
            <TouchableOpacity>
                {
                    <ListItem 
                        /* containerStyle={ { ...style.listItem, backgroundColor: stateSetting.style.backgroundLight } } */>
                        <CoinImg symbol={ props.symbol } />
                        <ListItem.Content style={ styles.listItemRow }>
                            <View style={ styles.listItemRowItem }>
                                <ListItem.Title>{ props.name ? props.name : '-' }</ListItem.Title>
                                <ListItem.Subtitle >{ `${ props.symbol }` }</ListItem.Subtitle> 
                            </View>     
                            <View style={ styles.listItemRowValue }>
                                <ListItem.Title>$ { props.current_price ? props.current_price : 0.00 }</ListItem.Title>
                                <ListItem.Subtitle >{ `${ props.price_change_percentage_24h ? props.price_change_percentage_24h.toFixed(2) : 0.00 }%` }</ListItem.Subtitle> 
                            </View>                      
                        </ListItem.Content>
                    </ListItem>
                }
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    listItemRow: {
        flexDirection: 'row'
    },
    listItemRowItem: {
        flex: 0.5
    },
    listItemRowValue: {
        flex: 0.5, 
        alignItems: "flex-end"
    }
})

export default Index;